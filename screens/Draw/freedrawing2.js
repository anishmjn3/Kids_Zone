import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Image,
    ScrollView,
    Button
} from 'react-native';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import _ from 'lodash';
import Tflite from 'tflite-react-native';
import RNFS from 'react-native-fs';


let tflite = new Tflite();
const height = 350;
const width = 350;
var path = '';
var searchTerm = '';
console.disableYellowBox = true;
// var filePath=require("aa.png")

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
        };
        this.onSelectModel('model');
    }
    clear = () => {
        this.canvas.save()
        this.canvas.clear();
        this.canvas.clear();
        setTimeout(function () {
            // this.canvas.save()
        }, 3000)

    }

    Detect = () => {
        this.canvas.save()
        // this.renderResults()
    }

    onSelectModel(model) {
        this.setState({ model });
        var modelFile = "models/retrainedgraph.lite";
        var labelsFile = "models/retrainedlabels.txt";
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

    // UNSAFE_componentWillMount(){
    //     this.onSelectModel('model');
    // }
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
        // if(this.clear==true)
        // {return;}
        console.log("fds")
        return recognitions.map((res, id) => {
            console.log(res["label"]);
            const t = './quickdraw/';
            const u = '.jpg';
            // if ((res["confidence"]*100).toFixed(0)>50)
                        // {x = Math.max((res["confidence"]*100).toFixed(0))}
                        {x=res["label"]}
            const y=(t+x+u);
            const z=("./quickdraw/circle.jpg")
            if(x==images.imgname)
            var s=images.uri
            return (
                <View>
                    <TouchableOpacity onPress={()=>Alert.alert(res["label"])}>
                    <Text key={id} style={styles.cameraText}>
                        {/* {res["label"] // + "-" + (res["confidence"] * 100).toFixed(0) + "%"} */}
                        {/* if (Math.max(res["confidence"])) */}
                        
                        {res["label"]}
                        {s}
                        {/* {typeof(x)} */}
                        {/* {console.log(res);} */}
                        {/* {" " + (res["confidence"] * 100).toFixed(0)} */}
                        {/* <Image */}
                            {/* style={{height:142,width:142}} */}
                            {/* // source={require('./quick draw/''.jpg')} */}
                            {/* // source={require(z)} */}
                        {/* /> */}
                    </Text>
</TouchableOpacity>
                </View>
            )
        });

    }

    render() {
        const { model, source, imageHeight, imageWidth, imageUri } = this.state;
        return (
            <View style={[
                styles.container,
                styles.centerStyle
            ]}>
                <View style={[{ flexDirection: 'row' }]}>
                    <View style={[
                        styles.circleStyle,
                        styles.shadaweffectStyle,
                        styles.centerStyle
                    ]}>
                        <Text>Draw</Text>
                    </View>

                    <View style={[
                        styles.circleStyle,
                        styles.shadaweffectStyle,
                        styles.centerStyle
                    ]}>
                        <Text>Auto</Text>
                        <Text>Draw</Text>
                    </View>
                </View>
                <View style={[
                    styles.sketchboxStyle,
                    styles.shadaweffectStyle
                ]}>
                    <RNSketchCanvas
                        ref={ref => (this.canvas = ref)}
                        containerStyle={
                            {
                                backgroundColor: 'white',
                                flex: 1
                            }
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

                        }
                        }
                    />
                    {/* {console.log("Asd")} */}
                </View>
                <View 
                style={[
                    styles.centerStyle, 
                    { height: 150 }]}
                >
                    {this.renderResults()}
                    {/* {this.renderResults()} */}
                    {/* {x} */}
                    {/* <Image  */}
                        {/* source={} */}
                        {/* /> */}
                </View>
                <View style={[styles.centerStyle]}>
                    <TouchableOpacity
                        style={[styles.clearButtonStyle, styles.centerStyle]}
                        // onPress={this.clear}
                        onPress={()=>this.props.navigation.navigate('Home')}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Clear</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
            style={{ width: 100, height: 50, backgroundColor: 'red', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginBottom: 20, borderRadius: 10 }}
            onPress={this.Detect}
          >
            <Text style={{ fontSize: 20, color: 'white' }}>Detect</Text>
          </TouchableOpacity> */}


                    {/* <Button title="Clear" style={{width:300,height:500}} onPress={this.clear} />
            <Button title="Detect" onPress={this.Detect}/> */}
                </View>
                {/* </View> */}
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
        marginTop: -60,
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
    clearButtonStyle: {
        width: 100,
        height: 50,
        backgroundColor: 'red',
        marginBottom: 20,
        borderRadius: 10
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

    },
    sketchboxStyle: {
        height: 350,
        width: 350,
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
        width: 30,
        height: 30,
        borderRadius: 15,
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
    }
});


const images=[
    {
        "imgname":'circle',
        "uri":require('./quickdraw/circle.jpg')
    },
    {
        "imgname":'line',
        "uri":require('./quickdraw/line.jpg')
    }

]