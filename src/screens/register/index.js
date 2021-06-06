import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  CheckBox,
} from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import mycolors from "../../../res/colors";
import strings from "../../../res/strings";
import * as ActionCreators from "../../actions";
import TimeoutText from "../../library/components/timeoutText";

import ValidationTextInput from "../../library/components/validationTextInput";

const Register = ({ navigation, ...props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsOfService, setTermsOfService] = useState(false);

  const [form, setForm] = useState({
    username: false,
    password: false,
    repeatPassword: false,
    email: false,
    phone: true,
  });

  const [message, setMessage] = useState("");

  function sendEnabled() {
    for (let o in form) if (!form[o]) return false;

    return termsOfService;
  }

  function onValidChange(prop, val) {
    setForm({
      ...form,
      [prop]: val,
    });
  }

  function register() {
    setMessage("");

    props
      .register(username, email, password, phone)
      .then(({ error }) => {
        if (error) setMessage(error);
        else navigation.pop(1);
      })
      .catch((_) => setMessage("Network error!"));
  }

  return (
    <ScreenContainer style={styles.container}>
      <ValidationTextInput
        placeholder={strings.registerUsername}
        value={username}
        onChangeText={setUsername}
        type="username"
        errorMessage="Invalid username"
        onValidChange={(val) => onValidChange("username", val)}
        required
      />
      <ValidationTextInput
        placeholder={strings.registerEmail}
        value={email}
        onChangeText={setEmail}
        type="email"
        errorMessage="Invalid email"
        onValidChange={(val) => onValidChange("email", val)}
        required
      />
      <ValidationTextInput
        placeholder={strings.registerPassword}
        value={password}
        onChangeText={setPassword}
        type="password"
        errorMessage="Password must be at least 8 characters"
        onValidChange={(val) => onValidChange("password", val)}
        required
        secureTextEntry
      />
      <ValidationTextInput
        placeholder={strings.registerRepeatPassword}
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        type="password"
        isError={(val) => val !== password}
        errorMessage="Passwords don't match!"
        onValidChange={(val) => onValidChange("repeatPassword", val)}
        required
        secureTextEntry
      />
      <ValidationTextInput
        placeholder={strings.registerPhone}
        value={phone}
        onChangeText={setPhone}
        onValidChange={(val) => onValidChange("phone", val)}
        type="phone"
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={termsOfService}
          onValueChange={setTermsOfService}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          I have read and accept to the terms and conditions
        </Text>
      </View>

      <TimeoutText value={message} timeout={1500} />

      <TouchableOpacity
        style={[styles.registerBtn, !sendEnabled() && styles.disabledButton]}
        onPress={register}
        disabled={!sendEnabled()}
      >
        <Text style={styles.registerText}>{strings.registerLabel}</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginVertical: 30,
  },
  textInput: {
    height: 50,
    flex: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
  },
  inputView: {
    width: "75%",
    height: 55,
  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: mycolors.secondaryColor,
  },
  disabledButton: {
    backgroundColor: mycolors.disabledColor,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize: 12,
  },
});

export default connect(null, ActionCreators)(Register);
