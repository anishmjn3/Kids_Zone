import {
    TouchableOpacity,
    ImageBackground,
    View,
    Text,
    StyleSheet,
    LayoutAnimation,
    Dimensions,
    Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
// import AlphabetFull from './../Alphabets/AlphabetFull';
import Tts from 'react-native-tts';

// const { UIManager } = NativeModules;

Tts.setDefaultLanguage('en-GB');
Tts.setDefaultPitch(1.30)
Tts.setDefaultRate(0.26)
Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact')

export default class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          timePassed: false
        };
      }
    // componentWillMount(){
    //     Tts.stop()
    // }
    render() {
        return (
            <View style={[styles.container]}>
                <ImageBackground
                    source={require('./../wood.jpg')}
                    // styles={styles.backgroundimageStyle}
                    style={[styles.backgroundimageStyle, styles.aligncenterStyle]}
                >
                    <View style={[styles.midbodyStyle, styles.aligncenterStyle]}>
                        <View style={{ marginBottom: 25 }}>
                            <LinearGradient
                                colors={[
                                    '#a40b04',//light brown
                                    '#ae800c'//dark brown
                                ]}
                                style={[
                                    styles.buttonStyle,
                                    { flexDirection: 'column' }
                                ]}
                                start={{ x: 0.0, y: 0.05 }}
                                end={{ x: 0.4, y: 1 }}
                                locations={[0.2, 0.75]}
                            >
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('DrawGames')}
                                    style={styles.aligncenterStyle}
                                >
                                    <ImageBackground
                                        source={require('./../circleshadow.png')}
                                        style={[styles.imagecircleStyle, styles.aligncenterStyle]}

                                    >

                                        <Image source={require('./drawlogo.png')}
                                            style={styles.drawmathimageStyle}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.textStyle}>Drawing</Text>
                                        <Text style={styles.textStyle}>Games</Text>

                                    </ImageBackground>
                                </TouchableOpacity>

                            </LinearGradient>
                        </View>

                        <View style={{ marginBottom: 25 }}>
                            <LinearGradient
                                colors={[
                                    '#a40b04',//light brown
                                    '#ae800c'//dark brown
                                ]}
                                style={[
                                    styles.buttonStyle,
                                    { flexDirection: 'column' }
                                ]}
                                start={{ x: 0.0, y: 0.05 }}
                                end={{ x: 0.4, y: 1 }}
                                locations={[0.2, 0.75]}
                            >
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('MathGame')}
                                    style={styles.aligncenterStyle}
                                >
                                    <ImageBackground
                                        source={require('./../circleshadow.png')}
                                        style={[styles.imagecircleStyle, styles.aligncenterStyle]}

                                    >

                                        <Image source={require('./math.png')}
                                            style={styles.drawmathimageStyle}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.textStyle}>Math</Text>
                                        <Text style={styles.textStyle}>Games</Text>

                                    </ImageBackground>
                                </TouchableOpacity>

                            </LinearGradient>
                        </View>
                        <View >
                            <LinearGradient
                                colors={[
                                    '#a40b04',//light brown
                                    '#ae800c'//dark brown
                                ]}
                                style={[
                                    styles.buttonStyle,
                                    { flexDirection: 'column' }
                                ]}
                                start={{ x: 0.0, y: 0.05 }}
                                end={{ x: 0.4, y: 1 }}
                                locations={[0.2, 0.75]}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('AlphabetsLearn')
                                        setTimeout(function(){},2000)
                                        Tts.speak(" A for Apple")

                                    }}
                                    style={styles.aligncenterStyle}
                                >
                                    <ImageBackground
                                        source={require('./../circleshadow.png')}
                                        style={[styles.imagecircleStyle, styles.aligncenterStyle]}

                                    >
                                        {/* 
                                        <Image source={require('./math.png')}
                                            style={styles.drawmathimageStyle}
                                            resizeMode="contain"
                                        /> */}
                                        {/* <View style={{borderRightWidth:5,borderColor:'white',backgroundColor:'black'}}> */}
                                        {/* <Text style={styles.textStyle}>A B C</Text> */}
                                        {/* </View> */}

                                        <Text style={styles.textStyle}>Alphabets</Text>
                                        {/* <Text style={styles.textStyle}>Learning</Text> */}

                                    </ImageBackground>
                                </TouchableOpacity>

                            </LinearGradient>
                        </View>


                    </View>
                </ImageBackground>
                {/* <Text>ads</Text> */}
            </View>
        )
    }
}

