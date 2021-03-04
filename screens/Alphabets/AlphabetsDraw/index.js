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
import {styles} from '../../Math/MathLearnMain/styles'
// import { styles } from '../ /MathLearnMain/styles'
import LinearGradient from 'react-native-linear-gradient';


export default class MathScreen extends React.Component {

    testbutton(text1, text2, navigatetext) {
        return (
            <View style={[styles.outerButtonStyle,{marginRight:'5%',marginLeft:'5%'}]}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(navigatetext)}
                    style={styles.aligncenterStyle}
                >
                    <LinearGradient
                        colors={[
                            '#a40b04',//light brown
                            '#6a0f0b'//dark brown
                        ]}
                        style={[styles.innerButtonStyle,styles.aligncenterStyle]}
                        start={{ x: 0.0, y: 0.05 }}
                        end={{ x: 0.5, y: 1 }}
                        locations={[0.2, 0.75]}
                    >
                        
                            <Text style={styles.testButtonTextStyle}>{text1}</Text>
                            <Text style={styles.testButtonTextStyle}>{text2}</Text>
                        </LinearGradient>
                </TouchableOpacity>
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
                            source={require('../mathgames.png')}
                            style={[styles.headerImageBackgroundImageStyle, styles.aligncenterStyle]}
                        >
                            <Text
                                style={styles.headerfont}>
                                Alphabet Practice
                                </Text>
                        </ImageBackground>
                    </View>
                    <View style={[styles.bodyStyle, styles.aligncenterStyle]}>
                        <View style={styles.firstrow}>
                            {this.testbutton('Small', 'Alphabets', 'AlphabetsSmall')}
                        </View>
                        <View style={styles.firstrow}>
                            {this.testbutton('Capital', 'Alphabets', 'AlphabetsCapital')}
                        </View>
                    </View>
                    <View>

                    </View>
                </ImageBackground>
            </View>
            // <View style={styles.container}>
            //     <ImageBackground
            //         source={require('./../wood.jpg')}
            //         style={styles.cointainerimagebackgroundStyle}
            //     >

            //         <View style={styles.body}>
            //         <View style={styles.titleMainPageStyle}>
            //                 <ImageBackground
            //                     source={require('./mathgames.png')}
            //                     style={styles.titleImageBackgroundImageStyle}
            //                 >
            //                     <Text style={{ color: 'white', fontSize: 40 }}>Math Test</Text>
            //                 </ImageBackground>
            //             </View>

            //             <View style={styles.buttonheightrowStyle}>
            //     {this.testbutton('Addition','3+2=?', 'AdditionTest')}
            //     <View><Text>  </Text></View>
            //     {this.testbutton('Subtraction','5-4=?', 'SubtractionTest')}
            // </View>

            //             <View style={styles.buttonheightrowStyle}>
            //     {this.testbutton('Multiplication','2X3=?', 'MultiplicationTest')}
            //     <View><Text>  </Text></View>
            //     {this.testbutton('Division','6/3=?', 'DivisionTest')}
            // </View>

            //         </View>
            //     </ImageBackground>
            // </View>
        );
    }
}

