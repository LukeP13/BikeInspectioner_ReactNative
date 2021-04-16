import React from 'react';
import { StyleSheet, } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import SearchList from '../../library/components/searchList';



const ModelSelect = ({ models, navigation }) => {
    const LIST = ["z800", "ninja 300", "er6-f"]
    return(
        <ScreenContainer style={styles.container}>
            <SearchList
                list={LIST || models.map(a => a.name)}
                onSelect={() => {}}
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

export default connect(mapObjectToProps)(ModelSelect);