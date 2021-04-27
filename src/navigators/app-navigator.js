import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import AddBikeNavigator from './addBike-navigator';
import ProfileScreen from '../screens/profile';

const { Navigator, Screen } = createDrawerNavigator();

export default AppNavigator = () => (
    <Navigator>
        <Screen 
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
        />
        <Screen 
            name="AddBike"
            component={AddBikeNavigator}
            options={{
                title: "Add Bike"
            }}
        />
        <Screen 
            name="Profile"
            component={ProfileScreen}
        />
    </Navigator>
)
