import React, { useEffect } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid,
  Image,
  ScrollView
} from 'react-native';
var { height, width } = Dimensions.get("window")
import Tflite from 'tflite-react-native';
import * as Animatable from 'react-native-animatable';
import Tts from 'react-native-tts';

import SignatureCapture from 'react-native-signature-capture';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFetchBlob from 'rn-fetch-blob';
import Share from "react-native-share";
import RNFS from 'react-native-fs';
// import quickdraw from '../images/imageCollection'
const blank = "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DGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCwhtDGyeAAECQusGCBAgEAsIbQxsngABAkLrBggQIBALCG0MbJ4AAQJC6wYIECAQCzwAAAD//9sFwS8AAAWWSURBVO3UMQ0AMAwEsYY/6KYqh9scABms1819dxwBAgQIZAIjtJmtxwQIEPgCQmsIBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBYQ2BvaeAAECQmsDBAgQiAWENgb2ngABAkJrAwQIEIgFhDYG9p4AAQJCawMECBCIBRbo1m44hC5qmQAAAABJRU5ErkJggg=="
import images from './../abcdpics/pics';

import storage from '@react-native-firebase/storage';
import Sound from 'react-native-sound';


function ding() {
  var whoosh = new Sound('ding.mp3', Sound.MAIN_BUNDLE, () => {
    // Play the sound with an onEnd callback</Text>

    whoosh.play();
  });
}
function buzzer() {
  var whoosh = new Sound('buzzer.mp3', Sound.MAIN_BUNDLE, () => {
    // Play the sound with an onEnd callback
    whoosh.play();
  });
}
function pop() {
  var whoosh = new Sound('pop.mp3', Sound.MAIN_BUNDLE, () => {
    // Play the sound with an onEnd callback
    whoosh.play();
  });
}
export default function MinstMain() {
  let tflite = new Tflite();
  const Sign = React.useRef(null)
  const [base64Link, setBase64Link] = React.useState(blank)
  const [ImageUri, setImageUri] = React.useState("")
  const [model, setModel] = React.useState(null)
  const [recognitionResult, setRecognitionResult] = React.useState([])
  const [strokeColor, setStrokeColor] = React.useState(true)
  const [NumberValue, setNumberValue] = React.useState(1)
  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'App needs access to your storage to download Photos',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  const downloadImage = () => {
    let date = new Date();
    const { fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    const file_path = PictureDir +
      '/image_' +
      Math.floor(date.getTime() + date.getSeconds() / 2) +
      ".png"
    RNFS.writeFile(file_path, base64Link, 'base64')
      .then((res) => {
        console.log("Success", res)
        ToastAndroid.showWithGravity(
          "Image Downloaded",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      })
      .catch((error) => {
        console.log("error", error)
        alert(JSON.stringify(error));
      });

  };

  const GetPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message:
            'App needs access to your storage to download Photos',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }
  useEffect(() => {
    GetPermission()
    onSelectModel('model')
    Tts.speak('Count the apples');

  }, [])

  const onSelectModel = (model) => {
    // this.setState({ model });
    setModel(model)
    var modelFile = "models/mnist3.lite";
    var labelsFile = "models/mnistlabels.txt";
    tflite.loadModel({
      model: modelFile,
      labels: labelsFile,
    },
      (err, res) => {
        if (err)
          console.log(err);
        else
          console.log(res);
      });
  }
  const shareSingleImage = async (file) => {
    const shareOptions = {
      title: 'Share file',
      url: `data:image/png;base64,${file}`,
      failOnCancel: false,
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log("Share")
    } catch (error) {
      console.log('Error =>', error);
    }
  };
  const putImageToFirebase = async (fileName, pathToFile) => {
    console.log("firebase", fileName, pathToFile)
    await storage().ref(fileName).putFile(pathToFile);
    RNFS.unlink(pathToFile);
  }
  const Recognize = async (base64Link) => {
    let date = new Date();
    const { fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    const file_path = PictureDir +
      '/image_' +
      Math.floor(date.getTime() + date.getSeconds() / 2) +
      ".png"
    RNFS.writeFile(file_path, base64Link, 'base64')
      .then((res) => {
        console.log("Success", res)

        tflite.runModelOnImage({
          path: file_path,
          imageMean: 128.0,
          imageStd: 128.0,
          numResults: 3,
          threshold: 0.05
        },
          (err, res) => {
            if (err)
              console.log("Model run error", err);
            else {
              if (strokeColor) {
                if (res.length > 0)
                  putImageToFirebase(`numbers/${res[0].label}/${Math.floor(date.getTime() + date.getSeconds() / 2)}.png`, file_path)
                else
                  putImageToFirebase(`numbers/${Math.floor(date.getTime() + date.getSeconds() / 2)}.png`, file_path)
                if (NumberValue == res[0].label)
                  ding()
                else
                  buzzer()
              }
              setRecognitionResult(res)
              console.log("Model run Success", res)

            }
          });
      })
      .catch((error) => {
        console.log("error", error)
        alert(JSON.stringify(error));
      });
  }
  const allpics = (r) => {
    const pics = (y) => {
      var myloop = []
      // t = this.state.x
      for (let i = 0; i < y; i++) {
        myloop.push(
          <Animatable.View key={i} animation="bounceInLeft" easing="ease-out" iterationCount={1}>
            <Image
              source={images[0]}
              style={{
                height: height * 0.05,
                width: height * 0.05
              }}
            />
          </Animatable.View>
        )
      }
      return (
        <View style={{ flexDirection: 'row' }}>
          {myloop}
        </View>
      )

    }
    if (r <= 5)
      return (
        <View>
          {pics(r)}
        </View>
      )
    if (r > 5 && r <= 9)
      return (
        <View>
          {pics(5)}
          {pics(r - 5)}
        </View>
      )

  }
  return (
    <View style={{ backgroundColor: "#fff", height: height, width: width }}>
      <View style={[{ padding: height * 0.025, flexDirection: 'row', backgroundColor: '#054014', width: width }, styles.centerAlign]}>
        <Text style={{ fontSize: height * 0.023, fontWeight: 'bold', color: '#fff' }}>
          Number Game
        </Text>
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text style={{ fontSize: height * 0.023, textAlign: 'center' }}>Count the apples</Text>
      </View>
      <View style={[{ width: width, alignItems: 'center' }]}>
        <View style={[{ height: height * 0.12, },]}>
          {allpics(NumberValue)}
        </View>
      </View>
      <View
        style={[{
          height: width * 0.8, width: width, marginVertical: 20,
        }, styles.centerAlign]}
      >
        <View
          style={[{
            borderWidth: 1, borderColor: '#000033',
            height: width * 0.75, width: width * 0.75, backgroundColor: "#666"
          }, styles.shadowStyle]}
        >
          <SignatureCapture
            style={{ width: "100%", height: "100%" }}
            ref={Sign}
            onSaveEvent={(result) => {
              console.log(result.pathName);
              setBase64Link(`${result.encoded}`)
              setImageUri(result.pathName)
              Recognize(result.encoded)
            }}
            onDragEvent={(res) => {
              console.log("Drag", res)
              Sign.current.saveImage()
            }}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={false}
            backgroundColor="#ffffff"
            strokeColor={strokeColor ? "#000000" : "#ffffff"}
            minStrokeWidth={height * 0.015}
            maxStrokeWidth={height * 0.015}
            viewMode={"portrait"}
          />
        </View>
      </View>
      <View style={[{ flexDirection: 'row' }, styles.centerAlign]}>
        <TouchableOpacity
          style={[styles.clearButtonStyle, styles.centerStyle]}
          onPress={() => {
            Sign.current.resetImage()
            setRecognitionResult([])
            if (NumberValue <= 1) {
              setNumberValue(9)
            }
            else {
              setNumberValue(NumberValue - 1)
            }
            ding()
          }}
        >
          <Text style={styles.clearbuttonText}>{'<='}</Text>

        </TouchableOpacity>
        <View style={[{ borderColor: "#999", padding: 5, marginHorizontal: 3, backgroundColor: "#fff" }]}>
          {recognitionResult.length > 0 && <>
            <Text style={{ textAlign: 'center' }}>{recognitionResult[0].label}</Text>
          </>}
        </View>
        <TouchableOpacity
          style={[styles.clearButtonStyle, styles.centerStyle]}
          onPress={() => {
            Sign.current.resetImage()
            setRecognitionResult([])
            ding()
            if (NumberValue >= 9) {
              setNumberValue(1)
            }
            else {
              setNumberValue(NumberValue + 1)
            }
          }}
        >
          <Text style={styles.clearbuttonText}>{'=>'}</Text>

        </TouchableOpacity>

      </View>
      <View style={[{ width: '100%', flexDirection: 'row', marginVertical: width * 0.05 }, styles.centerAlign]}>
        <TouchableOpacity
          style={[{ backgroundColor: '#fff', height: height * 0.05, width: '25%', borderWidth: 0.25, borderColor: "#999", marginRight: width * 0.1, flexDirection: 'row' }, styles.centerAlign, styles.shadowStyle]}
          onPress={() => {
            Sign.current.resetImage()
            setRecognitionResult([])
          }}
        >
          <Text style={{ color: "#000", textAlign: 'center', fontWeight: 'bold', fontSize: height * 0.014 }}>Reset </Text>
          <Icon name="reload" color="#000" size={height * 0.018} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: strokeColor ? '#fff' : "#700a0a", borderWidth: 0.25, borderColor: "#999", height: height * 0.05, width: '25%', flexDirection: 'row' }, styles.centerAlign, styles.shadowStyle]}
          onPress={() => {
            setStrokeColor(!strokeColor)
          }}
        >
          <Text style={{ color: strokeColor ? "#000" : "#fff", textAlign: 'center', fontWeight: 'bold', fontSize: height * 0.014 }}>Eraser </Text>
          <Icon name="square" color={strokeColor ? "#000" : "#fff"} size={height * 0.018} />
        </TouchableOpacity>

      </View>
      <View style={[{ width: '100%', flexDirection: 'row' }, styles.centerAlign]}>
        <TouchableOpacity
          style={[{ width: '25%', backgroundColor: '#fff', borderWidth: 0.25, borderColor: "#999", height: height * 0.05, marginRight: width * 0.1, flexDirection: 'row' }, styles.centerAlign, styles.shadowStyle]}
          onPress={() => {
            shareSingleImage(base64Link)
          }}
        >
          <Text style={{ color: "#000", textAlign: 'center', fontWeight: 'bold', fontSize: height * 0.014 }}>Share  </Text>
          <Icon name="share" color="#000" size={height * 0.018} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: '#fff', height: height * 0.05, borderWidth: 0.25, borderColor: "#999", width: '25%', flexDirection: 'row' }, styles.centerAlign, styles.shadowStyle]}
          onPress={() => {
            checkPermission()
          }}
        >
          <Text style={{ color: "#000", textAlign: 'center', fontSize: height * 0.014, fontWeight: 'bold', }}>Download  </Text>

          <Icon name="download" size={height * 0.018} />
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1, justifyContent: "center", alignItems: "center", height: 50,
    backgroundColor: "#eeeeee",
    margin: 10
  },
  centerAlign: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
  clearButtonStyle: {
    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: '#e70101',
    borderRadius: 10,
  },
  clearbuttonText: {
    fontSize: height * 0.028,
    color: 'white',
    textAlign: 'center'
  }
});

