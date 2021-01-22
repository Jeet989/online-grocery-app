import React, { useState } from 'react';
import { FlatList, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import Icons from 'react-native-vector-icons/Foundation'
import Counter from 'react-native-counters';
import { Button } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Cancel from '../SvgImages/Cancel'
import { BlurView } from '@react-native-community/blur';
import Right from 'react-native-vector-icons/FontAwesome'
import CancelCart from '../SvgImages/CancelCart'
import CorrectOrder from '../SvgImages/CorrectOrder'
import { ScrollView } from 'react-native-gesture-handler';
import FailOrder from '../SvgImages/FailOrder'

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

const Cart = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [correctOrder, setCorrectOrder] = useState(false);
    const [failOrder, setFailOrder] = useState(false)

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

            <Modal
                style={{ margin: 0 }}
                animationType="slide"
                visible={failOrder}
                transparent
                onRequestClose={() => {
                    setFailOrder(!failOrder)
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={{ backgroundColor: 'rgba(105,105,105,.5)', height: hp(100) }}>
                    <View style={{ backgroundColor: 'white', position: 'absolute', marginVertical: hp(20), height: hp(70), marginHorizontal: wp(7), width: wp(86), borderRadius: 28 }}>
                        <CancelCart style={{ marginLeft: wp(5.5), marginTop: hp(3), }} onPress={() => console.log("jeet")} />
                        <FailOrder style={{ alignSelf: 'center', }} />
                        <Text style={{ fontWeight: 'bold', fontSize: hp(2.6), textAlign: 'center', marginTop: hp(1) }}>Oops! Order Failed</Text>
                        <Text style={{ color: '#7C7C7C', textAlign: 'center', marginTop: hp(2) }}>Something went terribly wrong.</Text>

                        <Button
                            mode="contained"
                            uppercase={false}
                            contentStyle={{ width: '100%', height: '115%', backgroundColor: "rgb(83, 177, 117)" }}
                            labelStyle={{ fontSize: 20, color: 'white', top: '-1.5%' }}

                            style={styles.butt5}
                            onPress={() => console.log('pressed')}
                        >
                            Please Try Again
                    </Button>

                        <Button
                            mode="text"
                            uppercase={false}
                            labelStyle={{ fontSize: 20, color: 'black', top: '-1.5%' }}
                            contentStyle={{ width: '100%', height: '115%', }}
                            style={styles.butt6}
                            onPress={() => {
                                setFailOrder(!failOrder)
                                navigation.navigate("Home")

                            }}
                        >
                            Back to Home
                    </Button>
                    </View>
                </View>
            </Modal>

            <Modal
                style={{ margin: 0 }}
                animationType="slide"
                visible={correctOrder}
                onRequestClose={() => {
                    setCorrectOrder(!correctOrder)
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={{ flex: 1, display: 'flex' }}>

                    <Image
                        source={require('../../assests/headerCorrection.png')}
                        style={{ height: hp(50), width: wp(100), position: 'absolute', }}
                    />


                    <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', }}>

                        <Text style={{ textAlign: 'center', marginTop: hp(48), fontSize: wp(5), fontWeight: 'bold', marginHorizontal: wp(15) }}>Your Order has been accepted</Text>

                        <Text style={{ textAlign: 'center', marginTop: hp(2), color: '#7C7C7C', letterSpacing: 1, marginHorizontal: wp(13) }}>Your items has been placed and is on it's way to being processed</Text>

                    </View>



                    <ImageBackground
                        source={require('../../assests/footer.png')}
                        style={{ height: hp(50), width: wp(100), position: 'absolute', marginTop: hp(62) }}
                    />
                    <CorrectOrder height={hp(60)} width={wp(60)} style={{ marginTop: hp(1), marginLeft: wp(16) }} />



                    <Button
                        mode="contained"
                        uppercase={false}
                        contentStyle={{ width: '100%', height: '115%', backgroundColor: "rgb(83, 177, 117)" }}
                        labelStyle={{ fontSize: 20, color: 'white', top: '-1.5%' }}

                        style={styles.butt3}
                        onPress={() => console.log('pressed')}
                    >
                        Track Order
                    </Button>

                    <Button
                        mode="text"
                        uppercase={false}
                        labelStyle={{ fontSize: 20, color: 'black', top: '-1.5%' }}
                        contentStyle={{ width: '100%', height: '115%', }}
                        style={styles.butt4}
                        onPress={() => {
                            setCorrectOrder(!correctOrder)
                            setModalVisible(!modalVisible)
                            navigation.navigate("Home")
                        }}
                    >
                        Back to Home
                    </Button>
                </View>

            </Modal>

            <Modal
                style={{ margin: 0 }}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}

            >
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            height: hp(100),
                            marginTop: 'auto',
                            backgroundColor: 'white'
                        }}>
                        <BlurView
                            style={styles.abs}
                            blurType="materialLight"
                            blurAmount={1}
                            reducedTransparencyFallbackColor={"white"}
                        />
                        <View style={styles.footer}>

                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.headerText}>Checkout</Text>
                                <CancelCart style={{ marginLeft: wp(56), marginTop: hp(3.8), }} onPress={() => setModalVisible(!modalVisible)} />
                            </View>

                            <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: hp(2) }} />

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#7C7C7C', marginLeft: wp(5.5), marginVertical: hp(2), fontSize: hp(2.3) }}>Delivery</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: wp(30), marginVertical: hp(2.3), fontSize: hp(2.1), }}>Select Method</Text>
                                <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                            </View>

                            <View style={{ borderWidth: 1, borderColor: '#E2E2E2', }} />

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#7C7C7C', marginLeft: wp(5.5), marginVertical: hp(2.3), fontSize: hp(2.1) }}>Payment</Text>
                                <Image
                                    source={require('../../assests/card.png')}
                                    style={{ height: hp(3), width: wp(6), resizeMode: 'contain', marginVertical: hp(2.4), marginLeft: wp(55.5) }}
                                />
                                <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                            </View>

                            <View style={{ borderWidth: 1, borderColor: '#E2E2E2', }} />

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#7C7C7C', marginLeft: wp(5.5), marginVertical: hp(2.3), fontSize: hp(2) }}>Promo Code</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: wp(25), marginVertical: hp(2.3), fontSize: hp(2.1), }}>Pick Discount</Text>
                                <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                            </View>

                            <View style={{ borderWidth: 1, borderColor: '#E2E2E2', }} />

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#7C7C7C', marginLeft: wp(5.5), marginVertical: hp(2.3), fontSize: hp(2) }}>Total Cost</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: wp(44.3), marginVertical: hp(2.3), fontSize: hp(2.1) }}>$13.97</Text>
                                <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                            </View>

                            <View style={{ borderWidth: 1, borderColor: '#E2E2E2', }} />

                            <View>
                                <Text style={{ marginLeft: wp(5.5), fontSize: wp(3.5), color: '#7C7C7C', marginTop: hp(1) }}>By placing an order you agree to our <Text style={{ fontWeight: 'bold', color: 'black' }}>Terms & Conditions</Text></Text>
                            </View>

                            <View>
                                <Button
                                    mode="contained"
                                    uppercase={false}
                                    contentStyle={{ width: '100%', height: '115%', backgroundColor: "rgb(83, 177, 117)" }}
                                    labelStyle={{ fontSize: 20, color: 'white', top: '-1.5%' }}

                                    style={styles.butt2}
                                    onPress={() => {
                                        const val = Math.random()
                                        if (val >= .5) {
                                            setCorrectOrder(true)
                                        }
                                        else {
                                            setModalVisible(!modalVisible)
                                            setFailOrder(true)
                                        }

                                    }}
                                >
                                    Place Order
                                </Button>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>

            <View>
                <Button
                    mode="contained"
                    uppercase={false}
                    contentStyle={{ width: '100%', height: '115%', backgroundColor: "rgb(83, 177, 117)" }}
                    labelStyle={{ fontSize: 20, color: 'white', top: '-1.5%' }}

                    style={styles.butt}
                    onPress={() => setModalVisible(true)}
                >
                    Go to Checkout
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    butt6: {
        position: 'absolute',
        top: hp(61),
        borderRadius: 12,
        width: wp(78.5),
        marginHorizontal: 15

    },
    butt5: {
        position: 'absolute',
        top: hp(53),
        borderRadius: 12,
        width: wp(78.5),
        marginHorizontal: 15

    },
    butt4: {
        position: 'absolute',
        top: hp(87),
        borderRadius: 12,
        width: wp(93),
        marginHorizontal: 15

    },
    butt3: {
        position: 'absolute',
        top: hp(80),
        borderRadius: 12,
        width: wp(93),
        marginHorizontal: 15

    },
    butt2: {
        position: 'absolute',
        top: hp(2),
        borderRadius: 12,
        width: wp(93),
        marginHorizontal: 15

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: hp(3),
        marginLeft: wp(5.5),
        marginTop: hp(2)
    },
    rightIcn: {
        top: hp(2.2),
        position: 'absolute',
        right: '5%'
    },
    footer: {
        height: hp(60),
        marginTop: 'auto',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    abs: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
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
