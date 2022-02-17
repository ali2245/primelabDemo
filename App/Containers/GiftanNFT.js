import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Pressable, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, LoadingSpinner, SearchInput, Row } from '../Components';
import { Colors } from '../Resources';
import Icon from 'react-native-vector-icons/Ionicons'
import { goBack, navigate } from '../Navigation/rootNavigation';
import AppActions from '../Redux/AppRedux';

const GiftanNFT = () => {
    const styles = Styles(false);
    const [searchText, setSearchText] = useState('');
    const isDark = useSelector(state => state.app.colorScheme) == 'dark'
    const isLoading = useSelector(state => state.app.isLoading)
    const users = useSelector(state => state.app.users);
    const [userArr, setUserArr] = useState([]);
    const dispatch = useDispatch();
    console.log({ users })

    useEffect(() => {
        dispatch(AppActions.getUsers());
    }, [])

    useEffect(() => {
        let arr = users.filter((v, i) => v?.name?.toLowerCase().includes(searchText?.toLocaleLowerCase()) || v?.username?.toLowerCase().includes(searchText?.toLocaleLowerCase()))
        setUserArr(arr);
    }, [users, searchText])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={isDark ? 'dark-content' : 'light-content'} />
            <View style={styles.modalContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitleText}>{'Gift an NFT'}</Text>
                    <Pressable style={styles.closeButton} onPress={() => goBack()}>
                        <Icon name={'close-circle-outline'} size={24} color={'#666'} />
                    </Pressable>
                </View>
                <SearchInput isDark={isDark} placeholder={'Search People'} onChangeText={setSearchText} value={searchText} />
                <View style={styles.listContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={userArr}
                        keyExtractor={(item, index) => `${item.id}`}
                        renderItem={({ item, index }) => (
                            <Row
                                title={item.name}
                                subtitle={`@${item.username}`}
                                isSelected={true}
                            />
                        )}
                    />
                </View>
                <Button isDark={isDark} title={'Send Gift'} isActive={true} onPress={() => navigate('Dashboard')} />
                <Button isDark={isDark} title={'Share App'} isActive={true} textStyle={styles.shareAppBtnText} style={styles.shareAppBtn} />
            </View>
            <LoadingSpinner isLoading={isLoading} />
        </View>
    )
}

export default GiftanNFT;

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
        closeButton: {
            position: 'absolute',
            top: 13,
            right: 0,
        },
        shareAppBtn: {
            backgroundColor: colors.transparent
        },
        shareAppBtnText: {
            color: colors.buttonActive
        },
        listContainer: {
            flex: 1,
            paddingVertical: 20
        }
    })
}

