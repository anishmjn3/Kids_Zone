import {StyleSheet,Dimensions} from 'react-native';
export {styles};
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'white',
      backgroundColor: '#FFDEAD'
    },
    centerStyle: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
  
    },
    circleStyle: {
      //   flex:1,
      height: 70,
      width: 70,
      borderRadius: 35,
      marginTop: -0,
      marginBottom: 40,
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: 'white',
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    strokeColorButton: {
      marginHorizontal: 2.5,
      marginVertical: 8,
      width: 20,
      height: 20,
      borderRadius: 10,
    },
    clearButtonStyle: {
      width: Dimensions.get('screen').width * 0.28,
      height: Dimensions.get('screen').height * 0.08,
      backgroundColor: '#e70101',
      marginBottom: 20,
      borderRadius: 10,
      marginLeft: "2%"
    },
    strokeColorButton: {
      marginHorizontal: 2.5,
      marginVertical: 8,
      width: 30,
      height: 30,
      borderRadius: 15,
    },
    cameraText: {
      fontSize: 20,
      // justifyContent: 'space-between'
    },
    sketchboxStyle: {
      // height: Dimensions.get('screen').width * 0.8,
      // width: Dimensions.get('screen').width * 0.8,
      height: Dimensions.get('screen').height * 0.35,
      width: Dimensions.get('screen').height * 0.35,
      borderColor: 'grey',
      // flex:1
    },
    shadaweffectStyle: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
  
      elevation: 10,
    },
    strokeWidthButton: {
      marginHorizontal: 2.5,
      marginVertical: 8,
      width: 70,
      height: 30,
      // borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#39579A'
    },
    functionButton: {
      marginHorizontal: 2.5,
      marginVertical: 8,
      height: 30,
      width: 60,
      backgroundColor: '#39579A',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    clearbuttonText: {
      fontSize: Dimensions.get('screen').height * 0.03,
      color: 'white'
    },
    centerAlign: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
  },
  button: {
      backgroundColor: 'blue',
      // padding: 7,
      width: width * 0.4,
      height: height * 0.06,

  },
  imagecontainer: {
      height: height * 0.43,
      width: width * 0.9,
      // backgroundColor:'red'
  },
  resultstyle: {
      height: height * 0.135,
      width: width * 0.8,
  },
  icon: {
      height: 60,
      width: 60,
      alignSelf: 'center',
  },
  buttonstyles: {
      // padding: 25
      // backgroundColor: 'red',
      height: height * 0.13,
      width: width * 0.5
  },
  textcgs: {
      marginTop: 10,
      // marginBottom: 15,
      fontSize: 20,
      fontWeight: 'bold',
  },
  textresult: {
      fontSize: height * 0.023,
      fontWeight: 'bold',

      margin: 3
  },
  gallertbutton: {
      flexDirection: "row",
      height: height * 0.1,
      width: width * 0.6,
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      // bot
  },
  galleryinbutton: {
      // padding:10,
      height: height * 0.1,
      margin: 10,
      backgroundColor: 'grey',
      borderRadius: 15
  },
  styleborder: {
      borderBottomColor: 'grey',
      borderRadius: 15,
      borderBottomWidth: 3,
      borderRightColor: 'grey',
      borderRightWidth: 3,
      borderLeftWidth: 3,
      borderLeftColor: 'white'
  },
  styleborder2: {
      borderBottomColor: 'grey',
      borderRadius: 7,
      borderBottomWidth: 2,
      borderRightColor: 'grey',
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderLeftColor: 'blue'
  },
  recommendstyle: {
      flexDirection: 'row',
      height: height * 0.13,
      width: height * 0.13,
      backgroundColor: 'white',
      borderColor: 'grey',
      borderWidth: 1,
      marginTop: height * 0.004,
      margin: height * 0.005,
      opacity:0.65

  }
  });
  