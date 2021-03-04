import { StyleSheet, Dimensions } from 'react-native';
export { styles };
const Dheight = Dimensions.get('window').height;
const Dweight = Dimensions.get('window').width;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
    centerAlignStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    imagebackgroundStyle: {
        height: Dheight,
        width: Dweight,
        flex: 1,
    },
    table: {
        height: Dheight * 0.6,
        width: Dweight * 0.6,
        borderRadius: 10,
        backgroundColor: '#ca3f22',
    },
    tabletext: {
        fontSize: Dheight *0.6 /16,
        textAlign: 'center',
        color: 'white'
    },
    selectbutton: {
        backgroundColor: '#a40b04',
        marginLeft: Dweight/42,
        // borderRadius: 35,
        marginBottom: Dheight/42
    },
    circleStyle: {
        width: Dweight / 6,
        height: Dweight / 6,
        borderRadius: Dweight / 6
    }
})
