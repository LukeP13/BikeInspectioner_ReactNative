import React, { useEffect, useState } from "react";
import { AppState, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

import * as ActionCreators from "../../actions";
import AppScreenContainer from "../../library/components/appScreenContainer";
import BikeItem from "../../library/components/items/bikeItem";

const ListBikesScreen = ({ navigation, getBikes, bikes }) => {
  const [loaded, setLoaded] = useState(false);
  function fetchData() {
    getBikes().then(({ error }) => {
      !error && setLoaded(true);
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      isActive && fetchData();

      return () => {
        isActive = false;
      };
    }, [navigation])
  );

  useEffect(() => {
    AppState.addEventListener("change", fetchData);

    return () => {
      AppState.removeEventListener("change", fetchData);
    };
  }, []);

  return (
    <AppScreenContainer navigation={navigation}>
      <ScrollView style={styles.container}>
        {loaded ? (
          (bikes || []).map((item, i) => (
            <BikeItem
              key={item._id}
              item={item}
              onPress={() => navigation.navigate("Details", { bike: item })}
            />
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

export default connect(mapStateToProps, ActionCreators)(ListBikesScreen);
