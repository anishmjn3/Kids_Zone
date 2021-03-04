import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Transition} from 'react-native-reanimated';
import DrawScreensa from './freedrawing1';
// import Stackk from './screens/MainScreenStack';
import DrawScreensb from './freedrawing2';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'

const AppNavigator = createAnimatedSwitchNavigator({
  Home: {
    screen: DrawScreensa,
    navigationOptions: {
      headerShown: false
    }
  },
  Draw:{
      screen:DrawScreensb
  }
//   Stackk: {
//     screen: Stackk,
//     navigationOptions: {
//       headerShown: false,
//     }
//   },
// },{
//     // The previous screen will slide to the bottom while the next screen will fade in
//     transition: (
//       <Transition.Together>
//         <Transition.Out
//           type="fade"
//           durationMs={5}
//           interpolation="easeIn"
//         />
//         <Transition.In type="fade" durationMs={500} />
//       </Transition.Together>
//     ),
  }
  
);

const AppContainer= createAppContainer(AppNavigator);
export default class App extends React.Component{
  render(){
    return <AppContainer />;
  }
}