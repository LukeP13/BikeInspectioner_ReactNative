import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import strings from "../../../res/strings";
import { formatTime } from "../../library/functions/convertMS";

import * as ActionCreators from "../../actions";
import { colors } from "react-native-elements";
import OptionSelect from "../../library/components/optionSelect";
import images from "../../../res/images";
import mycolors from "../../../res/colors";
import RevisionStatus from "../../library/components/items/revisionStatus";

const BikeDetails = ({
  route: {
    params: { bike },
  },
  patchBike,
  patchRevision,
  navigation,
}) => {
  const { _id, name, incomingRevisions, revisions } = bike;

  const [distancePerYear, totalDistance] = [
    Math.floor(bike.distancePerYear),
    Math.floor(bike.totalDistance),
  ];

  function onRevisionPass(revisionId) {
    let incoming = incomingRevisions.map((item) =>
      item._id === revisionId
        ? revisions.find((item) => item._id === revisionId)
        : item
    );
    patchBike(_id, { incomingRevisions: incoming }).then(() =>
      navigation.pop()
    );
  }

  async function onRevisionInProgress(revId, value) {
    let incoming = incomingRevisions.map((item) =>
      item._id === revId
        ? {
            ...item,
            inProgress: value,
          }
        : item
    );

    return patchBike(_id, { incomingRevisions: incoming });
  }

  function toggleNotification(revId, value) {
    patchRevision(_id, revId, { notify: value });
  }

  function onEdit() {
    navigation.navigate("Edit", { bike, edit: true });
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.distanceView}>
        <Text
          style={styles.distanceText}
        >{`${totalDistance} ${strings.km}`}</Text>
        <Text
          style={styles.distanceText}
        >{`${distancePerYear} ${strings.km}/${strings.year}`}</Text>
      </View>

      <View style={styles.revisionsStaticView}>
        <ScrollView style={styles.revisionsScrollView}>
          {incomingRevisions.map((item, index) => (
            <Revision
              key={index}
              revision={item}
              onPass={() => onRevisionPass(item._id)}
              onToggleNotification={(val) => toggleNotification(item._id, val)}
              onInProgress={(val) => onRevisionInProgress(item._id, val)}
            />
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Image source={images.editIcon} style={styles.editButtonImage} />
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const Revision = ({ revision, onPass, onToggleNotification, onInProgress }) => {
  const { _id, name, time, distance, notify, inProgress } = revision;

  const [isEnabled, setEnabled] = useState(notify || false);
  const toggleSwitch = () => {
    onToggleNotification(!isEnabled);
    setEnabled(!isEnabled);
  };

  const [state, setState] = useState(inProgress ? "progress" : "ok");
  function onStateChange(value) {
    setState(value);
    const antState = state;
    switch (value) {
      case "done":
        Alert.alert("You want to mark inspection as done?", `- ${name}`, [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => setState(antState),
          },
          { text: "OK", onPress: onPass },
        ]);
        break;
      case "progress":
        onInProgress(true).catch((err) => setState(antState));
        break;
      case "ok":
        onInProgress(false)
          .then()
          .catch(() => setState(antState));
        break;
    }
  }

  return (
    <View style={styles.revisionGlobalView}>
      <View style={styles.revisionView}>
        <Text style={styles.revisionName}>{name}</Text>
        <View style={styles.revisionDistance}>
          <RevisionStatus {...revision} />
        </View>
      </View>

      <View style={styles.revisionUtilities}>
        <View style={styles.notifContainer}>
          <Text>{strings.notifications}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#beddc4" }}
            thumbColor={isEnabled ? "#3dcc57" : "#f4f3f4"}
            ios_backgroundColor="#5DC571"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <OptionSelect value={state} onValueChange={onStateChange} />
      </View>
    </View>
  );
};

BikeDetails.Revision = Revision;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  distanceView: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  distanceText: {
    fontWeight: "bold",
  },
  editButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: mycolors.secondaryColor,
    position: "absolute",
    bottom: 15,
    right: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  editButtonImage: {
    resizeMode: "contain",
    height: 25,
    width: 25,
  },
  revisionsStaticView: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 5,
    width: "100%",
    borderTopWidth: 1,
  },
  revisionGlobalView: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: "flex-start",
    marginHorizontal: 1,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 5,
  },
  revisionView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
  },
  revisionName: {
    fontWeight: "bold",
  },
  revisionOther: {},
  revisionPassedButton: {},
  revisionDistance: { marginRight: 3 },
  notifContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: "center",
  },
});

export default connect(null, ActionCreators)(BikeDetails);
