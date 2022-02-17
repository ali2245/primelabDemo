import React from 'react'
import {
    StyleSheet, Text, Pressable
} from 'react-native'
import { Colors } from '../Resources';
import Icon from 'react-native-vector-icons/Ionicons'

function Button({ isDark, title, onPress, isActive, style, textStyle }) {
    const styles = Styles(isDark);
    const colors = Colors(isDark);

    return (
        <Pressable style={[styles.container, isActive && styles.activeBtn, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            <Icon name={'chevron-forward-outline'} color={colors.white} size={20} />
        </Pressable>
    )
}

export default Button

const Styles = (isDark) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 25,
            height: 45,
            borderRadius: 4,
            backgroundColor: colors.buttonInactive,
            marginTop: 10
        },
        activeBtn: {
            backgroundColor: colors.buttonActive,
        },
        buttonText: {
            color: colors.white,
            marginRight: 5,
            fontWeight: '600'
        }
    })
}