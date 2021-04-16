import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/signin';
import Register from '../screens/register';
import { StackNavHeaderOptions } from './headerStyles';

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
          title: "New account",
          ...StackNavHeaderOptions.secondary
        }}/>
  </Navigator>
)
