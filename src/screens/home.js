import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

import * as ActionCreators from "../actions";
import AppScreenContainer from "../library/components/appScreenContainer";
import BikeItem from "../library/components/items/bikeItem";

const HomeScreen = ({ navigation, getBikes, bikes }) => {
  const [loaded, setLoaded] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      getBikes().then(({ error, payload }) => {
        if (!error) {
          setLoaded(true);
        }
      });
    }, [navigation])
  );

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
