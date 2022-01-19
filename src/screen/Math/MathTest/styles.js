import {StyleSheet,Dimensions} from 'react-native';
export {styles}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
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
    questionStyle: {
        height:Dimensions.get('window').width/1.3,
        width: Dimensions.get('window').width/1.3,
        borderRadius: 20.,
        backgroundColor: '#ca3f22',
        justifyContent: 'center',
        alignItems: 'center',

    },
    answerStyle: {
        height: Dimensions.get('window').width/4.5,
        width: Dimensions.get('window').width/3,
        backgroundColor: '#a63219',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10
    },
    questiontextStyle: {
        fontSize: 60,
        color: '#e34646'
    },
    answertextstyle: {
        fontSize: 30,
        color: '#e34646'
    }


});