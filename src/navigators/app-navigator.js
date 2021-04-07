import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home';

const { Navigator, Screen } = createDrawerNavigator();

export default AppNavigator = () => (
    <Navigator>
        <Screen 
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
        />
        <Screen 
            name="Profile"
            component={HomeScreen}
        />
    </Navigator>
)
