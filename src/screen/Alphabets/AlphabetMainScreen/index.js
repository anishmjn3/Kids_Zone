import {
	TouchableOpacity,
	Image,
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Dimensions
}
	from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';


export default class AlphabetsMainScreen extends React.Component {
	render() {
		return (
			<View style={[styles.container, styles.aligncenterStyle]}>
				<ImageBackground
					source={require('./../../wood.jpg')}
					style={[styles.backgroundimageStyle, styles.aligncenterStyle]}
				>
					<View style={{ height: '15%' }}>

					</View>
					<View style={[
						styles.headerStyle,
						styles.aligncenterStyle,
						// {alignItems:'center'}
					]}>
						<ImageBackground
							source={require('./../../Math/mathgames.png')}
							style={[styles.headerImageBackgroundImageStyle, styles.aligncenterStyle]}
						>
							<Text
								style={styles.headerfont}>
								Alphabets
							</Text>
						</ImageBackground>
					</View>

					<View style={[
						styles.bodyStyle,
						styles.aligncenterStyle
					]}>


						<View style={[
							styles.outerButtonStyle,
							styles.aligncenterStyle,
							{ marginBottom: 25 }
						]}>
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('AlphabetsDrawMain')}
								style={styles.innerButtonStyle}
							>
								<LinearGradient
									colors={[
										'#a40b04',//light brown
										'#6a0f0b'//dark brown
									]}
									style={[
										styles.innerButtonStyle,
										{ flexDirection: 'column' },
										styles.aligncenterStyle
									]}
									start={{ x: 0.0, y: 0.05 }}
									end={{ x: 0.4, y: 1 }}
									locations={[0.1, 0.75]}
								>
									<View>
										<Text style={styles.logoFont}>Alphabets</Text>
										<Text style={styles.logoFont}>Practice</Text>
									</View>
								</LinearGradient>
							</TouchableOpacity>
						</View>

						<View style={[styles.outerButtonStyle, styles.aligncenterStyle]}>
							<TouchableOpacity
								onPress={() => {
									this.props.navigation.navigate('AlphabetsLearn')
								}}
								style={styles.innerButtonStyle}
							>
								<LinearGradient
									colors={[
										'#a40b04',//light brown
										'#6a0f0b'//dark brown
									]}
									style={[
										styles.innerButtonStyle,
										{ flexDirection: 'column' },
										styles.aligncenterStyle
									]}
									start={{ x: 0.0, y: 0.05 }}
									end={{ x: 0.4, y: 1 }}
									locations={[0.1, 0.75]}
								>
									<View>
										<Text style={styles.logoFont}>Alphabets</Text>
										<Text style={styles.logoFont}>Learn</Text>
									</View>
								</LinearGradient>
							</TouchableOpacity>
						</View>


					</View>
					<View style={{ height: '25%' }}></View>
				</ImageBackground>
			</View>
		)
	}
}
