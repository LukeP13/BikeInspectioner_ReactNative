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

const CheckCode = ({
  navigation,
  route: {
    params: { email },
  },
}) => {
  const [code, setCode] = useState("");

  function onPress() {
    Api.checkPasswordCode(email, code).then(
      () => navigation.navigate("ResetPassword", { email, code }),
      () => console.log()
    );
  }

  return (
    <ScreenContainer style={styles.screenContainer}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={code}
          onChangeText={setCode}
          placeholder={strings.code}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
        <Text style={styles.loginText}>{strings.check}</Text>
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
});

export default CheckCode;
