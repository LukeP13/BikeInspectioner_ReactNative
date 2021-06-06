import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "react-native-elements";
import { formatTime } from "../../functions/convertMS";

const RevisionStatus = ({ time, distance, inProgress }) => {
  const STATES = {
    pending: {
      style: styles.pendingText,
      label: "Pending!",
    },
    inProgress: {
      style: styles.inProgressText,
      label: "In progress...",
    },
    ok: {
      style: styles.okText,
      label: `${distance ? `${Math.round(distance)} Km` : ""}${
        distance && time ? " or " : ""
      }${time ? formatTime(time) : ""}`,
    },
    default: {
      style: styles.defaultText,
      label: "--",
    },
  };

  let state = STATES.default;
  if (inProgress) state = STATES.inProgress;
  else if (distance === 0 || time === 0) state = STATES.pending;
  else if (distance || time) state = STATES.ok;

  return <Text style={[styles.defaultText, state.style]}>{state.label}</Text>;
};

const styles = StyleSheet.create({
  pendingText: {
    color: colors.error,
  },
  inProgressText: {
    color: colors.success,
  },
  okText: {
    color: colors.black,
  },
  defaultText: {
    color: colors.black,
    fontStyle: "italic",
  },
});

export default RevisionStatus;
