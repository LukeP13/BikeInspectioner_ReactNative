import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../components/signin';
import Register from '../components/register';

const { Navigator, Screen } = createStackNavigator();

export default AuthNavigator = () => (
    <Navigator>
        <Screen 
          name="SignIn" 
          component={SignIn} 
          options={{ 
            headerShown: false
          }}/>
        <Screen 
          name="Register" 
          component={Register} 
          options={{ 
            title: "New account" 
          }}/>
    </Navigator>
)
