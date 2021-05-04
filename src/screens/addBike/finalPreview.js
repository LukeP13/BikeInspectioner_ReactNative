import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import { StyleSheet, View } from "react-native";
import { colors } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ScreenContainer } from "react-native-screens";
import strings from "../../../res/strings";
import ValidationTextInput from "../../library/components/validationTextInput";
import mycolors from "../../../res/colors";
import { connect } from "react-redux";
import * as ActionCreators from "../../actions";
import RevisionEdit from "./RevisionEdit";

const FinalPreview = ({ navigation, route: { params }, addBike }) => {
  const [finalBike, setFinalBike] = useState(params.bike);

  function onSelect() {
    addBike(finalBike);
    navigation.pop(3);
    navigation.navigate("Home");
  }

  function onChange(item) {
    console.log("Change revision", item);
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.labelText}>{strings.labelName}</Text>
        <TextInput
          style={styles.titleText}
          placeholder={strings.previewName}
          value={finalBike.name}
          onChangeText={(val) => setFinalBike({ ...finalBike, name: val })}
          required
        />
      </View>

      <View style={styles.revisionsView}>
        <Text style={styles.labelText}>Revisions: </Text>
        <ScrollView style={styles.scrollRevisions}>
          {finalBike.revisions.map((item) => (
            <RevisionEdit revision={item} onChange={() => onChange(item)} />
          ))}
        </ScrollView>
      </View>
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
    alignSelf: "flex-end",
    margin: 10,
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
  titleView: {
    marginTop: 10,
    borderBottomWidth: 0.5,
    width: "90%",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 3,
  },
  labelText: {
    fontStyle: "italic",
    fontWeight: "100",
    color: colors.grey2,
  },
  revisionsView: {
    flex: 1,
    width: "95%",
    marginTop: 30,
    backgroundColor: colors.grey4,
  },
});

export default connect(null, ActionCreators)(FinalPreview);
