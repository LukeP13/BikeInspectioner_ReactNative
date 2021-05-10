import { Picker } from "@react-native-community/picker";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { range } from "../../library/functions/utilities";

/***  Not USED ****/

const Details = ({ navigation, route: { params } }) => {
  const [user, setUser] = useState(params.user);
  const { distancePerYear = 500 } = user;

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.pickerView}>
        <Picker
          onValueChange={(value) =>
            setUser({ ...user, distancePerYear: value })
          }
          value={distancePerYear}
          style={styles.picker}
        >
          {range(500, 100000, 500).map((i) => (
            <Picker.Item key={i} value={i} label={i.toString()} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity
        style={[styles.registerBtn, !sendEnabled() && styles.disabledButton]}
        onPress={register}
        disabled={!sendEnabled()}
      >
        <Text style={styles.registerText}>{strings.send}</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginVertical: 30,
  },
  textInput: {
    height: 50,
    flex: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
  },
  inputView: {
    width: "75%",
    height: 55,
  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: mycolors.secondaryColor,
  },
  disabledButton: {
    backgroundColor: mycolors.disabledColor,
  },
});

export default Details;
