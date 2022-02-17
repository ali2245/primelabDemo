import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Input, SwitchButton } from '../Components';
import { navigate } from '../Navigation/rootNavigation';
import { Colors } from '../Resources';
import { loginBG, logo } from '../Assets'

const Login = () => {
    const styles = Styles(false);
    const [tabActive, setTabActive] = useState(0);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const isDark = useSelector(state => state.app.colorScheme) == 'dark'
    const isValid = (tabActive == 0 && email) || (tabActive == 1 && phone);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer} >
                <Image source={loginBG} />
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <SwitchButton isDark={isDark} options={['Email', 'Phone']} selectedIndex={tabActive} onChange={(index) => setTabActive(index)} />
                {tabActive == 0 ?
                    <Input
                        isDark={isDark}
                        placeholder={'Email Address'}
                        value={email}
                        onChangeText={setEmail}
                    />
                    :
                    <Input
                        isDark={isDark}
                        placeholder={'Ex. (373) 378 8383'}
                        value={phone}
                        onChangeText={setPhone}
                    />
                }
                <Button isDark={isDark} title={'Get Started'} isActive={isValid} onPress={() => isValid && navigate('CreateNearAccount')} />
                <View style={styles.separator} />
                <Text>{'Already have Near Account?'}</Text>
                <Input
                    isDark={isDark}
                    placeholder={'walletName.near'}
                    value={name}
                    onChangeText={setName}
                />
                <Button isDark={isDark} title={'Login'} isActive={name} onPress={() => { }} />
                <Text style={styles.tcText}>{'By clicking continue you must agree to near labs \n'}<Text style={styles.linkText}>{'Terms and Conditions'}</Text>{' and '}<Text style={styles.linkText}>{'Privacy Policy'}</Text></Text>
            </View>
        </View>
    )
}

export default Login;

const Styles = (isDark) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background
        },
        topContainer: {
            flex: 0.45,
            backgroundColor: '#fdc61a'
        },
        bottomContainer: {
            flex: 0.55,
            paddingHorizontal: 18,
            paddingVertical: 20,
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        separator: {
            height: 1,
            backgroundColor: colors.line_grey,
            width: '90%',
            alignSelf: 'center',
            marginVertical: 30
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
        logo: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 10
        }
    })
}

