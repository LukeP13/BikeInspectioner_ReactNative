import React from 'react';
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import Autocomplete from "../../library/components/autocomplete";



const AddBikeScreen = ({ ...props }) => {
    const [brand, setBrand] = useState();


    return(
        <ScreenContainer style={styles.container}>
            <Text>Add Bike</Text>
            <Autocomplete 
                value={brand}
                onChangeText={setBrand}
                data={props.brands}
                searchBy="name"
            />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 30,
    },
})

function mapObjectToProps(state) {
    return {
        brands: state.general.brands,
        //models: state.general.models,
    }
}

export default connect(mapObjectToProps)(AddBikeScreen);