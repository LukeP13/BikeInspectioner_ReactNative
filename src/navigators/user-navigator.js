import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { StackNavHeaderOptions } from "./headerStyles";
import strings from "../../res/strings";
import ProfileScreen from "../screens/profile";
import EditUser from "../screens/profile/edit";
import PasswordEdit from "../screens/profile/passwordEdit";

const { Navigator, Screen } = createStackNavigator();

export default UserNavigator = () => (
  <Navigator>
    <Screen
      name="UserInfo"
      component={ProfileScreen}
      options={StackNavHeaderOptions.primary}
    />
    <Screen
      name="Edit"
      component={EditUser}
      options={{
        ...StackNavHeaderOptions.secondary,
        title: "Edit info",
      }}
    />
    <Screen
      name="EditPassword"
      component={PasswordEdit}
      options={{
        ...StackNavHeaderOptions.secondary,
        title: "Change password",
      }}
    />
  </Navigator>
);
