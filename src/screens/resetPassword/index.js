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

const ForgotPassword = ({ navigation, route: { params } }) => {
  const [email, setEmail] = useState("");

  function onPress() {
    Api.forgotPassword(email)
      .catch(() => {})
      .finally(() => navigation.navigate("CheckPasswordCode", { email }));
  }

  function editEnabled() {
    return email.length > 1;
  }

  return (
    <ScreenContainer style={styles.screenContainer}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          placeholder={strings.registerEmail}
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

export default ForgotPassword;
