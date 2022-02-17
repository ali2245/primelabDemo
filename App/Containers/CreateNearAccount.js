import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Input } from '../Components';
import { Colors } from '../Resources';
import Icon from 'react-native-vector-icons/Ionicons'
import { goBack, navigate } from '../Navigation/rootNavigation';

const CreateNearAccount = () => {
    const styles = Styles(false);
    const [walletid, setWalletID] = useState('');
    const [name, setName] = useState('');
    const isDark = useSelector(state => state.app.colorScheme) == 'dark'
    const isValid = walletid && name;

    return (
        <View style={styles.container}>
            <StatusBar barStyle={isDark ? 'dark-content' : 'light-content'} />
            <View style={styles.modalContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitleText}>{'Create NEAR Account'}</Text>
                    <Pressable style={styles.closeButton} onPress={() => goBack()}>
                        <Icon name={'close-circle-outline'} size={24} color={'#666'} />
                    </Pressable>
                </View>
                <Text style={styles.headerText}>
                    {'Enter an Account ID to use with your Near Account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.'}
                </Text>
                <Input
                    isDark={isDark}
                    label={'FULL NAME'}
                    placeholder={'FULL NAME'}
                    value={name}
                    onChangeText={setName}
                />
                <Input
                    isDark={isDark}
                    label={'WALLET ID'}
                    placeholder={'yourname.near'}
                    value={walletid}
                    onChangeText={setWalletID}
                    labelStyle={styles.labelStyle}
                />
                <Button isDark={isDark} title={'Create an Account'} isActive={isValid} onPress={() => isValid && navigate('GiftanNFT')} style={[styles.btnStyle, isValid && styles.activeBtnStyle]} />
                <Text style={styles.tcText}>{'By creating a NEAR Account, you are agree to NEAR Wallet '}<Text style={styles.linkText}>{'Terms and Conditions'}</Text>{' and '}<Text style={styles.linkText}>{'Privacy Policy'}</Text></Text>
                <View style={styles.separator} />
                <Text style={styles.nearText}>{'Already have Near Account?'}</Text>
                <Button isDark={isDark} title={'Login with NEAR'} isActive={true} onPress={() => { }} />
            </View>
        </View>
    )
}

export default CreateNearAccount;

const Styles = (isDark) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.black
        },
        modalContainer: {
            marginTop: 50,
            flex: 1,
            backgroundColor: colors.background,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 18,
            paddingBottom: 20,
        },
        header: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
        },
        headerTitleText: {
            fontSize: 24,
            fontWeight: '700'
        },
        headerText: {
            color: '#666',
            fontSize: 14,
            fontWeight: '400',
            marginTop: 60,
            marginBottom: 20
        },
        closeButton: {
            position: 'absolute',
            top: 13,
            right: 0,
        },
        labelStyle: {
            color: colors.buttonActive
        },
        separator: {
            height: 1,
            backgroundColor: colors.line_grey,
            width: '90%',
            alignSelf: 'center',
            marginVertical: 30,

        },
        tcText: {
            fontSize: 14,
            fontWeight: '300',
            color: colors.black,
            textAlign: 'center',
            marginTop: 20
        },
        linkText: {
            color: colors.buttonActive
        },
        btnStyle: {
            marginTop: 30,
            marginBottom: 20,
        },
        activeBtnStyle: {
            backgroundColor: colors.black
        },
        nearText: {
            textAlign: 'center'
        }
    })
}

