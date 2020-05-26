import {StyleSheet,Dimensions} from 'react-native';
export {styles};

const Dheight = Dimensions.get('window').height;
const Dwidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    backgroundimageStyle: {
        height: Dheight,
        width: Dwidth,
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
        fontSize: Dheight * 0.04
    },
    firstrow: {
        flexDirection: 'row',
        // height: 140
        marginTop:'5%',
        marginBottom:'5%'
    },
    learnoutcirclestyle:{
        height:Dheight * 0.14,
        width:Dheight * 0.14,
        borderRadius:Dheight * 0.14
        // borderRadius:'100%'
    },
    learnincirclestyle: {
        height: Dheight * 0.15,
        width: Dheight * 0.15,
        // borderRadius:Dimensions.get('window').height * 0.16
    },
    learnButtonTextStyle: {
        fontSize: Dheight*0.025,
        color: '#d2d31b',
        textAlign: 'center'
    },
    outerButtonStyle: {
        height: Dheight * 0.12,
        width: Dheight * 0.18,
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
        fontSize: Dheight*0.024,
        color: '#81d67a',
        textAlign: 'center'
    },
})