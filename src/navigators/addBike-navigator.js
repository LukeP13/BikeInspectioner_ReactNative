import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddBikeScreen from '../screens/addBike/index'


const { Navigator, Screen } = createStackNavigator();

export default AddBikeNavigator = () => (
    <Navigator>
        <Screen 
            name="1" 
            component={AddBikeScreen} 
            options={{
                headerShown: false,
            }}
        />
    </Navigator>
)