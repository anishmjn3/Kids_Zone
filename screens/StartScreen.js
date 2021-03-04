import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  BackHandler,
  ActivityIndicator,
  Alert
}
  from 'react-native';
import React from 'react';
import RadialGradient from 'react-native-radial-gradient';


export default class StartScreen extends React.Component {

  componentWillMount() {
    setInterval(() => {
      this.props.navigation.navigate('Stackk');
    }, 2500);
  }
  render() {
    return (
      <View style={styles.container}>

        <RadialGradient style={styles.backgroundstyle}
          colors={['#c6c3c3', '#650953']}
          stops={[0.01, .9]}
          radius={Dimensions.get('screen').width}
        >
          <Image
            source={require('./logo3.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <ActivityIndicator size='large' />

        </RadialGradient>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundstyle: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '20%',
    width: '60%'
  },

});
