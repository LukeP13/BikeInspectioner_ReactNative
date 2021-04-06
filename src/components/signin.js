import * as ActionCreators from '../actions';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,  TouchableOpacity, StatusBar, Image } from 'react-native';
import { connect } from 'react-redux';
import { ScreenContainer } from 'react-native-screens';


const SignIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login () {
    props.login(username, password)
  }

  function resetPassword () {
    console.log('resetPassword')
  }

  function register () {

  }

  return (
    <ScreenContainer style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.logo} source={require('../../assets/icon.png')}/>

        <View style={styles.inputView}>
          <TextInput 
            style={styles.textInput}
            value={username}
            onChangeText={setUsername}
            placeholder="Username or Email"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
        </View>
        
        <TouchableOpacity 
          style={styles.forgotBtn}
          onPress={resetPassword}
          >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginBtn} 
          onPress={login}
          >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.registerBtn} 
          onPress={register}
          >
          <Text style={styles.registerText}>Create Account</Text>
        </TouchableOpacity>

    </ScreenContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  logo: {
    marginBottom: 40,
    height: 100,
    width: 100
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  forgotText: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  },
  registerBtn: {
    width:"75%",
    alignItems: "flex-end",
    marginTop: 10
  }
});

export default connect(null, ActionCreators)(SignIn)