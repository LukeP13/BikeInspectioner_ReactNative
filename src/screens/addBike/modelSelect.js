import React, { useEffect, useState } from 'react';
import { StyleSheet, } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import * as ActionCreators from '../../actions'
import SearchList from '../../library/components/searchList';



const ModelSelect = ({ models, navigation, route: { params }, ...props}) => {
    const { _id } = params.brand;

    //State
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        //Load data 
        props.getModels(_id).then(({ error }) => error || setLoaded(true))
    }, [])

    function onSelect(item) {
        props.addBike(item);
        navigation.pop(2);
        navigation.navigate('Home');
    }

    return(
        <ScreenContainer style={styles.container}>
            <SearchList
                list={loaded ? models.map(a => a.name) : []}
                onSelect={onSelect}
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
        models: state.general.models,
    }
}

export default connect(mapObjectToProps, ActionCreators)(ModelSelect);