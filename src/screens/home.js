import React from 'react'
import { View } from 'react-native';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native'
import { ScreenContainer } from 'react-native-screens'
import { connect } from 'react-redux';

import * as ActionCreators from '../actions';
import Navbar from '../library/components/navbar';

/* TODO: List */

const HomeScreen = ({ navigation }) => {
    return (
        <ScreenContainer style={styles.container}>
            <Navbar navigation={navigation}/>

            <View style={styles.content}>
              <Text>Home</Text>
              <Button
                title="Add motorcycle"
                onPress={() => navigation.navigate('AddBike')} 
              />
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 70,
    flex: 1,
  }
});

export default connect(null, ActionCreators)(HomeScreen)