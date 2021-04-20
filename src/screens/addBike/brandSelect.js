import React, { useEffect, useState } from 'react';
import { StyleSheet, } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import * as ActionCreators from '../../actions'
import strings from '../../../res/strings';
import SearchList from '../../library/components/searchList';



const BrandSelect = ({ brands, navigation, ...props }) => {
    //State
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        //Load data 
        props.getBrands().then(({ error }) => error || setLoaded(true))
    }, [])

    return(
        <ScreenContainer style={styles.container}>
            <SearchList
                list={loaded ? brands : []}
                onSelect={(val) => navigation.navigate("modelSelect", { brand: val })}
                getItemValue={i => i.name}
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

export default connect(mapObjectToProps, ActionCreators)(BrandSelect);