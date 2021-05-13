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
import { Picker } from "@react-native-community/picker";
import { range } from "../../library/functions/utilities";

const FinalPreview = ({ navigation, route: { params }, addBike }) => {
  const [finalBike, setFinalBike] = useState(params.bike);
  const { name, revisions, distancePerYear, totalDistance } = finalBike;

  function onSubmit() {
    addBike({
      ...finalBike,
      revisions: finalBike.revisions.map((i) => ({
        ...i,
        distance: i.distance > 0 ? i.distance : null,
        time: i.time > 0 ? i.time : null,
      })),
    });
    navigation.pop(3);
    navigation.navigate("Home");
  }

  function onChangeRevision(index, change) {
    setFinalBike({
      ...finalBike,
      revisions: finalBike.revisions.map((it, ind) =>
        index === ind ? { ...it, ...change } : it
      ),
    });
  }

  function onDelete(index) {
    let revisions = [...finalBike.revisions];
    revisions.splice(index, 1);
    const bike = {
      ...finalBike,
      revisions,
    };
    setFinalBike(bike);
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.distanceContainer}>
          <Text style={styles.labelText}>{strings.labelTotalDistance}</Text>
          <View style={styles.distanceView}>
            <TextInput
              style={styles.totalDistanceText}
              value={totalDistance.toString()}
              onChangeText={(totalDistance) =>
                setFinalBike({
                  ...finalBike,
                  totalDistance: parseInt(totalDistance),
                })
              }
              keyboardType="numeric"
            />
            <Text>{`${strings.km}`.toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.distanceContainer}>
          <Text style={styles.labelText}>{strings.labelDistPerYear}</Text>
          <View style={styles.distanceView}>
            <Picker
              style={styles.distancePicker}
              selectedValue={distancePerYear}
              onValueChange={(distancePerYear) =>
                setFinalBike({ ...finalBike, distancePerYear })
              }
            >
              {range(0, 10000, 500).map((item, i) => (
                <Picker.Item key={i} label={`${item}`} value={item} />
              ))}
            </Picker>
            <Text>{`${strings.km} / ${strings.year}`.toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.revisionsView}>
          <Text style={styles.labelText}>Revisions: </Text>
          {revisions.map((item, i) => (
            <RevisionEdit
              key={i}
              revision={item}
              onChange={onChangeRevision.bind(null, i)}
              onDelete={onDelete.bind(null, i)}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.submitButtonView}>
        <TouchableOpacity onPress={newRevision} style={styles.submitButton}>
          <Text>{strings.newRevisionButton}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
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
    marginHorizontal: 5,
    marginBottom: 5,
    borderRadius: 5,
    elevation: 1,
    alignItems: "center",
    paddingBottom: 5,
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
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    marginBottom: 5,
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
    marginTop: 20,
  },
  scrollView: {
    paddingHorizontal: 10,
    width: "95%",
  },
  distanceContainer: {
    marginTop: 20,
    borderBottomWidth: 0.5,
  },
  distanceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  distancePicker: {
    height: 35,
    width: 105,
    padding: 0,
  },
  totalDistanceText: {
    paddingTop: 2,
    fontSize: 16,
    paddingLeft: 6,
  },
});

export default connect(null, ActionCreators)(FinalPreview);
