import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { userIcon, arrowIcon, backgroundIcon, illustration1Icon, illustrationIcon, rightArrowIcon } from '../Assets'

const Dashboard = () => {
    const data = [
        {
            "type": "Digital Art",
            "title": "Vecotry Illustration",
            "subtitle": "#17372",
            "img": illustration1Icon
        },
        {
            "type": "Digital Art",
            "title": "Nature Illustration",
            "subtitle": "#3783",
            "img": illustrationIcon
        },
    ]

    const transactionData = [
        {
            "img": arrowIcon,
            "title": '#17372',
            "subtitle": 'Sent to michael.near',
            "days": '3 days ago'
        },
        {
            "img": arrowIcon,
            "title": '#13893',
            "subtitle": 'Recieved from 0x64..904',
            "days": '3 days ago'
        },
    ]
    const renderItems = (item) => {
        return (
            <View style={{ width: 230, marginTop: 12, marginRight: 16, borderRadius: 10, overflow: 'hidden', backgroundColor: 'white' }}>
                <Image source={item.img} style={{ height: 140, width: '100%' }} />
                <Text style={{ marginHorizontal: 15, fontSize: 16, fontWeight: '400', marginTop: 12 }}>{item.title}</Text>
                <Text style={{ marginHorizontal: 15, fontSize: 14, fontWeight: '400', marginTop: 8, marginBottom: 12, color: '#808080' }}>{item.subtitle}</Text>
            </View>
        )
    }

    const RenderTransactionItem = ({ item }) => {
        return (
            <View style={{ width: '100%', height: 60, marginTop: 12, alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={item.img} style={{ height: 44, width: 44 }} />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#2F80ED' }}>{item.title}</Text>
                        <Text style={{ marginTop: 6, fontSize: 14, fontWeight: '400' }}>{item.subtitle}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 13, fontWeight: '400', color: '#808080' }}>{item.days}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 90 }}>
                <View style={styles.container}>
                    <View style={styles.userRow}>
                        <Image source={userIcon} style={styles.userIcon} />
                        <Text style={styles.userName}>{'john.near'}</Text>
                    </View>
                    <View style={styles.createNFTColumn}>
                        <View>
                            <Text style={styles.startCreatingNFT}>{'Start Creating your NFTs Today'}</Text>
                            <TouchableOpacity style={styles.touchableRow}>
                                <Text style={styles.createNFT}>{'Create an NFT'}</Text>
                                <Image source={rightArrowIcon} style={styles.rightArrowImg} />
                            </TouchableOpacity>
                        </View>
                        <Image source={backgroundIcon} style={styles.backgroundImg} resizeMode={'contain'} />
                    </View>

                    <View style={styles.flatlistContainer}>
                        <View style={styles.flatlistHeader}>
                            <Text style={styles.header}>{'My NFTs'}</Text>
                            <Text style={styles.seeAll}>{'See All'}</Text>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => {
                                return renderItems(item);
                            }}
                            keyExtractor={(item, index) => `row-${index}`}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.transactionContainer}>
                        <View style={styles.flatlistHeader}>
                            <Text style={styles.header}>{'Recent Transactions'}</Text>
                            <Text style={styles.seeAll}>{'See All'}</Text>
                        </View>
                        {
                            transactionData.map((v, i) => {
                                return <RenderTransactionItem item={v} />
                            })
                        }

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    userIcon: {
        height: 20,
        width: 20,
        marginLeft: 10
    },
    backgroundImg: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: 180,
        height: 130,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 138,
        height: 42,
        marginTop: 20,
        borderRadius: 21,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    userName: {
        marginLeft: 12,
        marginRight: 4
    },
    createNFTColumn: {
        marginTop: 20,
        backgroundColor: 'white',
        height: 184,
        width: '100%',
        borderRadius: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden'
    },
    flatlistContainer: {
        width: '100%',
        marginTop: 24
    },
    createNFT: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500'
    },
    touchableRow: {
        marginTop: 16,
        backgroundColor: '#2F80ED',
        width: 177,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    seeAll: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#2F80ED'
    },
    flatlistHeader: {
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12
    },
    rightArrowImg: {
        height: 12,
        width: 7,
        marginLeft: 12
    },
    startCreatingNFT: {
        fontSize: 27,
        fontWeight: '400',
        width: 180,
        marginTop: 16
    },
    transactionContainer: {
        marginTop: 32,
        width: '100%',
        height: 122
    }
})
export default Dashboard;