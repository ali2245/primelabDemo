import React, { useState } from 'react'
import {
    View, StyleSheet, TextInput, Text
} from 'react-native'
import { Colors } from '../Resources';

function Input({ isDark, value, onChangeText, placeholder, label, labelStyle }) {
    const [isFocused, setFocused] = useState(false)
    const styles = Styles(isDark);
    return (
        <View style={styles.container}>
            {!!label && <Text style={[styles.labelText, labelStyle]}>{label}</Text>}
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={[styles.input, isFocused && styles.focusedBorder]}
                autoCapitalize={'none'}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </View>
    )
}

export default Input

const Styles = (isDark) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            width: '100%',
            paddingTop: 15
        },
        input: {
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: colors.line_grey,
            height: 45,
            backgroundColor: colors.inputBackground,
            borderRadius: 4
        },
        labelText: {
            fontSize: 12,
            fontWeight: '400',
            color: '#666',
            marginBottom: 8
        },
        focusedBorder: {
            borderColor: colors.buttonActive,
        }
    })
}