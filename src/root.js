import * as ActionCreators from "./actions";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./navigators/auth-navigator";
import AppNavigator from "./navigators/app-navigator";
import { StatusBar } from "react-native";

//Initialize firebase
import { fireBaseInit } from "./library/connections/firebase";
import registerForPushNotificationsAsync from "./library/connections/registerForPushNotificationsAsync";

const RootComponent = ({ isLoggedIn, saveToken }) => {
  useEffect(() => {
    fireBaseInit();
    registerForPushNotificationsAsync().then(
      ({ token, error }) => !error && saveToken(token)
    );
  }, []);

  return (
    <NavigationContainer>
      <StatusBar />
      {!isLoggedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
}

export default connect(mapStateToProps, ActionCreators)(RootComponent);
