import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";

import * as ActionCreators from "../../actions";
import AppScreenContainer from "../../library/components/appScreenContainer";

const ProfileScreen = ({ navigation, logout }) => {
  return (
    <AppScreenContainer navigation={navigation} title="Profile">
      <View style={styles.container}>
        <Text>User profile</Text>
        <Button title="Logout" onPress={logout} />
      </View>
    </AppScreenContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default connect(null, ActionCreators)(ProfileScreen);
