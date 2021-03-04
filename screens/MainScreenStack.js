import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {} from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome'
import MainScreen from './MainScreen';
import MathMainScreen from './Math/MathMainScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MathTestScreen from './Math/MathTestGame';
// import MathLearnScreen from './screens/Math/MathLearnScreen';
import DrawScreen from './Draw/drawstack';
// import MathTestScreen from './Math/MathTestGame';
import MathLearnScreen from './Math/MathLearnMain';
import MinstScreen from './Math/Mnist';
import AdditionTestscreen from './Math/MathTest/additiontest';
import SubtractiontestScreen from './Math/MathTest/subtractiontest';
import MultiplicationTestScreen from './Math/MathTest/multiplicationtest';
import DivisionTestScreen from './Math/MathTest/divisiontest';
import AdditionLearnScreen from './Math/MathLearn/additionlearn';
import SubtractionLearnScreen from './Math/MathLearn/subtractionlearn';
import MultiplicationLearnSCreen from './Math/MathLearn/multiplicationlearn';
import DivisionLearnScreen from './Math/MathLearn/divisionlearn';

import AlphabetMainscreen from './Alphabets/AlphabetMainScreen';
import Alphabets from './Alphabets/Aphabetscreen'
// import AlphabetFull from './Alphabets/AlphabetFull';
import AlphabetsDrawMainScreen from './Alphabets/AlphabetsDraw';
import EmnistCapitalScreen from './Alphabets/AlphabetsDraw/emnistcapital';
import EmnistSmallScreen from './Alphabets/AlphabetsDraw/emnistsmall';

import AboutUsScreen from './AboutUS/Aboutus';
import PrivacyPolicayScreen from './AboutUS/PrivacyPolicy';
import CustomSidebarMenu from './CustomSidebarMenu';


const Stack = createStackNavigator({
    Home: {
        screen: MainScreen,
        navigationOptions: {
            title: 'Home',
        }
    },
    DrawGames: {
        screen: DrawScreen,
        navigationOptions: {
            title: 'Draw'
        }
    },
    AlphabetsMain: {
        screen: AlphabetMainscreen,
        navigationOptions: {
            title: 'Alphabets Games'
        }
    },
    AlphabetsDrawMain: {
        screen: AlphabetsDrawMainScreen,
        navigationOptions: {
            title: 'Alphabets Practice'
        }
    },
    AlphabetsCapital: {
        screen: EmnistCapitalScreen,
        navigationOptions: {
            title: 'Capital Alphabets'
        }
    },
    AlphabetsSmall: {
        screen: EmnistSmallScreen,
        navigationOptions: {
            title: 'Small Alphabets'
        }
    },
    AlphabetsLearn: {
        screen: Alphabets,
        navigationOptions: {
            title: 'Alphabets'
        }
    },
    MathGame: {
        screen: MathMainScreen,
        navigationOptions: {
            title: "Math Games",
        }
    },
    MathTestGame: {
        screen: MathTestScreen,
        navigationOptions: {
            title: "Math Test",
        }
    },
    Mnist: {
        screen: MinstScreen,
        navigationOptions: {
            title: 'Draw numbers'
        }
    },
    MathTables: {
        screen: MathLearnScreen,
        navigationOptions: {
            title: "Math Tables",
        }
    },
    AdditionTest: {
        screen: AdditionTestscreen,
        navigationOptions: {
            title: "Addition Test",
        }
    },
    SubtractionTest: {
        screen: SubtractiontestScreen,
        navigationOptions: {
            title: "Subtraction Test",
        }
    },
    MultiplicationTest: {
        screen: MultiplicationTestScreen,
        navigationOptions: {
            title: "Multiplication Test",
        }
    },
    DivisionTest: {
        screen: DivisionTestScreen,
        navigationOptions: {
            title: "Division Test",
        }
    },
    AdditionTable: {
        screen: AdditionLearnScreen,
        navigationOptions: {
            title: "Addition Tables",
        }
    },
    SubtractionTable: {
        screen: SubtractionLearnScreen,
        navigationOptions: {
            title: "Subtraction Table",
        }
    },
    MultiplicationTable: {
        screen: MultiplicationLearnSCreen,
        navigationOptions: {
            title: "Multiplication Table",
        }
    },
    DivisionTable: {
        screen: DivisionLearnScreen,
        navigationOptions: {
            title: "Division Table",
        }
    }
},
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#191970',
            },
            headerTintColor: "#fff",
            color: 'red',
            // headerStatusBarHeight:Dimensions.get('screen').height*0.001,
            // headerRight: () => (
            //     <Button
            //         onPress={() => alert('This is a button!')}
            //         title="Info"
            //         color="#000"
            //     />
            // ),
        }

    },
    {
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="slide-right"
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        )
    }

);

const Drawer = createDrawerNavigator({
    Main: { screen: Stack },
    AboutUs: { screen: AboutUsScreen },
    PrivacyPolicy: { screen: PrivacyPolicayScreen }
},
    {
        contentComponent: CustomSidebarMenu,
        hideStatusBar: false,
        keyboardDismissMode: 'none',
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        drawerType: 'slide'
    }
)
const AppContainer = createAppContainer(Drawer);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}