import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Coke from '../SvgImages/Coke';
import Diet from '../SvgImages/DietCoke'
import Icons from 'react-native-vector-icons/Foundation'
import Right from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const data = [
    {
        img: <Coke />,
        content: 'Coke Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '1',
    },
    {
        img: <Diet />,
        content: 'Diet Coke Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '2',
    },
    {
        img: <Coke />,
        content: 'Coke Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '3',
    },
    {
        img: <Diet />,
        content: 'Diet Coke Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '4',
    },
    {
        img: <Coke />,
        content: 'Coke Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '5',
    },
    {
        img: <Diet />,
        content: 'Diet Coke Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '6',
    },
    {
        img: <Coke />,
        content: 'Coke Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '7',
    },
    {
        img: <Diet />,
        content: 'Diet Coke Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '8',
    }
]

const Favourite = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor={'transparent'} />
            <View style={{ marginHorizontal: 15 }}>
                <Text style={styles.fav}>Favourite</Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '8.5%' }} />

            <View style={{ flex: 1, marginHorizontal: wp(3), marginBottom: hp(7.5) }}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <View style={{ flexDirection: "row", marginTop: '3%', }}>
                                    <Text>{item.img}</Text>
                                    <View style={{ marginHorizontal: 30, alignSelf: 'center' }}>
                                        <Text style={styles.content}>{item.content}</Text>
                                        <Text style={styles.sub}>{item.subContent}</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', position: 'absolute', right: '7%', top: '36%' }}>
                                    <Icons name="dollar" size={28} />
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                                <Right name="angle-right" size={28} style={styles.rightIcn} />
                                <View style={{ borderWidth: 1, borderColor: '#E2E2E2', marginTop: '5%', }} />
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
                    Add All To Cart
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    butt: {
        position: 'absolute',
        top: hp(-7),
        borderRadius: 12,
        width: wp(93),
        marginHorizontal: 15

    },
    rightIcn: {
        top: '37%',
        position: 'absolute',
        right: '1%'
    },
    price: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    sub: {
        color: '#7C7C7C'
    },
    content: {
        fontWeight: "bold",
        fontSize: 18
    },
    fav: {
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: '3%'
    },
    container: {
        paddingTop: Platform.OS === 'android' ? 28 : 0,
        flex: 1,
    }
});

export default Favourite;
