import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/signin";
import { StackNavHeaderOptions } from "./headerStyles";
import Register from "../screens/register";
import ForgotPassword from "../screens/resetPassword";
import CheckCode from "../screens/resetPassword/checkCode";
import ResetPassword from "../screens/resetPassword/reset";

const { Navigator, Screen } = createStackNavigator();

export default AuthNavigator = () => (
  <Navigator>
    <Screen
      name="SignIn"
      component={SignIn}
      options={StackNavHeaderOptions.primary}
    />
    <Screen
      name="Register"
      component={Register}
      options={{
        ...StackNavHeaderOptions.secondary,
        title: "New account",
      }}
    />
    <Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{
        ...StackNavHeaderOptions.secondary,
        title: "Reset password",
      }}
    />
    <Screen
      name="CheckPasswordCode"
      component={CheckCode}
      options={{
        ...StackNavHeaderOptions.secondary,
        title: "Reset password",
      }}
    />
    <Screen
      name="ResetPassword"
      component={ResetPassword}
      options={{
        ...StackNavHeaderOptions.secondary,
        title: "Reset password",
      }}
    />
  </Navigator>
);
