import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient';


export default class MyProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 1,
            initial: 0
        }
    }
    tables(x) {
        var myloop = [];
        for (let i = 0; i <= 10; i++) {
            myloop.push(
                <Text key={i} style={styles.tabletext}>{x} X {i} = {x * i}</Text>
            );
        }
        return (
            <View>
                {myloop}
            </View>
        );
    }

    buttonFunction(y) {
        return (
            <View style={[styles.circleStyle, styles.selectbutton,styles.centerAlignStyle]}>
                <TouchableOpacity
                    style={styles.circleStyle}
                    onPress={() => { this.setState({ x: y }) }}
                >
                    <LinearGradient
                        colors={[
                            '#a40b04',//light brown
                            '#6a0f0b'//dark brown
                        ]}
                        style={[styles.outerButtonStyle, styles.circleStyle,styles.centerAlignStyle]}
                        start={{ x: 0.0, y: 0.05 }}
                        end={{ x: 0.5, y: 1 }}
                        locations={[0.3, 0.75]}
                    >
                        <Text style={styles.tabletext}>{y}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }

    render() {

        return (

            <View style={[styles.MainContainer,styles.centerAlignStyle]}>
                <ImageBackground
                    source={require('./../../wood.jpg')}
                    style={[styles.imagebackgroundStyle,styles.centerAlignStyle]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        {/* <ScrollView horizontal={true}> */}
                        {this.buttonFunction(1)}
                        {this.buttonFunction(2)}
                        {this.buttonFunction(3)}
                        {this.buttonFunction(4)}
                        {this.buttonFunction(5)}
                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        {this.buttonFunction(6)}
                        {this.buttonFunction(7)}
                        {this.buttonFunction(8)}
                        {this.buttonFunction(9)}
                        {this.buttonFunction(10)}

                        {/* </ScrollView> */}
                    </View>
                    <View style={[styles.table,styles.centerAlignStyle]}>
                        <LinearGradient
                            colors={[
                                '#a40b04',//light brown
                                '#6a0f0b'//dark brown
                            ]}
                            style={[
                                styles.table,
                                { flexDirection: 'column' }
                                ,styles.centerAlignStyle
                            ]}
                            start={{ x: 0.0, y: 0.05 }}
                            end={{ x: 0.4, y: 1 }}
                            locations={[0.1, 0.75]}
                        >
                            {this.tables(this.state.x)}
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </View>

        );
    }
}

