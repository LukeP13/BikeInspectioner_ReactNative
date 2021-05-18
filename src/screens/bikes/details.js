import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import strings from "../../../res/strings";
import { formatTime } from "../../library/functions/convertMS";

import * as ActionCreators from "../../actions";

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

  function toggleNotification(revId, value) {
    patchRevision(_id, revId, { notify: value });
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.distanceView}>
        <Text
          style={styles.distanceTotalText}
        >{`${totalDistance} ${strings.km}`}</Text>
        <Text
          style={styles.distancePerYearText}
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
            />
          ))}
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

const Revision = ({
  revision: { _id, name, time, distance, notify },
  onPass,
  onToggleNotification,
}) => {
  const [isEnabled, setEnabled] = useState(notify || false);
  const toggleSwitch = () => {
    onToggleNotification(!isEnabled);
    setEnabled(!isEnabled);
  };
  return (
    <View style={styles.revisionGlobalView}>
      <View style={styles.revisionView}>
        <Text style={styles.revisionName}>{name}</Text>
        <View style={styles.revisionDistance}>
          <Text>
            {distance === 0 || time === 0
              ? strings.pendingRevision
              : distance
              ? `${Math.round(distance)} Km${
                  time != null ? ` ${strings.or} ${formatTime(time)}` : ""
                }`
              : `${time ? formatTime(time) : "--"}`}
          </Text>
        </View>
      </View>

      <View style={styles.revisionUtilities}>
        <Button
          title="Passed!"
          style={styles.revisionPassedButton}
          onPress={onPass}
        />
        <Switch
          trackColor={{ false: "#767577", true: "#beddc4" }}
          thumbColor={isEnabled ? "#3dcc57" : "#f4f3f4"}
          ios_backgroundColor="#5DC571"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
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
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  revisionsStaticView: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 5,
    borderTopWidth: 1,
  },
  revisionGlobalView: {
    marginBottom: 15,
  },
  revisionView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  revisionName: {
    fontWeight: "bold",
  },
  revisionOther: {},
  revisionPassedButton: {},
});

export default connect(null, ActionCreators)(BikeDetails);
