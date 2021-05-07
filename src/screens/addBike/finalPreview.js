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
import RevisionEdit from "./revisionEdit";

const FinalPreview = ({ navigation, route: { params }, addBike }) => {
  const [finalBike, setFinalBike] = useState(params.bike);
  const { name, revisions } = finalBike;

  function onSelect() {
    addBike(finalBike);
    navigation.pop(3);
    navigation.navigate("Home");
  }

  function onChangeRevision(item, change) {
    setFinalBike({
      ...finalBike,
      revisions: finalBike.revisions.map((i) =>
        i._id === item._id ? { ...i, ...change } : i
      ),
    });
  }

  function onDelete({ _id }) {
    setFinalBike({
      ...finalBike,
      revisions: finalBike.revisions.splice(
        finalBike.revisions.findIndex((item) => item._id === _id),
        1
      ),
    });
  }

  function newRevision() {
    setFinalBike({
      ...finalBike,
      revisions: [
        ...finalBike.revisions,
        { name: "new", time: 0, distance: 0 },
      ],
    });
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.labelText}>{strings.labelName}</Text>
        <TextInput
          style={styles.titleText}
          placeholder={strings.previewName}
          value={name}
          onChangeText={(val) => setFinalBike({ ...finalBike, name: val })}
          required
        />
      </View>

      <View style={styles.revisionsView}>
        <Text style={styles.labelText}>Revisions: </Text>
        <ScrollView style={styles.scrollRevisions}>
          {revisions.map((item, i) => (
            <RevisionEdit
              key={i}
              revision={item}
              onChange={onChangeRevision.bind(null, item)}
              onDelete={onDelete.bind(null, item)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.submitButtonView}>
        <TouchableOpacity onPress={newRevision} style={styles.submitButton}>
          <Text>{strings.newRevisionButton}</Text>
        </TouchableOpacity>
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
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  submitButton: {
    zIndex: 20,
    width: 80,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.grey2,
    paddingHorizontal: 5,
  },
  titleView: {
    marginTop: 10,
    borderBottomWidth: 0.5,
    width: "95%",
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
  },
  scrollRevisions: {
    paddingRight: 10,
  },
});

export default connect(null, ActionCreators)(FinalPreview);
