import React from 'react';
import { StyleSheet, } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import strings from '../../../res/strings';
import SearchList from '../../library/components/searchList';



const BrandSelect = ({ brands, navigation }) => {
    const LIST = ["Kawasaki", "Ducati", "Other"]
    return(
        <ScreenContainer style={styles.container}>
            <SearchList
                list={LIST ||brands.map(a => a.name)}
                onSelect={() => navigation.navigate("modelSelect")}
            />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})

function mapObjectToProps(state) {
    return {
        brands: state.general.brands,
    }
}

export default connect(mapObjectToProps)(BrandSelect);