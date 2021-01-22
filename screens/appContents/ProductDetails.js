import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View, StyleSheet, Image, Platform, StatusBar, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
import Counter from 'react-native-counters';
import Dollar from 'react-native-vector-icons/Foundation'
import Star from 'react-native-vector-icons/Feather'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

const ProductDetails = ({ navigation, route }) => {
    const item = route.params;
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="lightgray" />

            <View style={styles.imgView}>
                <Image
                    source={item.values.img}
                    style={styles.mainImg}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: 15, marginTop: 10, flexDirection: 'column' }}>
                    <Text style={styles.contentMain}>{item.values.content}</Text>
                    <Icon name="hearto" size={23} style={styles.icon} />
                    <Text style={styles.subcontentMain}>{item.values.subContent}</Text>
                </View>

                <View style={{ marginHorizontal: 15, marginTop: 18, flexDirection: 'row', }}>
                    <Counter start={1} buttonStyle={{ borderColor: 'transparent' }} buttonTextStyle={{ color: 'green', fontSize: 25 }} countTextStyle={{ color: 'black', borderWidth: 1, borderRadius: 15, height: 40, textAlign: 'center', paddingTop: 9, width: 40 }} />
                    <Text style={styles.price}>
                        <Dollar name="dollar" size={31} />
                        {item.values.price}</Text>
                </View>

                <View style={styles.ruler}></View>

                <View style={{ marginHorizontal: 15, marginTop: 8 }}>
                    <Text style={styles.details}>Product Detail</Text>
                    <Text style={styles.contentDetail}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </Text>
                </View>

                <View style={styles.ruler}></View>

                <View style={{ marginHorizontal: 15, marginTop: 8, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', height: hp(5) }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, textAlignVertical: 'center' }}>Nutritions</Text>
                    <Text style={styles.grms}>100gr</Text>
                </View>

                <View style={{ ...styles.ruler, marginTop: '4%' }}></View>

                <View style={{ marginHorizontal: 15, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginTop: hp(2) }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Review</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Star name="star" size={20} color="#F3603F" />
                        <Star name="star" size={20} color="#F3603F" />
                        <Star name="star" size={20} color="#F3603F" />
                        <Star name="star" size={20} color="#F3603F" />
                        <Star name="star" size={20} color="#F3603F" />
                    </View>
                </View>

                <View style={{ ...styles.ruler, marginTop: hp(2.5) }}></View>
            </ScrollView>
            <View style={{ marginHorizontal: 15, marginTop: '10%', width: '100%' }}>
                <Button
                    mode="contained"
                    uppercase={false}
                    contentStyle={{ width: '100%', height: '135%', backgroundColor: "rgb(83, 177, 117)" }}
                    labelStyle={{ fontSize: 20, color: 'white', marginTop: '1%', top: '-3%' }}

                    style={styles.butt}
                    onPress={() => console.log("button pressed")}
                >
                    Add To Basket
                </Button>
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    grms: {
        alignContent: 'flex-end',
        textAlignVertical: 'center',
        backgroundColor: 'lightgray',
        marginHorizontal: 30,
        borderRadius: 15,
        width: '13%',
        height: '70%',
        marginTop: 8,
        alignSelf: 'center',
        padding: 4
    },
    contentDetail: {
        marginTop: 7,
        fontSize: 14.5,
        color: '#7C7C7C'
    },
    details: {
        fontWeight: 'bold',
        fontSize: 17
    },
    ruler: {
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
        marginHorizontal: 15,
        marginTop: '6%'
    },
    price: {
        fontSize: 25,
        marginLeft: '52%'
    },
    subcontentMain: {
        color: '#7C7C7C',
        marginTop: -5
    },
    icon: {
        alignSelf: 'flex-end',
        marginTop: -22
    },
    contentMain: {
        fontWeight: 'bold',
        fontSize: 20,
        flexDirection: 'row'
    },
    mainImg: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 40,
        resizeMode: 'contain'
    },
    imgView: {
        backgroundColor: 'lightgray',
        height: Dimensions.get('screen').height / 3,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,

    },
    container: {
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
    butt: {
        position: 'absolute',
        top: '83%',
        borderRadius: 12,
        width: '92%'

    },
});

export default ProductDetails;
