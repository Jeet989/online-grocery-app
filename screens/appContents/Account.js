import React from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Right from 'react-native-vector-icons/FontAwesome'
import Profile from '../SvgImages/ProfilePic'
import Pencil from 'react-native-vector-icons/SimpleLineIcons'
import Order from '../SvgImages/OrdersIcon'
import Details from '../SvgImages/DetailsIcon'
import Delivery from '../SvgImages/DeliveryIcon';
import Payment from '../SvgImages/Payments';
import Promo from '../SvgImages/PromoCode'
import Notifications from '../SvgImages/NotificationIcon'
import Help from '../SvgImages/HelpIcon'
import About from '../SvgImages/AboutIcon'
import { Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LogoutIcon from 'react-native-vector-icons/MaterialIcons'


const Account = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }} automaticallyAdjustContentInsets showsVerticalScrollIndicator={false} >
                <View style={styles.mainHeader}>
                    <Profile style={{ marginLeft: wp(-3.5) }} />
                    <View style={styles.leftRow}>
                        <Text style={styles.userName}>Afsar Hossen <Pencil name="pencil" style={styles.pencil} size={14} /> </Text>
                        <Text style={{ color: '#7C7C7C' }}>lmshuvo97@gmail.com</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '6%', }} />

                <View style={{ flex: 1 }}>
                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                            <Image
                                source={require('../../assests/orders.png')}
                                style={{ ...styles.icon }}
                            />
                            <Text style={{ ...styles.placeholder }}>Orders</Text>
                            <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '6%', }} />

                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                            <Image
                                source={require('../../assests/details.png')}
                                style={{ ...styles.icon, marginTop: '6%' }}
                            />
                            <Text style={{ ...styles.placeholder, textAlignVertical: 'center' }}>My Details</Text>
                            <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '6%', }} />

                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                            <Image
                                source={require('../../assests/delivery.png')}
                                style={{ ...styles.icon }}
                            />
                            <Text style={{ ...styles.placeholder }}>Delivery Address</Text>
                            <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '6%', }} />

                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                            <Image
                                source={require('../../assests/payment.png')}
                                style={{ ...styles.icon, marginTop: '6.5%' }}
                            />
                            <Text style={{ ...styles.placeholder }}>Payment</Text>
                            <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '6%', }} />

                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                            <Image
                                source={require('../../assests/promo.png')}
                                style={{ ...styles.icon }}
                            />
                            <Text style={{ ...styles.placeholder }}>Promo Card</Text>
                            <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '6%', }} />

                    </View>


                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                            <Image
                                source={require('../../assests/bell.png')}
                                style={{ ...styles.icon, marginTop: '6%' }}
                            />
                            <Text style={{ ...styles.placeholder }}>Notifications</Text>
                            <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '6%', }} />

                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                            <Image
                                source={require('../../assests/help.png')}
                                style={{ ...styles.icon, marginTop: '5.5%' }}
                            />
                            <Text style={{ ...styles.placeholder }}>Help</Text>
                            <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '6%', }} />

                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                            <Image
                                source={require('../../assests/about.png')}
                                style={{ ...styles.icon, marginTop: '5.5%' }}
                            />
                            <Text style={{ ...styles.placeholder }}>About</Text>
                            <Right name="angle-right" size={28} style={{ ...styles.rightIcn }} />
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '6%', }} />

                    </View>

                    <View style={{ flex: 1, height: hp(9), marginTop: hp(1.5) }}>

                        <Button
                            mode="contained"
                            uppercase={false}
                            contentStyle={{ width: wp(100), height: hp(8), backgroundColor: "#e0e0e0" }}
                            labelStyle={{ fontSize: 20, color: '#53B175', textAlignVertical: 'center', marginLeft: wp(-3.5) }}
                            style={styles.butt}
                            onPress={() => console.log("button pressed")}
                        >
                            Log Out
                        </Button>

                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    butt: {
        borderRadius: 25,
        marginHorizontal: wp(3.2),
        marginTop: hp(.5),
    },
    placeholder: {
        marginTop: '5%',
        textAlignVertical: 'center',
        fontSize: 16,
        marginLeft: '5%',
        fontWeight: '700',
        padding: 0,
        margin: 0
    },
    icon: {
        marginTop: '5%',
        resizeMode: 'contain'
    },
    rightIcn: {
        top: '37%',
        position: 'absolute',
        right: '5%'
    },
    pencil: {
        color: '#53B175'
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 19.5
    },
    leftRow: {
        marginLeft: '4%'
    },
    mainHeader: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: '10%',
        marginLeft: '7%'
    },
    container: {
        paddingTop: Platform.OS === 'android' ? 27 : 0,
        flex: 1
    }
});

export default Account;
