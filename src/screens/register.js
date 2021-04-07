import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenContainer } from "react-native-screens"

import TextInput from "react-native-input-validator";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.inputView}>
                <TextInput 
                    value={username}
                    onChangeText={setUsername}
                    type="alphanumeric"
                    style={styles.textInput}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    type="alphanumeric"
                    style={styles.textInput}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    value={repeatPassword}
                    onChangeText={setRepeatPassword}
                    type="alphanumeric"
                    style={styles.textInput}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    type="email"
                    style={styles.textInput}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    value={phone}
                    onChangeText={setPhone}
                    type="phone"
                    style={styles.textInput}
                />
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    textInput: {
        height: 50,
        flex: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 2,
        paddingHorizontal: 10
    },
    inputView: {
        width: "75%",
        height: 55,
    }
})

export default Register;