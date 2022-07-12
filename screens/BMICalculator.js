import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class BMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView} />
        <View style={styles.imageView}>
          <Image source={require('../assets/BMILogo.png')} />
        </View>

        <View>
          <TextInput
            style={styles.inputFont}
            onChangeText={(height) => this.setState({ height })}
            placeholder={'Height'}
            keyboardType={'numeric'}
            placeholderTextColor="red"
          />
          <TextInput
            style={styles.inputFont}
            onChangeText={(weight) => this.setState({ weight })}
            placeholder={'Weight'}
            keyboardType={'numeric'}
            placeholderTextColor="red"
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.calculateBMI}>
            <Text style={styles.buttonText}>Calculate your BMI</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  container: {
    justifyContent: 'centre',
    backgroundColor: 'cyan',
  },
  submitButton:{
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "black"
  },
  inputFont:{
     height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
  },
  buttonText:{
     textAlign: 'center',
    borderColor: 'red',
    borderWidth: RFValue(4),
  },
  imageView:{
    width: RFValue(50),
    height: RFValue(50),
    resizeMode: "contain"
  }
    
});
