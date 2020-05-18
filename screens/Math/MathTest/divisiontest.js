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
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles'

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
    }
    // DelayFunction(){
    //     setTimeout(function(){

    //         //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
    //         Alert.alert("Correct Answer!!!");
    //         // this.GenerateRandomNumber()

    //       }, 5);
    // }

    randomnumbelow10() {
        var a = Math.floor(Math.random() * 10) + 1;
        return (a);
    }

    randomnumbelow20() {
        return (Math.floor(Math.random() * 10 + 0));
    }
    randomnumbelow4() {
        return (Math.floor(Math.random() * 4 + 1));
    }

    answerbutton(c, c1) {
        if (c == c1) {
            return (
                <View style={[styles.answerStyle, { backgroundColor: '#a40b04' }]}>
                    <TouchableOpacity
                        onPress={() => {
                            this.GenerateRandomNumber();
                            // this.DelayFunction();
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
        var c1 = a1 * a2;
        var c2 = this.randomnumbelow20();
        var c3 = this.randomnumbelow20();
        var c4 = this.randomnumbelow20();
        if (c1 == c2 | c3 == c2 | c4 == c2) c2 = this.randomnumbelow20();
        if (c1 == c3 | c2 == c3 | c4 == c3) c3 = this.randomnumbelow20();
        if (c1 == c4 | c2 == c4 | c3 == c4) c4 = this.randomnumbelow20();
        var c = [a1, c2, c3, c4]
        return (

            <View style={styles.MainContainer} >
                <ImageBackground
                    source={require('./../..//wood.jpg')}
                    style={styles.imagebackgroundStyle}
                >
                    <View style={styles.questionStyle}>
                        <LinearGradient
                            colors={[
                                '#a40b04',//light brown
                                '#6a0f0b'//dark brown
                            ]}
                            style={[
                                styles.questionStyle,
                                // { flexDirection: 'column' }
                            ]}
                            start={{ x: 0.0, y: 0.05 }}
                            end={{ x: 0.4, y: 1 }}
                            locations={[0.1, 0.75]}
                        >
                            <Text style={styles.questiontextStyle}>{c1} / {a2} = ? </Text>
                        </LinearGradient>
                    </View>
                    <View><Text>   </Text></View>
                    <View>
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            {this.answerbutton(c[b1], a1)}
                            {/* <View style={styles.answerStyle}>
                                {
                                    <Text style={styles.answertextstyle}>
                                        {c[b1]}
                                    </Text>

                                }
                            </View> */}
                            <View><Text>  </Text></View>
                            {this.answerbutton(c[b2], a1)}

                        </View>
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            {this.answerbutton(c[b3], a1)}
                            <View><Text>  </Text></View>
                            {this.answerbutton(c[b4], a1)}

                        </View>
                        {/* <Button title="Next" onPress={this.GenerateRandomNumber} /> */}

                    </View>
                </ImageBackground>

            </View>

        );
    }
}

