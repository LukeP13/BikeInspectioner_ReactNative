import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { View } from "react-native";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import colors from "../../res/colors";

import * as ActionCreators from "../actions";
import AppScreenContainer from "../library/components/appScreenContainer";
import BikeItem from "./bikeItem";
/* TODO: List */

const HomeScreen = ({ navigation, getBikes, bikes }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getBikes().then(({ error, payload }) => {
      if (!error) {
        setLoaded(true);
      }
    });
  }, []);

  return (
    <AppScreenContainer navigation={navigation}>
      <ScrollView style={styles.container}>
        {loaded ? (
          (bikes || []).map((item, i) => (
            <BikeItem key={item._id} item={item} />
          ))
        ) : (
          <></>
        )}
      </ScrollView>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 0,
  },
});

function mapStateToProps(state) {
  return {
    bikes: state.bikes,
  };
}

export default connect(mapStateToProps, ActionCreators)(HomeScreen);
