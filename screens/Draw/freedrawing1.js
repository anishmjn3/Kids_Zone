import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView,
    Dimensions,
    Button
} from 'react-native';

import RNSketchCanvas, { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import _ from 'lodash';
import Tflite from 'tflite-react-native';
import RNFS from 'react-native-fs';
import images from './imageCollection';

let tflite = new Tflite();
const height = 350;
const width = 350;
var path = '';
var searchTerm = '';
var x = ['', ''];
var y = [];
var i = 0;
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
            colorvalue: 'black',
            eraserstate: false,
            strokevalue:5
        };
        this.onSelectModel('model');
    }
    clearComp = () => {
        this.canvas.clear();
        this.setState({ recognitions: [] });
    }


    onSelectModel(model) {
        this.setState({ model });
        var modelFile = "models/retrained_graph30ka.lite";
        var labelsFile = "models/retrained_labels.txt";
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



    renderResults() {
        const { model, recognitions, imageHeight, imageWidth } = this.state;
        var i = 0;
        return recognitions.map((res, id) => {
            console.log(res["label"]);
            const t = './quickdraw/';
            const u = '.jpg';
            x[i] = res["label"];
            y[i] = (res["confidence"] * 100).toFixed(0);
            if (y[i - 1] > 60 || x[i - 1] == '') {
                x[i] = ''
                y[i] = ''
            }
            i++;
            // if (x == images.imgname)
            if (x[i - 1] == "moon" && res["confidence"] * 100 < 16 ||
                x[i - 1] == "garden hose" && res["confidence"] * 100 <= 6 ||
                x[i - 1] == "circle" && res["confidence"] * 100 < 6
            ) {
                x[i - 1] = ''
                y[i - 1] = ''

            }



            return (
                <View style={[styles.centerStyle, { marginLeft: '3%' }]}>
                    <TouchableOpacity
                        onPress={() =>
                            Alert.alert(res["label"])
                        }
                    >
                        <Text key={id} style={styles.cameraText}>
                            {x[i - 1]}
                        </Text>
                        {(x[i - 1] == '') ?
                            <Text></Text>
                            :
                            <Image
                                source={images[x[i - 1]]}
                                style={{ height: "50%", width: Dimensions.get('screen').width / 7 }}
                                resizeMode="contain"
                            />
                        }
                    </TouchableOpacity>
                </View>
            )
        });

    }

    render() {
        const { colorchange, model, source, imageHeight, imageWidth, imageUri } = this.state;
        var colorchange1 = this.state.colorchange;
        return (
            <View style={[
                styles.container,
                styles.centerStyle
            ]}>
                {/* <Text>{colorchange1}</Text> */}
                <View style={{ height: "10%" }}></View>
                <View style={[
                    styles.sketchboxStyle,
                    styles.shadaweffectStyle
                ]}>

                    <SketchCanvas
                        ref={ref => { this.canvas = ref }}
                        style={{ flex: 1, backgroundColor: 'white' }}
                        strokeColor={this.state.colorvalue}
                        strokeWidth={this.state.strokevalue}
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
                <View
                    style={[
                        styles.centerStyle,
                        { height: "15%", flexDirection: 'row', justifyContent: 'space-around' }
                    ]}
                >
                    {this.renderResults()}

                </View>
                <View style={styles.centerStyle}>
                    <View style={[styles.clearButtonStyle, { backgroundColor: "#f1f03d" }]}>
                        <TouchableOpacity
                            style={[
                                styles.clearButtonStyle,
                                styles.centerStyle,
                                styles.shadaweffectStyle,
                                { backgroundColor: (this.state.colorvalue == 'black') ? '#e70101' : '#eceb09' }
                            ]}
                            onPress={() => {
                                if (this.state.colorvalue == 'black')
                                {
                                    this.setState({ colorvalue: 'white' })
                                this.setState({strokevalue:15})
                                }
                                    else
                                    {
                                    this.setState({ colorvalue: 'black' })
                                    this.setState({strokevalue:5})
                                }
                                }
                            }
                        >
                            <Text
                                style={[
                                    styles.clearbuttonText,
                                    {color:(this.state.colorvalue=='black')?'white':'black'}
                                ]}
                            >
                                Eraser
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[
                        styles.clearButtonStyle,
                        styles.shadaweffectStyle, 
                        { backgroundColor: "#f1f03d" }
                        ]}>
                        <TouchableOpacity
                            style={[styles.clearButtonStyle, styles.centerStyle]}
                            onPress={() => {
                                this.clearComp();
                            }}
                        >
                            <Text style={styles.clearbuttonText}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: "5%" }}></View>
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
        width: Dimensions.get('screen').width * 0.25,
        height: Dimensions.get('screen').height * 0.06,
        backgroundColor: '#e70101',
        marginBottom: Dimensions.get('screen').width * 0.05,
        borderRadius: 10,
    },
    clearButtonBackStyle: {
        width: Dimensions.get('screen').width * 0.25,
        height: Dimensions.get('screen').height * 0.06,
        backgroundColor: '#f1f03d',
        marginBottom: Dimensions.get('screen').width * 0.05,
        borderRadius: 10,
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
        height: Dimensions.get('screen').height * 0.40,
        width: Dimensions.get('screen').width * 0.8,
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
        fontSize: Dimensions.get('screen').height * 0.025,
        color: 'white'
    }
});


