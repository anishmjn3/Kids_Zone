import React from 'react';
import { Text, View,Image, Dimensions } from 'react-native';
import { Header} from 'react-native-elements';

const Dheight=Dimensions.get('window').height;
const Dwidth=Dimensions.get('window').width;

export default class AboutUsScreen extends React.Component{
  render(){
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:'#f7c06d'
        }}>
        {/* <Text>About us</Text> */}
        <Header
          // leftComponent={}
          placement='left'
          centerComponent={{
            text:'About us',
            style:{
              color:'white',
              fontSize:Dheight*0.03,
              textAlign:'left',
              paddingTop:Dheight*0.02
            }}}
          containerStyle={{
            backgroundColor:'#00008b',
            justifyContent:'center',
            alignContent:'center',
            height:Dheight*0.14,
            alignItems:'center'
          }}
        />
        <View style={{height:Dheight*0.12,width:100}}></View>
        <View style={{height:Dheight*0.1}}>
          <Text style={{fontSize:20}}>Developed By:</Text>
          <Text style={{fontSize:18}}>    Anish Maharjan</Text>
          <Text style={{fontSize:18}}>    Gaurav Pandeya</Text>
          <Text style={{fontSize:18}}>    Mausam Adhikari</Text>
          
          {/* <Text style={{fontSize:18}}>    email: ninjaamjn@gmail.com</Text> */}
        </View>
        <View style={{height:Dheight*0.25}}>
          <Image source={require('../logo1.png')} 
            style={{
              height:Dheight*0.2,
              width:Dheight*0.2,
              borderRadius:Dwidth*0.4,
              margin:2,
              borderColor:'red'
            }}
            resizeMode='contain'
          />
        </View>
        <View style={{height:Dheight*0.09}}>
        <Text style={{fontSize:18,textAlign:'center'}}>Kids Zones</Text>
        <Text style={{fontSize:18,textAlign:'center'}}>
        Kids Learning Application

        </Text>

          <Text style={{fontSize:18,textAlign:'center'}}>Version : 1.0.0</Text>
        </View>
        <View style={{padding:25,height:Dheight*0.4}}>
          {/* <Text style={{textAlign:'justify'}}>A Bird identification app, based on ML which recognizes 887 Birds found in Nepal according to "Birds of Nepal : An Official Checklist-2018"</Text> */}
          {/* <Text style={{textAlign:'justify'}}>The app recognizes the birds feed to the system, gives details of the recognized bird, and recommends the same class birds for further details and You can explore more birds in the explore section by alphabetical order or according to respective class of the birds. The details of the birds are extracted from wikipedia.</Text> */}
        </View>
      </View>
    )
  
  }
}
