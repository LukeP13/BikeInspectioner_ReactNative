import * as ActionCreators from '../actions';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';
import { ScreenContainer } from 'react-native-screens';


const SignIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login () {
    props.login(username, password)
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={[styles.container, {flex: 2}]}>
          <Text>BikeInspectioner</Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'flex-start' }}>
        <TextInput style={styles.textInput}
          value={username}
          onChangeText={setUsername}
          placeholder="Username or Email"
        />
        <TextInput style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />
      </View>
      <View style={styles.container}>
        <Button 
          onPress={login}
          style={styles.button} 
          title="Login" />
        <Button 
          onPress={() => props.navigation.push("Register")}
          title="CreateAcount"
        />
      </View>
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
  textInput: {
    marginBottom: 10,
    textAlign: "center"
  },
  selectedLabel: {
    color: "white",
  },
  button: {
    textAlign: "center",
    paddingHorizontal: 10,
    fontSize: 24,
  },
});

export default connect(null, ActionCreators)(SignIn)