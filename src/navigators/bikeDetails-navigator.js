import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListBikesScreen from "../screens/bikes";
import { StackNavHeaderOptions } from "./headerStyles";
import BikeDetails from "../screens/bikes/details";

const { Navigator, Screen } = createStackNavigator();

export default BikeDetailsNavigator = () => (
  <Navigator>
    <Screen
      name="List"
      component={ListBikesScreen}
      options={StackNavHeaderOptions.primary}
    />
    <Screen
      name="Details"
      component={BikeDetails}
      options={({ route: { params } }) => ({
        title: `${params.bike.name}`,
        ...StackNavHeaderOptions.secondary,
      })}
    />
  </Navigator>
);
