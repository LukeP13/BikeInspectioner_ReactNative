import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import { ScreenContainer } from 'react-native-screens'
import { connect } from 'react-redux';

import * as ActionCreators from '../../actions';


const ProfileScreen = (props) => {
    return (
        <ScreenContainer style={styles.container}>
            <Text>User profile</Text>
            <Button 
              title="Logout"
              onPress={props.logout} 
            />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

export default connect(null, ActionCreators)(ProfileScreen)