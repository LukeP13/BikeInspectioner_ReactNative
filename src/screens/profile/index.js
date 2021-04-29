import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import strings from "../../../res/strings";

import * as ActionCreators from "../../actions";
import AppScreenContainer from "../../library/components/appScreenContainer";

const ProfileScreen = ({ navigation, logout }) => {
  function onLogout() {
    navigation.navigate("Home");
    logout();
  }

  return (
    <AppScreenContainer navigation={navigation} title="Profile">
      <View style={styles.container}>
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>{strings.logout}</Text>
        </TouchableOpacity>
      </View>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
  },
  logoutButton: {
    marginHorizontal: 10,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
    borderRadius: 1,
    elevation: 1,
    paddingVertical: 5,
  },
  logoutText: {
    fontSize: 25,
  },
});

export default connect(null, ActionCreators)(ProfileScreen);
