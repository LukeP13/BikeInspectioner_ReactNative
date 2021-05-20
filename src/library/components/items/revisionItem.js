import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatTime } from "../../functions/convertMS";
import globalStyles from "../../../styles/styles";
import strings from "../../../../res/strings";
import { colors } from "react-native-elements";
import RevisionStatus from "./revisionStatus";

const RevisionItem = ({ item }) => {
  const { name, distance, time, inProgress } = item;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <RevisionStatus {...item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {},
});

export default RevisionItem;
