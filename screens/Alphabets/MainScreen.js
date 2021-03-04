import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
}from 'react-native';
import {styles} from './styles';
console.disableYellowBox = true;

export default class HomeScreen extends Component {
    static navigationOptions = () => ({
        title: 'Home',
        headerStyle: {
            backgroundColor: '#00008b',
        },
        headerTitleStyle: {
            color: 'white'
        },
    });

    render() {
        return (
            <View style={[styles.container,styles.centerAlign]}>                   
                    <View style={styles.galleryinbutton}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Mnist')}
                            style={[styles.gallertbutton, styles.centerAlign, styles.styleborder]}
                        >
                            <Text style={styles.textcgs}>Numbers</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.galleryinbutton}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('EmnistSmall')}
                            style={[styles.gallertbutton, styles.centerAlign, styles.styleborder]}
                        >
                            <Text style={styles.textcgs}>Small Alphabets</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.galleryinbutton}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('EmnistCapital')}
                            style={[styles.gallertbutton, styles.centerAlign, styles.styleborder]}
                        >
                            <Text style={styles.textcgs}>Capital Alphabets</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.galleryinbutton}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('EmnistMix')}
                            style={[styles.gallertbutton, styles.centerAlign, styles.styleborder]}
                        >
                            <Text style={styles.textcgs}>English Alphabets</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('New')}
                        >
                            <Text style={styles.textcgs}>.....</Text>
                        </TouchableOpacity>
                    </View>
                </View>
             );
    }
}
