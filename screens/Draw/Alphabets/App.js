import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Animated,
  Button,
  StatusBar,
  Text,
  Image,
  StyleSheet,
  LayoutAnimation,
  NativeModules,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import Confetti from 'react-native-confetti'
import { Transition } from 'react-native-reanimated';
import { createStackNavigator, } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import images from "./abcdpics/pics";
import smallalphabet from "./abcdpics/alphabets";
import largealphabets from './abcdpics/largealphabets';
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

var increase = 0;
var decrease = 0;
var x = 1;
var t = 1;
const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
  const a = new Animated.Value({
    inputRange: [0, 360],
    outputRange: [0, 100]
  });
  React.useEffect(() => {
    // Animated.spring(a,
    //   {toValue:2}
    //   ).start();
    Animated.timing(
      fadeAnim,
      // twirl,
      {
        toValue: 1,
        // easing:Easing.back(),
        duration: 1000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

class FirstScreen extends React.Component {
  state = {
    w: 200,
    h: 200,
    t: 1
  }
  componentDidMount() {
    if(this._confettiView) {
       this._confettiView.startConfetti();
    }
  }
  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    if (this.state.w == 200)
      this.setState({ w: this.state.w + 20, h: this.state.h + 20 })
    else

      this.setState({ w: this.state.w - 20, h: this.state.h - 20 })
    
    }
  increasex(y) {
    if (y < 26) {
      increase = y + 1;
      // pop()
    }
    else {
      increase = 26;
      // buzzer()
    }
  }
  decreasex(y) {
    if (y > 1) {
      decrease = y - 1;
      // pop()
    }
    else {
      decrease = 1;
      // buzzer()
    }
  }

  render() {
    // const { navigation } = this.props;

    // t = this.props.navigation.getParam('y')
    return (
      <View style={styles.container}>
         {/* <Confetti ref={(node) => this._confettiView = node}/> */}
        <FadeInView>
          <TouchableOpacity
            onPress={this._onPress}
          >


            <Image
              source={images[this.state.t]}
              style={{ height: this.state.h, width: this.state.w }}
            />
          </TouchableOpacity>
        </FadeInView>
        <Text style={{ fontSize: 100 }}>
          {largealphabets[this.state.t-1]}

          {smallalphabet[this.state.t - 1]}
          </Text>
        {/* <Text>{this.state.t}</Text> */}
        {this.increasex(this.state.t)}
        {this.decreasex(this.state.t)}
        {/* <Button
          title="Decrease"
          onPress={() => {
            this._onPress()
            this.setState({ t: decrease })
          }}
        /> */}
        <View style={[
          styles.centerStyle, {
            height: '12%',
            flexDirection: 'row'
          }]}>
          <TouchableOpacity
            style={[styles.clearButtonStyle, styles.centerStyle]}
            onPress={() => {
              this._onPress()
            this.setState({ t: decrease })
            return(
              <Confetti confetticount={50}/>
            )
            }}
          >
            <Text style={styles.clearbuttonText}>{'<='}</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.clearButtonStyle, styles.centerStyle]}
            onPress={() => {
              this._onPress()
            this.setState({ t: increase })
            }}
          >
            <Text style={styles.clearbuttonText}>{'=>'}</Text>

          </TouchableOpacity>
        </View>
        {/* <Button
          title="Increase"
          onPress={() => {
            this._onPress()
            this.setState({ t: increase })
          }} /> */}
      </View>
    )
  }
}





const AppNavigator = createAnimatedSwitchNavigator({
  Home: {
    screen: FirstScreen,
  },
  // Next: {
  //   screen: SecondScreen,
  // },
},
  {
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="pop"
          durationMs={200}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  }

);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },
  clearButtonStyle: {
    width: Dimensions.get('screen').width * 0.28,
    height: Dimensions.get('screen').height * 0.08,
    backgroundColor: '#e70101',
    marginBottom: 20,
    borderRadius: 10,
    marginLeft: "2%"
  },
  clearbuttonText: {
    fontSize: Dimensions.get('screen').height * 0.03,
    color: 'white'
  }
});

