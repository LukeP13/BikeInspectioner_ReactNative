import React, { useEffect } from "react";
import { Image, Button, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../res/colors";
import images from "../../../res/images";

const Navbar = ({ navigation, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity
          style={styles.buttonDrawerContainer}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={images.menu} style={styles.buttonDrawer} />
        </TouchableOpacity>
      </View>
      {!title ? (
        <Image style={styles.logo} source={images.logo_sm} />
      ) : (
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
      <View style={styles.right}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 21,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignSelf: "stretch",
    top: 0,
    right: 0,
    left: 0,
    height: 80,
    paddingTop: 10,
    backgroundColor: colors.white,
  },
  logo: {
    height: 70,
    width: 200,
  },
  left: {
    width: "25%",
  },
  right: {
    width: "25%",
  },
  buttonDrawerContainer: {
    backgroundColor: "transparent",
  },
  buttonDrawer: {
    marginLeft: 15,
    marginTop: 6,
    resizeMode: "contain",
    height: 35,
    width: 35,
  },
  titleView: {
    marginTop: 5,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Navbar;
