import {StyleSheet,Dimensions} from 'react-native';
export {styles};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        // backgroundColor:'#483d8b',
        // opacity: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagebackgroundStyle: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    table:{
        height:Dimensions.get('window').height/1.7,
        width:Dimensions.get('window').width/1.7,
        borderRadius:10,
        backgroundColor:'#ca3f22',
        justifyContent:'center',
        alignContent:'center'
    },
    tabletext:{
        fontSize:Dimensions.get('window').height*0.037,
        justifyContent:'center',
        textAlign:'center',
        color:'white'
    },
    selectbutton:{
        // height:70,
        // width:70,
        backgroundColor:'#a40b04',
        marginLeft:10,
        borderRadius:35,
        justifyContent:'center',
        marginBottom:10
    },
    outerButtonStyle: {
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        },
        circleStyle:{
            
            width:Dimensions.get('window').width/6,
            height:Dimensions.get('window').width/6,
            borderRadius:35
        }
})
