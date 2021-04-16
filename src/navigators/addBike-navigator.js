import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import strings from '../../res/strings';
import BrandSelect from '../screens/addBike/brandSelect';
import AddBikeScreen from '../screens/addBike/index'
import ModelSelect from '../screens/addBike/modelSelect';
import { StackNavHeaderOptions } from './headerStyles';


const { Navigator, Screen } = createStackNavigator();


export default AddBikeNavigator = () => (
    <Navigator>
        <Screen 
            name="index" 
            component={AddBikeScreen} 
            options={StackNavHeaderOptions.primary}
        />
        <Screen 
            name="brandSelect" 
            component={BrandSelect} 
            options={{
                title: strings.brandSelectTitle,
                ...StackNavHeaderOptions.secondary
            }}
        />
        <Screen 
            name="modelSelect" 
            component={ModelSelect} 
            options={{
                title: strings.modelSelectTitle,
                ...StackNavHeaderOptions.secondary
            }}
        />
    </Navigator>
)

