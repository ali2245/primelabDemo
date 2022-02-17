import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { radio, radioU } from '../Assets';
import { abbrev_name } from '../Utils/common';


export default Row = ({ image, title, subtitle, isSelected }) => {
    return (
        <View style={{ width: '100%', height: 60, marginTop: 12, alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
                {<View style={{ height: 44, width: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 22, backgroundColor: '#ccc' }}>
                    <Text>{abbrev_name(title)}</Text>
                </View>}
                {!!image && <Image source={image} style={{ height: 44, width: 44 }} />}
                <View style={{ marginLeft: 12 }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#2F80ED' }}>{title}</Text>
                    <Text style={{ marginTop: 6, fontSize: 14, fontWeight: '400' }}>{subtitle}</Text>
                </View>
            </View>
            <Pressable>
                <Image source={isSelected ? radio : radioU} />
            </Pressable>
        </View>
    )
}