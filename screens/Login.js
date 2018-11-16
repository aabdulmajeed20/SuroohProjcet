import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { Card,Avatar} from 'react-native-elements';
import * as firebase from 'firebase';

export default class Login extends Component {

  constructor(props) {
    super(props);
    state = {
      email : '',
      password: '',
    }
  }

  loginUser = (email, password) =>{
    try {
      if (this.state.password < 6 ) {
        alert("please Enter More than 6 characters")
        return;
      }

      firebase.auth().signInWithEmailAndPassword(email, password).then((user)=>{
        console.log(user);
      });

    } catch (e) {
      console.log(e.toString());
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Avatar
          xlarge
          rounded
          title="زق"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="ادخل الايميل"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="الرقم السري"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <View>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.loginUser(this.state.email, this.state.password)}>
            <Text style={styles.loginText}>تسجيل الدخول</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
              <Text>نسيت كلمة المرور</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonContainer} onPress={()=> this.props.navigation.navigate("Register")}>
              <Text>تسجيل</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
