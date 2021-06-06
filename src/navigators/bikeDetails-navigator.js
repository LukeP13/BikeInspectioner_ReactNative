import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListBikesScreen from "../screens/bikes";
import { StackNavHeaderOptions } from "./headerStyles";
import BikeDetails from "../screens/bikes/details";
import strings from "../../res/strings";
import FinalPreview from "../screens/addBike/finalPreview";

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
    <Screen
      name="Edit"
      component={FinalPreview}
      options={({ route: { params } }) => ({
        title: `${params.bike.name} - ${strings.editBikeTitle}`,
        ...StackNavHeaderOptions.secondary,
      })}
    />
  </Navigator>
);
