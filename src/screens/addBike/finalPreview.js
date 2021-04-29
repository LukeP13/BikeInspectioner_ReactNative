import React, { useState } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { colors } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScreenContainer } from "react-native-screens";
import strings from "../../../res/strings";
import ValidationTextInput from "../../library/components/validationTextInput";
import mycolors from "../../../res/colors";
import { connect } from "react-redux";
import * as ActionCreators from "../../actions";

const FinalPreview = ({ navigation, route: { params }, addBike }) => {
  const [finalBike, setFinalBike] = useState(params.bike);

  function onSelect() {
    addBike(finalBike);
    navigation.pop(3);
    navigation.navigate("Home");
  }

  return (
    <ScreenContainer style={styles.container}>
      <ValidationTextInput
        placeholder={strings.previewName}
        value={finalBike.name}
        onChangeText={(val) => setFinalBike({ ...finalBike, name: val })}
        errorMessage={strings.errorPreviewName}
        required
      />
      <View style={styles.submitButtonView}>
        <TouchableOpacity onPress={onSelect} style={styles.submitButton}>
          <Text>{strings.addBikeButton}</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginBottom: 15,
    marginTop: 5,
    padding: 10,
    borderRadius: 5,
    elevation: 1,
    alignItems: "center",
  },
  submitButtonView: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  submitButton: {
    zIndex: 20,
    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.grey2,
    backgroundColor: mycolors.secondaryColor,
  },
});

export default connect(null, ActionCreators)(FinalPreview);
