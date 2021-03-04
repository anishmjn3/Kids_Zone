import {StyleSheet,Dimensions} from 'react-native'
export {styles};
const Dheight = Dimensions.get('window').height;
const Dwidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7c06d'
        // backgroundColor: '#FFDEAD'
    },
    centerAlign: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    familystyle: {
        width: Dimensions.get('window').width * 0.8,
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
    },
    familystyleborder: {
        borderBottomColor: 'grey',
        borderRadius: 15,
        borderBottomWidth: 3,
        borderRightColor: 'grey',
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderLeftColor: 'white'
    },
    familytextstyle: {
        fontSize: 20
    },
    nextprev: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').height * 0.05,
        borderBottomColor: 'grey',
        borderRadius: 10,
        borderBottomWidth: 2,
        borderRightColor: 'grey',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderLeftColor: 'white'

    },
    heading:{
        fontWeight:'bold',
        fontSize:15
    }
})


