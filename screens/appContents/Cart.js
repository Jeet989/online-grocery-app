import React from 'react';
import { FlatList, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Foundation'
import Counter from 'react-native-counters';
import { Button } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Cancel from '../SvgImages/Cancel'

const grocery = [
    {
        img: require('../../assests/banana.png'),
        content: 'Organic Banana',
        subContent: '7pcs, Priceg',
        price: '4.99',
        id: '1',
    },
    {
        img: require('../../assests/apple.png'),
        content: 'Red Apple',
        subContent: '1kg, Priceg',
        price: '4.99',
        id: '2',
    },
    {
        img: require('../../assests/pepper.png'),
        content: 'Pepper',
        subContent: '1pkg, Priceg',
        price: '4.99',
        id: '3',
    },
    {
        img: require('../../assests/ginger.png'),
        content: 'Ginger',
        subContent: '1kg, Priceg',
        price: '4.99',
        id: '4',
    },
    {
        img: require('../../assests/meat.png'),
        content: 'Meat',
        subContent: '1pkg, Priceg',
        price: '4.99',
        id: '5',
    },
    {
        img: require('../../assests/chicken.png'),
        content: 'Chicken',
        subContent: '1kg, Priceg',
        price: '4.99',
        id: '6',
    }

]

const Cart = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor='transparent' />
            <Text style={styles.header}>My Cart</Text>
            <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '8.5%' }} />

            <View style={{ marginHorizontal: 15, marginBottom: hp(17.5) }}>
                <FlatList
                    data={grocery}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <View style={{ flexDirection: "row", marginTop: '7%' }}>
                                    <Image
                                        source={item.img}
                                        style={{ width: 100, height: 100, resizeMode: 'contain' }}
                                    />
                                    <View style={{ marginHorizontal: 30 }}>
                                        <Text style={styles.content}>{item.content}</Text>
                                        <Text style={styles.sub}>{item.subContent}</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: '24%', position: 'absolute', marginLeft: '30%' }}>
                                    <Counter start={1} min={1} max={9} buttonStyle={{ borderColor: '#E2E2E2', borderRadius: 15, marginHorizontal: 10, height: 40, alignSelf: 'center', width: 40 }} buttonTextStyle={{ color: 'green', fontSize: 25 }} countTextStyle={{ color: 'black', height: 40, textAlign: 'center', paddingTop: 9, width: 40 }} />
                                </View>
                                <View style={{ flexDirection: 'row', position: 'absolute', margin: 0, padding: 0, right: '1%', top: '58%' }}>
                                    <Icons name="dollar" size={28} />
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', position: 'absolute', margin: 0, padding: 0, right: '1%', top: '21%' }}>
                                    <Cancel />
                                </View>
                                
                                <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '10%', }} />
                            </View>
                        )
                    }}
                />
            </View>
            <View>
                <Button
                    mode="contained"
                    uppercase={false}
                    contentStyle={{ width: '100%', height: '115%', backgroundColor: "rgb(83, 177, 117)" }}
                    labelStyle={{ fontSize: 20, color: 'white', top: '-1.5%' }}

                    style={styles.butt}
                    onPress={() => console.log("button pressed")}
                >
                    Go to Checkout
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    butt: {
        position: 'absolute',
        top: hp(-17),
        borderRadius: 12,
        width: wp(93),
        marginHorizontal: 15

    },
    price: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    sub: {
        color: '#7C7C7C'
    },
    content: {
        fontWeight: "bold",
        fontSize: 18
    },
    header: {
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: '3%'
    },
    container: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        flex: 1,
        backgroundColor: 'white'
    },

});

export default Cart;
