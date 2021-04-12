import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../../res/colors";


export const Autocomplete = ({value, onChangeText, data, searchBy, filterData, getValue}) => {
    const [filteredData, setFilteredData] = useState(data);

    const _getValue = getValue || ((v) => searchBy ? v[searchBy] : v);
    const _filterData = filterData 
    || ((data, value) => data.filter(o => _getValue(o).toLowerCase().includes(value.toLowerCase())))
    
    
    //Filter Data
    useEffect(() => {
        setFilteredData(_filterData(data, value))
    }, [data, value])

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            <View style={styles.listContainer}>
                {filteredData.map(o => (
                    <View style={styles.listItem}>
                        <Text>{_getValue(o)}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        maxHeight: 200,
        flex: 1
    },
    input: {
        height: 40,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    listContainer: {
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 4,

        maxHeight: 400,
    }
})

export default Autocomplete;