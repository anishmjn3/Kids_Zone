
import { TouchableOpacity, Text,View } from 'react-native'
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
export default function buttonFuntcion(y) {
    return (
        // <View style={[{backgroundColor:'#a40b04'},styles.outerButtonStyle]}>
        <TouchableOpacity
            style={styles.selectbutton}
            onPress={() => { this.setState({ x: y }) }}
        >
            <LinearGradient
                colors={[
                    '#a40b04',//light brown
                    '#6a0f0b'//dark brown
                ]}
                style={styles.outerButtonStyle}
                start={{ x: 0.0, y: 0.05 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0.2, 0.75]}
            >
                <Text style={styles.tabletext}>{y}</Text>
            </LinearGradient>
        </TouchableOpacity>
        // </View>
    );

}