import React from 'react'
import {
    View, StyleSheet, Text, Pressable
} from 'react-native';

function SwitchButton({ isDark, options, selectedIndex, onChange }) {
    const styles = Styles(isDark);
    return (
        <View style={styles.container}>
            {options?.map((v, i) => (
                <Pressable key={`switch-${v}`} style={[styles.buttonContainer, selectedIndex == i && styles.selectedButton]} onPress={() => onChange(i)}>
                    <Text style={[styles.buttonText, selectedIndex == i && styles.selectedButtonText]}>{v}</Text>
                </Pressable>
            ))
            }
        </View>
    )
}

export default SwitchButton

const Styles = (isDark) => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonContainer: {
            paddingHorizontal: 20,
            paddingVertical: 8
        },
        selectedButton: {
            backgroundColor: '#ccc',
            borderRadius: 4
        },
        buttonText: {
            fontSize: 14,
            color: '#666'
        },
        selectedButtonText: {
            color: '#000'
        }
    })
}