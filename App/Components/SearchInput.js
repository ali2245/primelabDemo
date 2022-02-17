import React from 'react'
import {
    View, StyleSheet, TextInput, Text
} from 'react-native'
import { Colors } from '../Resources';
import Icon from 'react-native-vector-icons/Ionicons'

function SearchInput({ isDark, value, onChangeText, onPress, placeholder }) {
    const styles = Styles(isDark);
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name={'search-outline'} size={20} color />
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    style={styles.input}
                    autoCapitalize={'none'}
                />
            </View>
            <Text style={styles.labelText} onPress={onPress}>{'Import'}</Text>
        </View>
    )
}

export default SearchInput

const Styles = (isDark) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            width: '100%',
            paddingTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: colors.line_grey,
            backgroundColor: colors.inputBackground,
            borderRadius: 4,
            flex: 1
        },
        input: {
            flex: 1,
            marginLeft: 10
        },
        labelText: {
            fontSize: 14,
            fontWeight: '400',
            color: colors.buttonActive,
            marginLeft: 30
        },
    })
}