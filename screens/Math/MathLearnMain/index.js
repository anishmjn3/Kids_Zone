import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    BackHandler
}
    from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

export default class MathScreen extends React.Component {

    learnbutton(text1, text2, navigatetext) {
        return (
            // <View>
            <View style={[
                // styles.learnoutcirclestyle,
             { marginLeft: '5%', marginRight: '5%' }]}>
                <LinearGradient
                    colors={[
                        '#a40b04',//light brown
                        '#ae800c'//dark brown
                    ]}
                    style={[
                        styles.learnoutcirclestyle,
                        // { flexDirection: 'column' }
                    ]}
                    start={{ x: 0.0, y: 0.05 }}
                    end={{ x: 0.4, y: 1 }}
                    locations={[0.1, 0.75]}
                >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate(navigatetext)}
                        style={styles.aligncenterStyle}
                    >
                        <ImageBackground
                            source={require('./../../circleshadow.png')}
                            style={[styles.learnincirclestyle, styles.aligncenterStyle]}

                        >
                            <Text style={styles.learnButtonTextStyle}>{text1}</Text>
                            <Text style={styles.learnButtonTextStyle}>{text2}</Text>
                        </ImageBackground>

                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }


    render() {

        return (
            <View style={[styles.container, styles.aligncenterStyle]}>
                <ImageBackground
                    source={require('./../../wood.jpg')}
                    style={[styles.backgroundimageStyle, styles.aligncenterStyle]}
                >


                    <View style={[styles.headerStyle, styles.aligncenterStyle]}>
                        <ImageBackground
                            source={require('./../mathgames.png')}
                            style={[styles.headerImageBackgroundImageStyle, styles.aligncenterStyle]}
                        >
                            <Text
                                style={styles.headerfont}>
                                Math Tables
                                </Text>
                        </ImageBackground>
                    </View>
                    <View style={[styles.bodyStyle, styles.aligncenterStyle]}>
                        <View style={styles.firstrow}>
                            {this.learnbutton('Add', 'Table', 'AdditionTable')}
                            {this.learnbutton('Subtract', 'Table', 'SubtractionTable')}
                        </View>
                        <View style={styles.firstrow}>
                        {this.learnbutton('Mutiply', 'Table', 'MultiplicationTable')}
                        {this.learnbutton('Divide', 'Table', 'DivisionTable')}

                        </View>
                    </View>
                                     
                    <View style={{ height: '15%' }}></View>
                </ImageBackground>
            </View>
        );
    }
}


