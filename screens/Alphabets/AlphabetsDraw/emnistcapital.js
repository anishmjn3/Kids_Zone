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
    ImageBackground,
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
import { styles } from './styles';
// import { Header } from 'react-native/Libraries/NewAppScreen';
// import images from './abcdpics/pics';
import Tts from 'react-native-tts';

// const { UIManager } = NativeModules;

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

export default class App extends Component {
    static navigationOptions = () => ({
        title: 'Capital Alphabets',
        headerStyle: {
            backgroundColor: '#00008b',
        },
        headerTitleStyle: {
            color: 'white'
        },
        // headerShown:false

    });
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            output: "",
            // q:[],
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
    componentWillUnmount(){
        this.clearComp();
    }
    clearComp = () => {
        this.canvas.clear();
        this.setState({ recognitions: [] });
    }


    onSelectModel(model) {
        this.setState({ model });
        var modelFile = "models/EmnistCapital.lite";
        var labelsFile = "models/emnistCapital.txt";
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
            q[i] = res["label"];
            y[i] = (res["confidence"] * 100).toFixed(0);
            i++;
            if(i==1){
            Tts.speak(q[0])
            }
            return;
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
                {/* <Header
                
                /> */}
                <View style={[
                    styles.sketchboxStyle,
                    styles.shadaweffectStyle
                ]}>
                    <ImageBackground
                        source={require("./lines.jpg")}
                        style={styles.sketchboxStyle}
                    >
                        <SketchCanvas
                            ref={ref => { this.canvas = ref }}
                            style={{ flex: 1 }}
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
                    </ImageBackground>
                </View>
                {this.renderResults()}
                
                
                {/* </View> */}
                <View style={[
                    styles.centerStyle, {
                        height: '6%',
                        flexDirection: 'row'
                    }]}>
                    <Text style={styles.cameraText}>{q[0].toUpperCase()}</Text>
                    {/* <Text>{y[0]} </Text> */}
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
                            q[0] = ''
                        }}
                    >
                        <Text style={styles.clearbuttonText}>Clear</Text>
                    </TouchableOpacity>


                </View>

            </View>
        );
    }

}
