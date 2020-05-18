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
        width: '55%',
        // backgroundColor: 'red'
    },
    bodyStyle: {
        height: '50%',
        width: '70%',
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
    firstrow: {
        flexDirection: 'row',
        // height: 140
        marginTop:'5%',
        marginBottom:'5%'
    },
    learnoutcirclestyle:{
        height:Dimensions.get('window').height * 0.14,
        width:Dimensions.get('window').height * 0.14,
        borderRadius:Dimensions.get('window').height * 0.14
        // borderRadius:'100%'
    },
    learnincirclestyle: {
        height: Dimensions.get('window').height * 0.15,
        width: Dimensions.get('window').height * 0.15,
        // borderRadius:Dimensions.get('window').height * 0.16
    },
    learnButtonTextStyle: {
        fontSize: Dimensions.get('window').height*0.025,
        color: '#d2d31b',
        textAlign: 'center'
    },
    outerButtonStyle: {
        height: Dimensions.get('window').height * 0.12,
        width: Dimensions.get('window').height * 0.18,
        backgroundColor: '#6a0f0b',//brown color
        borderRightWidth: 3,
        borderRightColor: '#262627',
        borderTopColor: '#b8bdb7',
        borderTopWidth: 1,
        borderBottomWidth: 3,
        borderBottomColor: '#000000',
        borderLeftWidth: 1,
        borderLeftColor: '#b8bdb7'
    },
    innerButtonStyle:{
        height:'100%',
        width:'100%'
    },
    testButtonTextStyle: {
        fontSize: Dimensions.get('window').height*0.024,
        color: '#81d67a',
        textAlign: 'center'
    },
})