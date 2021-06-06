import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AddBikeNavigator from "./addBike-navigator";
import ProfileScreen from "../screens/profile";
import BikeDetailsNavigator from "./bikeDetails-navigator";
import { colors } from "react-native-elements";
import UserNavigator from "./user-navigator";

const { Navigator, Screen } = createDrawerNavigator();

export default AppNavigator = () => (
  <Navigator drawerContentOptions={{ activeTintColor: colors.grey0 }}>
    <Screen
      name="Home"
      component={BikeDetailsNavigator}
      options={{ title: "Home" }}
    />
    <Screen
      name="AddBike"
      component={AddBikeNavigator}
      options={{
        title: "Add Bike",
      }}
    />
    <Screen name="Profile" component={UserNavigator} />
  </Navigator>
);
