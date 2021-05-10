import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/signin";
import { StackNavHeaderOptions } from "./headerStyles";
import Register from "../screens/register";

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
  </Navigator>
);
