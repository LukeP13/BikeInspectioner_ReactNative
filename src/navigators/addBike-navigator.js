import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import strings from '../../res/strings';
import BrandSelect from '../screens/addBike/brandSelect';
import AddBikeScreen from '../screens/addBike/index'
import ModelSelect from '../screens/addBike/modelSelect';
import { StackNavHeaderOptions } from './headerStyles';


const { Navigator, Screen } = createStackNavigator();


const AddBikeNavigator = () => (
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
            options={({ route }) => ({
                title: `${strings.modelSelectTitle} - ${route.params.brand.name}`,
                ...StackNavHeaderOptions.secondary
            })}
            getId={({ params }) => params.id}
        >
        </Screen>
    </Navigator>
)



export default AddBikeNavigator;