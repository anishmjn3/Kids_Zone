import {StyleSheet,Dimensions} from 'react-native';
export {styles};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    backgroundimageStyle: {
        height: Dimensions.get('window').height,
        // width:20,
        width: Dimensions.get('window').width,
        flex: 1
    },
    aligncenterStyle: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    midbodyStyle: {
        // height: '50%',
        width: '100%',
        // backgroundColor: 'red',
        // position:'relative'
    },
    buttonStyle: {
        height: Dimensions.get('window').width*0.35,
        width: Dimensions.get('window').width*0.35,
        borderRadius: Dimensions.get('window').width*0.35,
        backgroundColor: 'red',
        position: 'relative'
        // flex:1
    },
    imagecircleStyle: {
        height: '104%',
        width: '104%',
        position: 'relative'
    },
    drawmathimageStyle: {
        height: '35%',
        width: '40%'
    },
    textStyle: {
        fontSize: Dimensions.get('window').width*0.05,
        color: '#d4c606',
        textAlign: 'center'
    }

})