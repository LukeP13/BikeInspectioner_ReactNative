import * as ActionCreators from './actions';
import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigators/auth-navigator';
import AppNavigator from './navigators/app-navigator';

const RootComponent = ({ isLoggedIn }) => {

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  )
}

function mapStateToProps (state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps, ActionCreators)(RootComponent)