import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  Animated,
  Button,
  StatusBar,
  Text,
  Image,
  StyleSheet,
  LayoutAnimation,
  NativeModules,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import images from "./../abcdpics/pics";
import smallalphabet from "./alphabets";
import largealphabets from './largealphabets';
import Tts from 'react-native-tts';
import * as Animatable from 'react-native-animatable';
import AlphabetFull from './AlphabetFull';
var { height, width } = Dimensions.get("window");
const animationType = ['bounce',
  'flash',
  'jello',
  'pulse',
  'rotate',
  'rubberBand',
  'shake',
  'swing',
  'tada',
  'wobble',
  'bounceIn',
  'bounceInDown',
  'bounceInUp',
  'bounceInLeft',
  'bounceInRight',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'flipInX',
  'flipInY',
  'lightSpeedIn',
  'slideInDown',
  'slideInUp',
  'slideInLeft',
  'slideInRight',
  'zoomIn',
  'zoomInDown',
  'zoomInUp',
  'zoomInLeft',
  'zoomInRight',
]
Tts.setDefaultRate(0.8, true);
// Tts.setDefaultPitch(2);


export default function AlphabetsLearn() {
  const [alphabetvalue, setAlbhabetValue] = React.useState(0)
  const [load, setLoad] = React.useState(true)
  useEffect(() => {
    Tts.speak('a for apple');
  }, [])
  return (
    <View style={[{ height: height, width: width }, styles.centerAlign]}>

      <View
        style={{ height: width * 0.6, width: width * 0.6 }}
      >
        {load &&
          <Animatable.View
            // var RandomNumber = Math.floor(Math.random() * 10) + 0;
            animation={animationType[Math.floor(Math.random() * 30) + 0]} easing="ease-out" iterationCount={1}
          >
            <Image
              source={images[alphabetvalue]}
              style={{ height: width * 0.6, width: width * 0.6 }}
            />
          </Animatable.View>
        }
      </View>
      <Text style={{ fontSize: 100 }}>
        {largealphabets[alphabetvalue]}
        {smallalphabet[alphabetvalue]}
      </Text>
      <View style={[
        styles.centerStyle, {
          height: '12%',
          flexDirection: 'row'
        }]}>
        <TouchableOpacity
          style={[styles.clearButtonStyle, styles.centerStyle]}
          onPress={() => {
            if (alphabetvalue > 0) {
              setAlbhabetValue(alphabetvalue - 1)
              setLoad(false)
              setTimeout(()=>
                setLoad(true)
              , 100)
              Tts.stop()
              Tts.speak(`   ${smallalphabet[alphabetvalue - 1]}    for ${AlphabetFull[alphabetvalue - 1]}`)
            }
          }}
        >
          <Text style={styles.clearbuttonText}>{'<='}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Tts.stop()
            Tts.speak(`   ${smallalphabet[alphabetvalue]}    for ${AlphabetFull[alphabetvalue]}`)
          }}
          style={[styles.clearButtonStyle, styles.centerStyle]}
        >
          <Text style={styles.clearbuttonText}>Read</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.clearButtonStyle, styles.centerStyle]}
          onPress={() => {
            if (alphabetvalue < 25) {
              setAlbhabetValue(alphabetvalue + 1)
              setLoad(false)
              setTimeout(()=>
                setLoad(true)
              , 100)
              Tts.stop()
              Tts.speak(`   ${smallalphabet[alphabetvalue + 1]}    for ${AlphabetFull[alphabetvalue + 1]}`)
            }
            else{
              setAlbhabetValue(0)
              setLoad(false)
              setTimeout(()=>
                setLoad(true)
              , 100)
              Tts.stop()
              Tts.speak(`   ${smallalphabet[0]}    for ${AlphabetFull[0]}`)
        
            }
          }}
        >
          <Text style={styles.clearbuttonText}>{'=>'}</Text>

        </TouchableOpacity>
      </View>

    </View>
  )
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
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
  clearbuttonText: {
    fontSize: Dimensions.get('screen').height * 0.03,
    color: 'white'
  },
  centerAlign: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
});

