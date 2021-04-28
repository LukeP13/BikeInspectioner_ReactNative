import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

const BikeItem = ({ item }) => {
  console.log(item);
  return (
    <View>
      <Text>{item._id}</Text>
    </View>
  );
};

export default BikeItem;
