import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { ScreenContainer } from "react-native-screens";
import colors from "../../../res/colors";

import Navbar from "./navbar";
/* TODO: List */

const AppScreenContainer = ({ navigation, children }) => {
  return (
    <ScreenContainer style={styles.container}>
      <Navbar navigation={navigation} />
      <SafeAreaView style={styles.content}>{children}</SafeAreaView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    marginTop: 70,
    backgroundColor: colors.white,
  },
});

export default AppScreenContainer;
