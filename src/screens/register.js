import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScreenContainer } from "react-native-screens"
import colors from '../../res/colors';

import ValidationTextInput from '../library/components/validationTextInput';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [form, setForm] = useState({
        username: false,
        password: false,
        repeatPassword: false,
        email: false,
        phone: true
    })

    function sendEnabled () {
        for(let o in form)
          if(!form[o]) return false;

        return true; 
    }

    function onValidChange (prop, val) {
        setForm({ 
            ...form, [prop]: val 
        })
    }

    function register () {
        console.log("register")
    }

    return (
        <ScreenContainer style={styles.container}>
            <ValidationTextInput 
                placeholder="Username *"
                value={username}
                onChangeText={setUsername}
                type="username"
                errorMessage="Invalid username"
                onValidChange={val => onValidChange("username", val)}
                required
            />
            <ValidationTextInput 
                placeholder="Email *"
                value={email}
                onChangeText={setEmail}
                type="email"
                onValidChange={val => onValidChange("email", val)}
                required
            />
            <ValidationTextInput 
                placeholder="Password *"
                value={password}
                onChangeText={setPassword}
                type="password"
                errorMessage="Password must be at least 8 characters"
                onValidChange={val => onValidChange("password", val)}
                required secureTextEntry
            />
            <ValidationTextInput 
                placeholder="Repeat password *"
                value={repeatPassword}
                onChangeText={setRepeatPassword}
                type="password"
                isError={(val) => val !== password}
                errorMessage="Passwords don't match!"
                onValidChange={val => onValidChange("repeatPassword", val)}
                required secureTextEntry
            />
            <ValidationTextInput 
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                onValidChange={val => onValidChange("phone", val)}
                type="phone"
            />
            <TouchableOpacity 
                style={[styles.registerBtn, !sendEnabled() && styles.disabledButton]} 
                onPress={register}
                disabled={!sendEnabled()}
                >
                <Text style={styles.registerText}>{strings.registerLabel}</Text>
            </TouchableOpacity>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginVertical: 30
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
    },
    registerBtn: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor: colors.secondaryColor,
    },
    disabledButton: {
        backgroundColor: colors.disabledColor
    }
})

export default Register;