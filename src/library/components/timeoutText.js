import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



const TimeoutText = ({ value, timeout, viewStyle, textStyle }) => {
    const _timeout = timeout || 2000;
    const [text, setText] = useState('');
    
    useEffect(() => {
        setText(value);
        setTimeout(() => setText(''), _timeout);
    }, [value])

    return(
        <View style={[styles.view, viewStyle]}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 30,
        marginBottom: 20
    },
    text: {
        color: 'red',
    },
})

export default TimeoutText;