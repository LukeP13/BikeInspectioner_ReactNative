import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import AppScreenContainer from "../../library/components/appScreenContainer";

const AddBikeScreen = ({ navigation }) => {
  return (
    <AppScreenContainer navigation={navigation} title="Add Bike">
      <View style={styles.container}>
        <Button
          title="Add from list"
          onPress={() => navigation.navigate("brandSelect")}
        />
        <Button title="Add custom bike" onPress={() => {}} />
      </View>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapObjectToProps(state) {
  return {};
}

export default connect(mapObjectToProps)(AddBikeScreen);
