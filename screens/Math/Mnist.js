import React, { Component, useEffect, useState } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    TouchableHighlight,
    NativeModules,
    LayoutAnimation,
    Image,
    ScrollView,
    Dimensions,
    Button,
    Animated
} from 'react-native';
import Sound from 'react-native-sound';
import RNSketchCanvas, { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import _ from 'lodash';
import Tflite from 'tflite-react-native';
import RNFS from 'react-native-fs';
import images from './../abcdpics/pics';

import Tts from 'react-native-tts';

Tts.setDefaultLanguage('en-GB');
Tts.setDefaultPitch(1.30)
Tts.setDefaultRate(0.26)
Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact')

let tflite = new Tflite();
const height = 350;
const width = 350;
var path = '';
var searchTerm = '';
var q = ['', ''];
var y = [];
var increase = 0;
var decrease = 0;
var i = 0;
console.disableYellowBox = true;
// var filePath=require("aa.png")
var colorarray = ["#000000", "#ffffff"]

function ding() {
    var whoosh = new Sound('ding.mp3', Sound.MAIN_BUNDLE, () => {
        // Play the sound with an onEnd callback</Text>

        whoosh.play();
    });
}
function buzzer() {
    var whoosh = new Sound('buzzer.mp3', Sound.MAIN_BUNDLE, () => {
        // Play the sound with an onEnd callback
        whoosh.play();
    });
}
function pop() {
    var whoosh = new Sound('pop.mp3', Sound.MAIN_BUNDLE, () => {
        // Play the sound with an onEnd callback
        whoosh.play();
    });
}
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            output: "",
            model: null,
            source: null,
            imageHeight: height,
            imageWidth: width,
            recognitions: [],
            timePassed: false,
            path: null,
            colorchange: '#000000',
            eraserstate: false,
            colorvalue: 'black',
            x: 1,
            colorarraypos: 0,
            imageh: Dimensions.get('screen').height * 0.06,
            imagew: Dimensions.get('screen').width / 7
        };
        this.onSelectModel('model');
    }
    clearComp = () => {
        this.canvas.clear();
        this.setState({ recognitions: [] });
    }


    undocomp = () => {
        this.canvas.undo();
        this.canvas.save();
    }

    onSelectModel(model) {
        this.setState({ model });
        var modelFile = "models/mnist3.lite";
        var labelsFile = "models/mnistlabels.txt";
        tflite.loadModel({
            model: modelFile,
            labels: labelsFile,
        },
            (err, res) => {
                if (err)
                    console.log(err);
                else
                    console.log(res);
            });
    }

    onSketchSave() {
        return (
            <View style={styles.functionButton}>
                <Text style={{ color: 'white' }}>Save</Text>
            </View>
        )
    }
    onSketchSavedPreference() {
        return {
            folder: 'RNSketchCanvas',
            filename: String(Math.ceil(Math.random() * 100000000)),
            transparent: false,
            imageType: 'png'
        }
    }
    renderResults() {
        const { model, recognitions, imageHeight, imageWidth } = this.state;
        var i = 0;
        return recognitions.map((res, id) => {
            console.log(res["label"]);
            const t = './quickdraw/';
            const u = '.jpg';
            q[i] = res["label"];
            y[i] = (res["confidence"] * 100).toFixed(0);
            if (y[i - 1] > 30 || q[i - 1] == '') {
                q[i] = ''
                y[i] = ''
            }
            i++;
            // if (x == images.imgname)
            if (i == 1) {
                Tts.speak(q[0])
            }



            return
            // (
            //     <View style={[styles.centerStyle, { marginLeft: '3%' }]}>
            //         <TouchableOpacity
            //             onPress={() =>
            //                 Alert.alert(res["label"])
            //             }
            //         >
            //             <Text key={id} style={styles.cameraText}>
            //                 {q[0]}
            //             </Text>
            //         </TouchableOpacity>
            //     </View>
            // )
        });

    }

    _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        if (this.state.imagew == Dimensions.get('screen').width / 7)
            this.setState({ imagew: this.state.imagew + 1, imageh: this.state.imageh + 1 })
        else
            this.setState({ imagew: this.state.imagew - 1, imageh: this.state.imageh - 1 })

    }


    pics(y) {
        // const {x}=this.state;
        // const fadeAnim = useState(new Animated.Value(0));
        // const fadeIn = () => {
        //     // Will change fadeAnim value to 1 in 5 seconds
        //     Animated.timing(fadeAnim, {
        //       toValue: 1,
        //       duration: 2000
        //     }).start();
        //   };
        // React.useEffect(() => {
        //     Animated.timing(
        //       fadeAnim,
        //       {
        //         toValue: 1,
        //         duration: 10000,
        //       }
        //     ).start();
        //   }, [])
        var myloop = []
        t = this.state.x
        for (let i = 0; i < y; i++) {
            myloop.push(
                // <Animated.View style={{opacity:fadeAnim}}>

                <Image
                    source={images[0]}
                    style={{
                        // height: Dimensions.get('screen').height * 0.06,
                        // width: Dimensions.get('screen').width / 7
                        height: this.state.imageh,
                        width: this.state.imagew
                    }}
                    resizeMode='contain'
                />
                // </Animated.View>
            )
        }
        return (
            <ScrollView horizontal={true}>
                {myloop}
            </ScrollView>
        )
    }

    allpics(r) {
        if (r <= 5)
            return (
                <View>
                    {this.pics(r)}
                </View>
            )
        if (r > 5 && r <= 9)
            return (
                <View>
                    {this.pics(5)}
                    {this.pics(r - 5)}
                </View>
            )
        // if (r > 10 && r <= 15)
        //   return (
        //     <View>
        //       {this.pics(5)}
        //       {this.pics(5)}
        //       {this.pics(r - 10)}
        //     </View>
        //   )
    }


    increasex(t) {
        if (t < 9) {
            increase = t + 1;
            // pop()
        }
        else {
            increase = 1;
            // buzzer()
        }
    }
    decreasex(t) {
        if (t > 1) {
            decrease = t - 1;
            // pop()
        }
        else {
            decrease = 9;
            // buzzer()
        }
    }

    render() {
        const { colorchange, model, source, imageHeight, imageWidth, imageUri } = this.state;
        var colorchange1 = this.state.colorchange;
        return (
            <View style={[
                styles.container,
                styles.centerStyle
            ]}>
                <View style={{ marginBottom: 15 }}>
                    <Text style={{ fontSize: 20 }}>Count the apples</Text>
                </View>
                <View style={[{ height: '16%' }, styles.centerStyle]}>
                    {this.allpics(this.state.x)}
                </View>
                <View style={[
                    styles.sketchboxStyle,
                    styles.shadaweffectStyle
                ]}>
                    {/* <RNSketchCanvas
            ref={ref => (this.canvas = ref)}
            containerStyle={[
              {
                backgroundColor: 'white',
                flex: 1
              },
            ]
            }
            canvasStyle={
              {
                backgroundColor: 'transparent',
                flex: 1
              }
            }
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            savePreference={() => {
              return {
                folder: 'RNSketchCanvas',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'png'
              }
            }

            }


            strokeColors={[{color:colorarray[this.state.colorarraypos]}]}
              // touchEnabled={true}        
            strokeComponent={color => (
                <View 
                style={[
                    { backgroundColor: color,borderWidth:2,height:30,width:70 },
                    styles.centerStyle
                    //  styles.strokeColorButton
                    ]} 
                >
                    <Text>Eraser</Text>
                </View>
              )}
            onStrokeEnd={this.Detect}
            onSketchSaved={(success, filePath) => {
              // alert('filePath: ' + filePath); 
              console.log(filePath);
              path = filePath;
              tflite.runModelOnImage({
                path: filePath,
                imageMean: 128.0,
                imageStd: 128.0,
                numResults: 3,
                threshold: 0.05
              },
                (err, res) => {
                  if (err)
                    console.log(err);
                  else
                    this.setState({ recognitions: res });
                });
              RNFS.unlink(filePath);

            }}
          /> */}
                    <SketchCanvas
                        ref={ref => { this.canvas = ref }}
                        style={{ flex: 1, backgroundColor: 'white' }}
                        strokeColor={this.state.colorvalue}
                        strokeWidth={5}
                        onSketchSaved={(success, path) => {
                            // alert('filePath: ' + path);
                            console.log(path);
                            // path = filePath;
                            tflite.runModelOnImage({
                                path: path,
                                imageMean: 128.0,
                                imageStd: 128.0,
                                numResults: 3,
                                threshold: 0.05
                            },
                                (err, res) => {
                                    if (err)
                                        console.log(err);
                                    else
                                        this.setState({ recognitions: res });
                                });
                            RNFS.unlink(path);

                        }}
                        onStrokeEnd={() => {
                            this.canvas.save(
                                "png",
                                false,
                                'RNSketchCanvas',
                                String(Math.ceil(Math.random() * 100000000)),
                                true,
                                false,
                                false
                            )
                        }
                        }
                    />
                </View>
                {/* <View
                    style={[
                        styles.centerStyle,
                        {
                            // height: "6%",
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }
                    ]}
                > */}
                {this.renderResults()}
                {/* <Text style={styles.cameraText}>{x[0]}</Text> */}
                {/* </View> */}
                <View style={[
                    styles.centerStyle, {
                        height: '3%',
                        flexDirection: 'row'
                    }]}>
                    {/* <Text>{q[0]}</Text> */}
                </View>
                <View style={[
                    styles.centerStyle, {
                        height: '12%',
                        flexDirection: 'row'
                    }]}>
                    {/* <TouchableOpacity
              style={[
                styles.clearButtonStyle,
                styles.centerStyle,
                {backgroundColor:(this.state.colorvalue=='black')?'#e70101':'#f15c07'}
              ]}
              onPress={()=>{
                if(this.state.colorvalue=='black')
                  this.setState({colorvalue:'white'})
                else
                this.setState({colorvalue:'black'})
              }
            }
            >
              <Text style={styles.clearbuttonText}>Eraser</Text>
            </TouchableOpacity> */}
                    <TouchableOpacity
                        style={[styles.clearButtonStyle, styles.centerStyle]}
                        onPress={() => {
                            // this.clearComp();
                            if (q[0] == this.state.x) {
                                ding()
                                this.setState({ x: increase });
                                q[0] = ''
                                if (increase > 9)
                                    this.setState({ x: 1 })
                                this.clearComp();
                                // buzzer()
                                // else
                                // pop()


                            }
                            else
                                buzzer()
                            this.setState({ colorarraypos: 1 })
                            // this.canvas.deletePath()
                            // this.setState({ x: increase });
                            // this.setState({ x: decrease });
                            // if (decrease <=1)
                            // buzzer()
                            // else
                            // pop()
                        }}
                    >
                        <Text style={styles.clearbuttonText}>{'OK'}</Text>

                    </TouchableOpacity>
                </View>
                {/* <Text>{"1"+"2"}</Text> */}
                <View style={[
                    styles.centerStyle, {
                        height: '12%',
                        flexDirection: 'row'
                    }]}>
                    <TouchableOpacity
                        style={[styles.clearButtonStyle, styles.centerStyle]}
                        onPress={() => {
                            this.clearComp();
                            this.setState({ x: decrease });
                            // if (decrease <= 0)
                            //     buzzer()
                            // else
                                pop()
                        }}
                    >
                        <Text style={styles.clearbuttonText}>{'<='}</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.clearButtonStyle, styles.centerStyle]}
                        onPress={() => {
                            this.clearComp();
                            q[0] = ''
                        }}
                    >
                        <Text style={styles.clearbuttonText}>Clear</Text>
                    </TouchableOpacity>
                    {this.increasex(this.state.x)}
                    {this.decreasex(this.state.x)}

                    <TouchableOpacity
                        style={[styles.clearButtonStyle, styles.centerStyle]}
                        onPress={() => {
                            this.clearComp();
                            this._onPress();
                            this.setState({ x: increase });
                            q[0] = ''
                            if (increase > 9)
                                this.setState({ x: 1 })
                            // buzzer()
                            // else
                            pop()
                        }}
                    >
                        <Text style={styles.clearbuttonText}>{"=>"}</Text>

                    </TouchableOpacity>

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    centerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

    },
    circleStyle: {
        //   flex:1,
        height: 70,
        width: 70,
        borderRadius: 35,
        marginTop: -0,
        marginBottom: 40,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    strokeColorButton: {
        marginHorizontal: 2.5,
        marginVertical: 8,
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    clearButtonStyle: {
        width: Dimensions.get('screen').width * 0.28,
        height: Dimensions.get('screen').height * 0.08,
        backgroundColor: '#e70101',
        marginBottom: 20,
        borderRadius: 10,
        marginLeft: "2%"
    },
    strokeColorButton: {
        marginHorizontal: 2.5,
        marginVertical: 8,
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    cameraText: {
        fontSize: 20,
        // justifyContent: 'space-between'
    },
    sketchboxStyle: {
        // height: Dimensions.get('screen').width * 0.8,
        // width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.35,
        width: Dimensions.get('screen').height * 0.35,
        borderColor: 'grey',
        // flex:1
    },
    shadaweffectStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    strokeWidthButton: {
        marginHorizontal: 2.5,
        marginVertical: 8,
        width: 70,
        height: 30,
        // borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#39579A'
    },
    functionButton: {
        marginHorizontal: 2.5,
        marginVertical: 8,
        height: 30,
        width: 60,
        backgroundColor: '#39579A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    clearbuttonText: {
        fontSize: Dimensions.get('screen').height * 0.03,
        color: 'white'
    }
});






// // import React from 'react';
// // import {
// //   NativeModules,
// //   LayoutAnimation,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   View,
// // } from 'react-native';

// // const { UIManager } = NativeModules;

// // UIManager.setLayoutAnimationEnabledExperimental &&
// //   UIManager.setLayoutAnimationEnabledExperimental(true);

// // export default class App extends React.Component {
// //   state = {
// //     w: 100,
// //     h: 100,
// //   };

//   // _onPress = () => {
//   //   // Animate the update
//   //   LayoutAnimation.spring();
//   //   if(this.state.w==100)
//   //   this.setState({w: this.state.w+15 , h: this.state.h+15})
//   //   else
//   //   this.setState({w: this.state.w-15 , h: this.state.h-15})

//   // }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
// //         <TouchableOpacity onPress={this._onPress}>
// //           <View style={styles.button}>
// //             <Text style={styles.buttonText}>Press me!</Text>
// //           </View>
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   box: {
// //     width: 200,
// //     height: 200,
// //     backgroundColor: 'red',
// //   },
// //   button: {
// //     backgroundColor: 'black',
// //     paddingHorizontal: 20,
// //     paddingVertical: 15,
// //     marginTop: 15,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// // });

// // import React, { Component } from 'react';
// // import {
// //   AppRegistry,
// //   StyleSheet,
// //   Text,
// //   View,
// //   Alert,
// //   TouchableOpacity,
// //   ScrollView,
// //   Platform
// // } from 'react-native';

// // import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
// // import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';


// // export default class example extends Component {
// //   constructor(props) {
// //     super(props)

// //     this.state = {
// //       example: 0,
// //       color: '#FF0000',
// //       thickness: 5,
// //       message: '',
// //       photoPath: null,
// //       scrollEnabled: true
// //     }
// //   }
// //   render() {
// //     return (
// //       <View style={{ flex: 1, flexDirection: 'row' }}>
// //         <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 36 }}
// //           scrollEnabled={this.state.scrollEnabled}
// //         >
// //           <TouchableOpacity onPress={() => this.setState({ example: 0 })}>
// //             <Text>Close</Text>
// //           </TouchableOpacity>
// //           <SketchCanvas
// //             text={[
// //               { text: 'Page 1', position: { x: 20, y: 20 }, fontSize: Platform.select({ ios: 24, android: 48 }) },
// //               { text: 'Signature', font: Platform.select({ ios: 'Zapfino', android: 'fonts/IndieFlower.ttf' }), position: { x: 20, y: 220 }, fontSize: Platform.select({ ios: 24, android: 48 }), fontColor: 'red' }
// //             ]}
// //             localSourceImage={{ filename: 'whale.png', directory: SketchCanvas.MAIN_BUNDLE, mode: 'AspectFit' }}
// //             style={styles.page}
// //             onStrokeStart={() => this.setState({ scrollEnabled: false })}
// //             onStrokeEnd={() => this.setState({ scrollEnabled: true })}
// //           />
// //           {/* <SketchCanvas
// //             text={[{ text: 'Page 2', position: { x: 0.95, y: 0.05 }, anchor: { x: 1, y: 0 }, coordinate: 'Ratio', fontSize: Platform.select({ ios: 24, android: 48 }) }]}
// //             style={styles.page}
// //             onStrokeStart={() => this.setState({ scrollEnabled: false })}
// //             onStrokeEnd={() => this.setState({ scrollEnabled: true })}
// //           />
// //           <SketchCanvas
// //             text={[{ text: 'Page 3', position: { x: 0.5, y: 0.95 }, anchor: { x: 0.5, y: 1 }, coordinate: 'Ratio', fontSize: Platform.select({ ios: 24, android: 48 }) }]}
// //             style={styles.page}
// //             onStrokeStart={() => this.setState({ scrollEnabled: false })}
// //             onStrokeEnd={() => this.setState({ scrollEnabled: true })}
// //           />
// //           <SketchCanvas
// //             text={[{ text: 'Page 4', position: { x: 20, y: 20 }, fontSize: Platform.select({ ios: 24, android: 48 }) }]}
// //             style={styles.page}
// //             onStrokeStart={() => this.setState({ scrollEnabled: false })}
// //             onStrokeEnd={() => this.setState({ scrollEnabled: true })}
// //           /> */}
// //         </ScrollView>
// //       </View>
// //     )
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   strokeColorButton: {
// //     marginHorizontal: 2.5,
// //     marginVertical: 8,
// //     width: 30,
// //     height: 30,
// //     borderRadius: 15,
// //   },
// //   strokeWidthButton: {
// //     marginHorizontal: 2.5,
// //     marginVertical: 8,
// //     width: 30,
// //     height: 30,
// //     borderRadius: 15,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#39579A'
// //   },
// //   functionButton: {
// //     marginHorizontal: 2.5,
// //     marginVertical: 8,
// //     height: 30,
// //     width: 60,
// //     backgroundColor: '#39579A',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     borderRadius: 5,
// //   },
// //   cameraContainer: {
// //     flex: 1,
// //     flexDirection: 'column',
// //     backgroundColor: 'black',
// //     alignSelf: 'stretch'
// //   },
// //   preview: {
// //     flex: 1,
// //     justifyContent: 'flex-end',
// //   },
// //   capture: {
// //     flex: 0,
// //     backgroundColor: '#fff',
// //     borderRadius: 5,
// //     padding: 15,
// //     paddingHorizontal: 20,
// //     alignSelf: 'center',
// //     margin: 20
// //   },
// //   page: {
// //     flex: 1,
// //     height: 300,
// //     elevation: 2,
// //     marginVertical: 8,
// //     backgroundColor: 'white',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.75,
// //     shadowRadius: 2
// //   }
// // });

// // AppRegistry.registerComponent('example', () => example);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   View,
//   Text,
//   Dimensions,
//   TouchableOpacity
// } from 'react-native';

// import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

// export default class example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       colorvalue: 'red'
//     }
//   }
//   render() {
//     // const { colorvalue } = this.state;

//     // sketchSaveFunction=()=>{

//       // this.canvas.save(
//       //   "png",
//       //   false,
//       //   'RNSketchCanvas',
//       //   String(Math.ceil(Math.random() * 100000000)),
//       //   true,
//       //   false,
//       //   false
//       //   )

//     // }
//     return (
//       <View style={styles.container}>
//         <View
//           style={{
//             // flex: 1,
//             flexDirection: 'row',
//             height: Dimensions.get('screen').height * 0.35,
//             width: Dimensions.get('screen').height * 0.35,
//             borderColor: 'grey',
//             shadowColor: "#000",
//             shadowOffset: {
//               width: 0,
//               height: 5,
//             },
//             shadowOpacity: 0.34,
//             shadowRadius: 6.27,

//             elevation: 10,
//           }}
//         >
          // <SketchCanvas
          // ref={ref=>{this.canvas=ref}}
          //   style={{ flex: 1,backgroundColor:'white' }}
          //   strokeColor={this.state.colorvalue}
          //   strokeWidth={5}
          //   onSketchSaved={(success, path) => {
          //     alert('filePath: ' + path);
          //   }}
          //   onStrokeEnd={()=>{
          //     this.canvas.save(
          //       "png",
          //       false,
          //       'RNSketchCanvas',
          //       String(Math.ceil(Math.random() * 100000000)),
          //       true,
          //       false,
          //       false
          //     )
          //   }
          //   }
          // />
//         </View>
//         <TouchableOpacity
//           style={styles.clearButtonStyle}
//           onPress={() => this.setState({ colorvalue: 'black' })}
//         >
//           <Text style={styles.clearbuttonText}>color change</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.clearButtonStyle}
//           onPress={() => {
//             this.setState({ colorvalue: 'black' })
//             this.canvas.save(
//               "png",
//               false,
//               'RNSketchCanvas',
//               String(Math.ceil(Math.random() * 100000000)),
//               true,
//               false,
//               false   )   
//           }}
//         >
//           <Text style={styles.clearbuttonText}>color change</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
//   },
//   functionButton: {
//     marginHorizontal: 2.5,
//     marginVertical: 8,
//     height: 30,
//     width: 60,
//     backgroundColor: '#39579A',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   clearButtonStyle: {
//     width: Dimensions.get('screen').width * 0.48,
//     height: Dimensions.get('screen').height * 0.08,
//     backgroundColor: 'red',
//     marginBottom: 20,
//     borderRadius: 10,
//     marginLeft: "2%"
//   },

//   clearbuttonText: {
//     fontSize: Dimensions.get('screen').height * 0.03,
//     color: 'white'
//   }
// });

// AppRegistry.registerComponent('example', () => example);