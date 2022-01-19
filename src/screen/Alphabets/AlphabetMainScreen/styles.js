import {StyleSheet,Dimensions} from 'react-native';
export {styles};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    backgroundimageStyle: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1
    },
    aligncenterStyle: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerStyle: {
        height: '20%',
        width: '55%'
        // backgroundColor: 'red'
    },
    bodyStyle: {
        height: '50%',
        width: '60%',
        // backgroundColor: 'yellow',
    },
    headerImageBackgroundImageStyle: {
        height: '80%',
        width: '130%'
    },
    headerfont: {
        color: 'white',
        // fontSize: 
        fontSize: Dimensions.get('screen').height * 0.04
    },
    outerButtonStyle: {
        height: '27%',
        width: '70%',
        // padding: 10,
        backgroundColor: '#6a0f0b',//brown color
        borderRightWidth: 4,
        borderRightColor: '#262627',
        borderTopColor: '#b8bdb7',
        borderTopWidth: 1,
        borderBottomWidth: 4,
        borderBottomColor: '#000000',
        borderLeftWidth: 1,
        borderLeftColor: '#b8bdb7'
    },
    innerButtonStyle: {
        height: '100%',
        width: '100%',
    },
    logoStyles: {
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').height * 0.05
    },
    logoFont: {
        fontSize: Dimensions.get('window').height * 0.025,
        color: '#fa483e'
    },
    backgroundimageStyle: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1
    },
    aligncenterStyle: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerStyle: {
        height: '20%',
        width: '55%'
        // backgroundColor: 'red'
    },
    bodyStyle: {
        height: '50%',
        width: '60%',
        // backgroundColor: 'yellow',
    },
    headerImageBackgroundImageStyle: {
        height: '80%',
        width: '130%'
    },
    headerfont: {
        color: 'white',
        // fontSize: 
        fontSize: Dimensions.get('screen').height * 0.04
    },
    outerButtonStyle: {
        height: '27%',
        width: '70%',
        // padding: 10,
        backgroundColor: '#6a0f0b',//brown color
        borderRightWidth: 4,
        borderRightColor: '#262627',
        borderTopColor: '#b8bdb7',
        borderTopWidth: 1,
        borderBottomWidth: 4,
        borderBottomColor: '#000000',
        borderLeftWidth: 1,
        borderLeftColor: '#b8bdb7'
    },
    innerButtonStyle: {
        height: '100%',
        width: '100%',
    },
    logoStyles: {
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').height * 0.05
    },
    logoFont: {
        fontSize: Dimensions.get('window').height * 0.025,
        color: '#fa483e',
        textAlign:'center'
    }
})