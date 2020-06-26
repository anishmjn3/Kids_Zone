import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Vibration,
    Alert
} from 'react-native';

import Sound from 'react-native-sound';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

function ding() {
    var whoosh = new Sound('ding.mp3', Sound.MAIN_BUNDLE, () => {
        // Play the sound with an onEnd callback</Text>

        whoosh.play();
    });
}

export default class MyProject extends Component {

    constructor() {

        super();

        this.state = {

            // This is our Default number value
            NumberHolder: 1

        }
    }

    GenerateRandomNumber = () => {

        var RandomNumber = Math.floor(Math.random() * 10) + 0;

        this.setState({

            NumberHolder: RandomNumber

        })
        // Alert.alert("ass")
    }

    randomnumbelow10() {
        var a = Math.floor(Math.random() * 10) + 0;
        return (a);
    }

    randomnumbelow20() {
        return (Math.floor(Math.random() * 20 + 0));
    }
    randomnumbelow4() {
        return (Math.floor(Math.random() * 4 + 1));
    }

    answerbutton(c, c1) {
        if (c == c1) {
            return (
                <View style={[styles.answerStyle, { backgroundColor: '#a40b04' }]}>
                    <TouchableOpacity
                        onPress={()=>{
                            ding()
                            this.GenerateRandomNumber()
                            
                        }}
                        style={styles.answerStyle}
                    >
                        <LinearGradient
                            colors={[
                                '#a40b04',//light brown
                                '#6a0f0b'//dark brown
                            ]}
                            style={[
                                styles.answerStyle,
                                // { flexDirection: 'column' }
                            ]}
                            start={{ x: 0.0, y: 0.05 }}
                            end={{ x: 0.4, y: 1 }}
                            locations={[0.1, 0.75]}
                        >
                            <Text style={styles.answertextstyle}>{c}</Text>
                            {/* {Alert.alert("Correct Answer!!")} */}
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            );
        }
        else {
            return (
                <View style={[styles.answerStyle, { backgroundColor: 'black' }]}>
                    <TouchableOpacity
                        onPress={() => Vibration.vibrate()}
                        style={styles.answerStyle}
                    >
                        <LinearGradient
                            colors={[
                                '#a40b04',//light brown
                                '#6a0f0b'//dark brown
                            ]}
                            style={[
                                styles.answerStyle,
                                // { flexDirection: 'column' }
                            ]}
                            start={{ x: 0.0, y: 0.05 }}
                            end={{ x: 0.4, y: 1 }}
                            locations={[0.1, 0.75]}
                        >
                            <Text style={styles.answertextstyle}>{c}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            )
        }
    }


    render() {
        var a1 = this.randomnumbelow10();
        var a2 = this.randomnumbelow10();
        var b1 = this.randomnumbelow20() % 4;
        var b2 = (b1 + 1) % 4;
        var b3 = (b1 + 2) % 4;
        var b4 = (b1 + 3) % 4;
        var c1 = a1 + a2;
        var c2 = this.randomnumbelow20();
        var c3 = this.randomnumbelow20();
        var c4 = this.randomnumbelow20();
        if (c1 == c2 | c3 == c2 | c4 == c2) c2 = this.randomnumbelow20();
        if (c1 == c3 | c2 == c3 | c4 == c3) c3 = this.randomnumbelow20();
        if (c1 == c4 | c2 == c4 | c3 == c4) c4 = this.randomnumbelow20();
        var c = [c1, c2, c3, c4]
        return (

            <View style={styles.MainContainer} >
                <ImageBackground
                    source={require('./../../wood.jpg')}
                    style={styles.imagebackgroundStyle}
                >
                    <View style={styles.questionStyle}>
                        <LinearGradient
                            colors={[
                                '#a40b04',//light brown
                                '#6a0f0b',//dark brown
                                // "#02175f"
                                // "#149b03",
                                // "#400a94",
                                // "#290/65d"
                            ]}
                            style={[
                                styles.questionStyle,
                                // { flexDirection: 'column' }
                            ]}
                            start={{ x: 0.0, y: 0.05 }}
                            end={{ x: 0.4, y: 1 }}
                            locations={[0.1, 0.75]}
                        >
                            <Text style={styles.questiontextStyle}>{a1} + {a2} = ? </Text>
                        </LinearGradient>
                    </View>
                    <View><Text>   </Text></View>
                    <View>
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            {this.answerbutton(c[b1], c1)}
                            {/* <View style={styles.answerStyle}>
                                {
                                    <Text style={styles.answertextstyle}>
                                        {c[b1]}
                                    </Text>

                                }
                            </View> */}
                            <View><Text>  </Text></View>
                            {this.answerbutton(c[b2], c1)}

                        </View>
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            {this.answerbutton(c[b3], c1)}
                            <View><Text>  </Text></View>
                            {this.answerbutton(c[b4], c1)}

                        </View>
                        {/* <Button title="Next" onPress={this.GenerateRandomNumber} /> */}

                    </View>
                </ImageBackground>

            </View>

        );
    }
}
