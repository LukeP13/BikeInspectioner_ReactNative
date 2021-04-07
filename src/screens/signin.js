import React, { useState } from 'react';
import strings from '../../res/strings';
import colors from '../../res/colors';
import images from '../../res/images';
import GlobalStyles from '../styles/styles';

import * as ActionCreators from '../actions';
import { connect } from 'react-redux';
import { screens } from '../navigators/auth-navigator'

import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StatusBar, 
  Image
} from 'react-native';
import { ScreenContainer } from 'react-native-screens';


const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login () {
    props.login(username, password)
  }

  function resetPassword () {
    console.log('resetPassword')
  }

  function register () {
    navigation.push(screens.Register)
  }

  return (
    <ScreenContainer style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.logo} source={images.logo}/>

        <View style={styles.inputView}>
          <TextInput 
            style={styles.textInput}
            value={username}
            onChangeText={setUsername}
            placeholder={strings.usernameLabel}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder={strings.passwordLabel}
          />
        </View>
        
        <TouchableOpacity 
          style={styles.forgotBtn}
          onPress={resetPassword}
          >
          <Text style={styles.forgotText}>{strings.forgotLabel}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginBtn} 
          onPress={login}
          >
          <Text style={styles.loginText}>{strings.loginButton}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.registerBtn} 
          onPress={register}
          >
          <Text style={styles.registerText}>{strings.registerLabel}</Text>
        </TouchableOpacity>
    </ScreenContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: "white",
    borderColor: colors.secondaryColor,
    borderWidth: 2,
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
    textAlign: 'center'
  },
  forgotText: {
    height: 30,
    marginBottom: 30,
    ...GlobalStyles.italic
  },
  loginBtn: {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor: colors.secondaryColor,
  },
  registerBtn: {
    width:"75%",
    alignItems: "flex-end",
    marginTop: 10,
  },
  registerText: {
    ...GlobalStyles.italic
  }
});

export default connect(null, ActionCreators)(SignIn)