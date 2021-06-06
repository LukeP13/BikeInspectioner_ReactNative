import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "react-native-elements";
import myColors from "../../../res/colors";

const defaultValues = {
  options: [
    { value: "ok", label: "OK" },
    { value: "progress", label: "In progress" },
    { value: "done", label: "Done!" },
  ],
};

const OptionSelect = ({
  options = defaultValues.options,
  value,
  onValueChange,
}) => {
  const defaultValue = options.length > 0 ? options[0].value : null;

  function isActive(val) {
    return val === (value || defaultValue);
  }

  return (
    <View style={styles.container}>
      {options.map(({ value, label }, index) => {
        return (
          <TouchableOpacity
            style={[styles.optionView, isActive(value) && styles.active]}
            key={index}
            onPress={() => onValueChange(value)}
          >
            <Text style={styles.text}>{label != null ? label : value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: myColors.secondaryColor,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  optionView: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    margin: 3,
    backgroundColor: myColors.secondaryColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  active: {
    backgroundColor: myColors.primaryColor,
  },
  text: {
    color: colors.white,
  },
});

export default OptionSelect;
