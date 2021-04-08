import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


const ValidationTextInput = (
    { isError, type, value, onChangeText, required, errorMessage, label, placeholder, secureTextEntry, onValidChange }
) => {
    const [active, setActive] = useState(false)
    const [error, _setError] = useState(false);
    const [val, setVal] = [value, onChangeText] || useState('');

    function setError(val) {
        _setError(val)
    }

    let regex = /^[a-zA-Z0-9]+$/;
    switch(type){
        case "email":
            regex= /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            break;
        case "password":
            regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            break;
        case "phone":
            regex= /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
            break;
        case "username":
            regex = /[a-zA-Z0-9._]{4,}$/
            break;
    }

    const _isError = isError || ((val) => {
        return (required || val !== "") && !regex.test(val)
    })

    useEffect(() => {
        if((required && !active) || !required) setActive(val.length > 0)
    }, [val])

    useEffect(() => {
        setError(_isError(val))
    })

    useEffect(() => {
        onValidChange(!error)
    }, [error])
    //(active && !error) || (!required && !active


    return (
        <View style={styles.container}>
            {label ? 
                <View style={styles.labelView}>
                    <Text style={styles.labelText}>{label}</Text>
                </View>
            : null}
            <View style={[styles.view, active && !error && styles.success, active && error && styles.error]}>
                <TextInput 
                    value={val}
                    onChangeText={setVal}
                    style={[styles.text]}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                />
            </View>
            {errorMessage && active && error ?   
                <View style={styles.errorMessageView}>
                    <Text style={styles.errorMessageText}>{errorMessage}</Text>
                </View>
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "75%",
        height: 80
    }, 
    view: {
        width: "100%",
        height: 50,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        borderColor: "black"
    },
    text: {
        flex: 1,
        height: 50,
        padding: 5,
    },
    error: {
        borderColor: 'red'
    },
    success: {
        borderColor: 'green'
    },
    errorMessageView: {
        height: 20,
        padding: 5
    },
    errorMessageText: {
        color: 'red'
    }
});

export default ValidationTextInput;