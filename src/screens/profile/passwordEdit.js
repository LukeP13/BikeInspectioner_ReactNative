import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import mycolors from "../../../res/colors";
import strings from "../../../res/strings";
import * as ActionCreators from "../../actions";
import TimeoutText from "../../library/components/timeoutText";

import ValidationTextInput from "../../library/components/validationTextInput";

const EditPassword = ({ navigation, ...props }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [form, setForm] = useState({
    oldPassword: false,
    newPassword: false,
    repeatPassword: false,
  });

  const [message, setMessage] = useState("");

  function sendEnabled() {
    for (let o in form) if (!form[o]) return false;

    return true;
  }

  function onValidChange(prop, val) {
    setForm({
      ...form,
      [prop]: val,
    });
  }

  function onSave() {
    setMessage("");

    props
      .patchUserPassword(oldPassword, newPassword)
      .then(({ error }) => {
        if (error) setMessage(error);
        else navigation.pop(1);
      })
      .catch((_) => setMessage("Network error!"));
  }

  return (
    <ScreenContainer style={styles.container}>
      <ValidationTextInput
        placeholder={strings.oldPassword}
        value={oldPassword}
        onChangeText={setOldPassword}
        errorMessage="Password must be at least 8 characters"
        onValidChange={(val) => onValidChange("oldPassword", val)}
        required
        secureTextEntry
      />
      <ValidationTextInput
        placeholder={strings.newPassword}
        value={newPassword}
        onChangeText={setNewPassword}
        type="password"
        errorMessage="Password must be at least 8 characters"
        onValidChange={(val) => onValidChange("newPassword", val)}
        required
        secureTextEntry
      />
      <ValidationTextInput
        placeholder={strings.registerRepeatPassword}
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        type="password"
        isError={(val) => val !== newPassword}
        errorMessage="Passwords don't match!"
        onValidChange={(val) => onValidChange("repeatPassword", val)}
        required
        secureTextEntry
      />

      <TimeoutText value={message} timeout={1500} />

      <TouchableOpacity
        style={[styles.registerBtn, !sendEnabled() && styles.disabledButton]}
        onPress={onSave}
        disabled={!sendEnabled()}
      >
        <Text style={styles.registerText}>{strings.editUserButton}</Text>
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
    marginTop: 40,
    backgroundColor: mycolors.secondaryColor,
  },
  disabledButton: {
    backgroundColor: mycolors.disabledColor,
  },
});

export default connect(null, ActionCreators)(EditPassword);
