import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SearchBar } from "react-native-elements"
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import colors from "../../../res/colors";


const SearchList = ({ list, onSelect }) => {
    const [search, setSearch] = useState('');
    const [filteredList, setFilteredList] = useState(list);

    function filterList (list, search) {
        return list.filter(item => item.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(() => {
        setFilteredList(filterList(list, search))
    }, [search, list])

    return (
        <View style={styles.container}>
            <SearchBar 
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.searchInputContainer}
                inputStyle={styles.searchInput}
                onChangeText={setSearch}
                value={search}
                lightTheme
            />
            <View 
                style={styles.listContainer}
            >
                {filteredList.map(item => (
                    <TouchableNativeFeedback
                        key={item}
                        style={styles.itemContainer} 
                        onPress={() => onSelect(item)}
                    >
                        <Text style={styles.itemText}>{item}</Text>
                    </TouchableNativeFeedback>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    searchContainer: {
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: colors.transparent,
        borderBottomWidth: 0,
        paddingTop: 15,
        marginBottom: 5,
        borderTopWidth: 0
    },
    searchInputContainer: {
        backgroundColor: colors.white,
        height: 40,
        elevation: 1
    },
    searchInput: {
        fontSize: 14,
        color: colors.black
    },
    listContainer: {
        width: "90%",
        marginBottom: 25,
        backgroundColor: colors.white,
        borderRadius: 5,
        paddingTop: 5,
        flex: 1,
        justifyContent: "flex-start",
        elevation: 1,
    },
    itemContainer: {
        height: 35,
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 15,
        marginBottom: 0,
        margin: 0,
    },
    itemText: {
        textTransform: 'uppercase',
        fontSize: 16,
        margin: 0
    },
})

export default SearchList;