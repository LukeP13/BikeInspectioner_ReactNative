import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import mycolors from "../../../res/colors";
import strings from "../../../res/strings";
import * as ActionCreators from "../../actions";
import TimeoutText from "../../library/components/timeoutText";

import ValidationTextInput from "../../library/components/validationTextInput";

const EditUser = ({
  navigation,
  route: {
    params: { user },
  },
  ...props
}) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone || "");

  const [form, setForm] = useState({
    first: false,
    username: true,
    email: true,
    phone: true,
  });

  const [message, setMessage] = useState("");

  function sendEnabled() {
    for (let o in form) if (!form[o]) return false;

    return true;
  }

  function onValidChange(prop, val) {
    setForm({
      ...form,
      first: true,
      [prop]: val,
    });
  }

  function onSave() {
    setMessage("");

    props
      .patchUser({ username, email, phone })
      .then(({ error }) => {
        if (error) setMessage(error);
        else navigation.pop(1);
      })
      .catch(() => setMessage("Network error!"));
  }

  function onChangePassword() {
    navigation.navigate("EditPassword", { user });
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
        onValidChange={(val) => onValidChange("email", val)}
        required
      />
      <ValidationTextInput
        placeholder={strings.registerPhone}
        value={phone}
        onChangeText={setPhone}
        onValidChange={(val) => onValidChange("phone", val)}
        type="phone"
      />

      <TimeoutText value={message} timeout={1500} />

      <TouchableOpacity style={styles.registerBtn} onPress={onChangePassword}>
        <Text style={styles.registerText}>{strings.editPasswordButton}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.saveBtn, !sendEnabled() && styles.disabledButton]}
        onPress={onSave}
        disabled={!sendEnabled()}
      >
        <Text style={styles.saveText}>{strings.editUserButton}</Text>
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
  saveBtn: {
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
  registerBtn: {
    width: "75%",
    alignItems: "flex-end",
    marginTop: 10,
  },
  registerText: {
    fontStyle: "italic",
  },
});

export default connect(null, ActionCreators)(EditUser);
