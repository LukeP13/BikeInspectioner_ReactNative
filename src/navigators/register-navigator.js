import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "../screens/register";
import { StackNavHeaderOptions } from "./headerStyles";
import Details from "../screens/register/details";

const { Navigator, Screen } = createStackNavigator();

export default RegisterNavigator = () => (
  <Navigator>
    <Screen
      name="Register"
      component={Register}
      options={StackNavHeaderOptions.primary}
    />
    <Screen
      name="Details"
      component={Details}
      options={{
        ...StackNavHeaderOptions.secondary,
        title: "Rider details",
      }}
    />
  </Navigator>
);
