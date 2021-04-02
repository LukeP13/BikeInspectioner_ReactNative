
import * as ActionCreators from './actions';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './components/signin';
import Register from './components/register';

const AuthStack = createStackNavigator();

const RootComponent = (props) => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}

export default connect(null, ActionCreators)(RootComponent)