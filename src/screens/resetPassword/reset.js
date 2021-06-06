import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { ScreenContainer } from "react-native-screens";
import strings from "../../../res/strings";
import mycolors from "../../../res/colors";

import Api from "../../controllers/api";

const ResetPassword = ({
  navigation,
  route: {
    params: { email, code },
  },
}) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function editEnabled() {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password) && password === repeatPassword;
  }

  function onPress() {
    Api.resetPassword(email, code, password).then(
      () => navigation.pop(3),
      () => console.log()
    );
  }

  return (
    <ScreenContainer style={styles.screenContainer}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          placeholder={strings.registerPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          placeholder={strings.registerRepeatPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={[styles.loginBtn, !editEnabled() && styles.disabledBtn]}
        onPress={editEnabled() && onPress}
      >
        <Text style={styles.loginText}>{strings.send}</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "white",
    borderColor: mycolors.secondaryColor,
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
    textAlign: "center",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: mycolors.secondaryColor,
  },
  disabledBtn: {
    backgroundColor: mycolors.disabledColor,
  },
});

export default ResetPassword;
