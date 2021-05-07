import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatTime } from "../../functions/convertMS";
import globalStyles from "../../../styles/styles";

const RevisionItem = ({ item }) => {
  const { name, distance, time } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.period}>
        {distance
          ? `${distance} Km${time ? ` ${strings.or} ${formatTime(time)}` : ""}`
          : `${time ? formatTime(time) : "--"}`}
      </Text>
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
  period: {
    ...globalStyles.italic,
  },
});

export default RevisionItem;
