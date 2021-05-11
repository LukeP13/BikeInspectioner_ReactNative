import React from "react";
import { Image } from "react-native";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "react-native-elements";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import images from "../../../res/images";
import strings from "../../../res/strings";
import AppScreenContainer from "../../library/components/appScreenContainer";
import globalStyles from "../../styles/styles";

const AddBikeScreen = ({ navigation }) => {
  function onCustomBike() {
    const bike = {
      revisions: [],
      name: strings.newBike,
      distancePerYear: 0,
      totalDistance: 0,
    };

    navigation.navigate("preview", { bike });
  }

  return (
    <AppScreenContainer navigation={navigation} title="Add Bike">
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={() => navigation.navigate("brandSelect")}
        >
          <Text style={styles.selectButtonText}>Select Model</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectButton} onPress={onCustomBike}>
          <Text style={styles.selectButtonText}>Custom bike</Text>
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
    width: "100%",
  },
  selectButton: {
    marginHorizontal: 10,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
    borderRadius: 1,
    elevation: 1,
    paddingVertical: 5,
  },
  selectButtonImage: {
    height: 30,
    resizeMode: "contain",
  },
  selectButtonText: {
    fontSize: 25,
  },
});

function mapObjectToProps(state) {
  return {};
}

export default connect(mapObjectToProps)(AddBikeScreen);
