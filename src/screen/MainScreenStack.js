import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import {} from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome'
import MainScreen from './MainScreen';
import MathMainScreen from './Math/MathMainScreen';

// import MathTestScreen from './Math/MathTestGame';
// import MathLearnScreen from './screens/Math/MathLearnScreen';
import DrawScreen from './Drawing';
import MathTestScreen from './Math/MathTestGame';
import MathLearnScreen from './Math/MathLearnMain';
// import MinstScreen from './Math/Mnist';
import AdditionTestscreen from './Math/MathTest/additiontest';
import SubtractiontestScreen from './Math/MathTest/subtractiontest';
import MultiplicationTestScreen from './Math/MathTest/multiplicationtest';
import DivisionTestScreen from './Math/MathTest/divisiontest';
import AdditionLearnScreen from './Math/MathLearn/additionlearn';
import SubtractionLearnScreen from './Math/MathLearn/subtractionlearn';
import MultiplicationLearnSCreen from './Math/MathLearn/multiplicationlearn';
import DivisionLearnScreen from './Math/MathLearn/divisionlearn';
import Alphabets from './Alphabets/Aphabetscreen'
import AlphabetsLearn from './Alphabets';
import MinstMain from './Math/MnistMain';
import AlphabetsMainScreen from './Alphabets/AlphabetMainScreen';
import AlphabetsDrawMainScreen from './Alphabets/AlphabetsDraw';
import EminstSmallMain from './Alphabets/AlphabetsDraw/emnistsmall';
import EminstCapitalMain from './Alphabets/AlphabetsDraw/emnistCapital';
// const Stack = createStackNavigator({
//     Home: {
//         screen: MainScreen,
//         navigationOptions: {
//             title: 'Home',
//         }
//     },
//     DrawGames:{
//         screen:DrawScreen,
//         navigationOptions:{
//             title:'Draw'
//         }
//     },
//     AlphabetsLearn:{
//         screen:Alphabets,
//         navigationOptions:{
//             title:'Alphabets'
//         }
//     },
//     MathGame: {
//         screen: MathMainScreen,
//         navigationOptions: {
//             title: "Math Games",
//         }
const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <NavigationContainer >
        <RootStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <RootStack.Screen name="Home" component={MainScreen} />
            <RootStack.Screen name="DrawGames" component={DrawScreen} />
            <RootStack.Screen name="MathGame" component={MathMainScreen} />
            <RootStack.Screen name="MathTestGame" component={MathTestScreen} />
            <RootStack.Screen name="Mnist" component={MinstMain} />
            <RootStack.Screen name="MathTables" component={MathLearnScreen} />
            <RootStack.Screen name="AdditionTest" component={AdditionTestscreen} />
            <RootStack.Screen name="SubtractionTest" component={SubtractiontestScreen} />
            <RootStack.Screen name="MultiplicationTest" component={MultiplicationTestScreen} />
            <RootStack.Screen name="DivisionTest" component={DivisionTestScreen} />
            <RootStack.Screen name="AdditionTable" component={AdditionLearnScreen} />
            <RootStack.Screen name="SubtractionTable" component={SubtractionLearnScreen} />
            <RootStack.Screen name="MultiplicationTable" component={MultiplicationLearnSCreen} />
            <RootStack.Screen name="DivisionTable" component={DivisionLearnScreen} />
            <RootStack.Screen name="AlphabetsMain" component={AlphabetsMainScreen} />
            <RootStack.Screen name="AlphabetsDrawMain" component={AlphabetsDrawMainScreen} />
            <RootStack.Screen name="AlphabetsLearn" component={AlphabetsLearn} />
            <RootStack.Screen name="AlphabetsSmall" component={EminstSmallMain} />
            <RootStack.Screen name="AlphabetsCapital" component={EminstCapitalMain} />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default RootStackScreen;