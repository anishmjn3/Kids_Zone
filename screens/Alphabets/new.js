import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Dimensions,
  ImageBackground,

} from 'react-native';
import RNSketchCanvas, { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import _ from 'lodash';

const height = 350;
const width = 350;
var path = '';
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
      colorchange: '#000000',
      eraserstate: false,
      colorvalue: 'black',
      x: 1,
      colorarraypos: 0,
      imageh: Dimensions.get('screen').height * 0.06,
      imagew: Dimensions.get('screen').width / 7
    };
    // this.onSelectModel('model');
  }
  clearComp = () => {
    this.canvas.clear();
    this.setState({ recognitions: [] });
  }


  undocomp = () => {
    this.canvas.undo();
    // this.canvas.save();
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




  render() {
    const { colorchange, model, source, imageHeight, imageWidth, imageUri } = this.state;
    var colorchange1 = this.state.colorchange;
    return (
      <View style={[
        styles.container,
        styles.centerStyle
        // , { backgroundColor: 'white' }
      ]}>
        {/* <View style={{ height: '10%' }}>
          <Text>a b c d e f g h i j k l m n o p q r s t u v w x y z</Text>
          <Text>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Text>
        </View> */}

        <View style={{height:10}}></View>
        <View style={[
          styles.sketchboxStyle,
          styles.shadaweffectStyle
        ]}>
          <ImageBackground
            source={require("./NepaliLine.jpg")}
            style={styles.sketchboxStyle}
          >
            <SketchCanvas
              ref={ref => { this.canvas = ref }}
              style={{ 
                flex: 1,
                // backgroundColor:'white'
              }}
              strokeColor={this.state.colorvalue}
              strokeWidth={5}
              // onSketchSaved={
              // alert('filePath: ' + path)
              // }
              localSourceImage={{ filename: './abcdpics/apple/png' }}
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
            >
              <View><Text>asddsa</Text></View>

            </SketchCanvas>
          </ImageBackground>
        </View >

        <View style={[
          styles.centerStyle, {
            height: '12%',
            flexDirection: 'row'
          }]}>
          <TouchableOpacity
            style={[styles.clearButtonStyle, styles.centerStyle]}
            onPress={() => {
              this.clearComp();
              // q[0] = ''
            }}
          >
            <Text style={styles.clearbuttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={[
          styles.centerStyle, {
            height: '12%',
            flexDirection: 'row'
          }]}>
          <TouchableOpacity
            style={[styles.clearButtonStyle, styles.centerStyle]}
            onPress={() => {
              this.undocomp();
              // q[0] = ''
            }}
          >
            <Text style={styles.clearbuttonText}>Undo</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    backgroundColor: '#FFDEAD'

  },
  centerStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },

  clearButtonStyle: {
    width: Dimensions.get('screen').width * 0.28,
    height: Dimensions.get('screen').height * 0.08,
    backgroundColor: '#e70101',
    marginBottom: 20,
    borderRadius: 10,
    marginLeft: "2%"
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


  clearbuttonText: {
    fontSize: Dimensions.get('screen').height * 0.03,
    color: 'white'
  }
});

