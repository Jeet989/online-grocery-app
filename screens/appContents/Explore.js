import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Second from '../SvgImages/svg'
import First from '../SvgImages/First'
import Third from '../SvgImages/Third'
import Fourth from '../SvgImages/Fourth'
import Sixth from '../SvgImages/Sixth'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Foundation'
import Plus from 'react-native-vector-icons/Octicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const cat = [
    {
        component: <First />,
        placeholder: 'Fruits & Vegetables',
        backgroundColor: '#c1f4d5',
        id: '1',
    },
    {
        component: <Second />,
        placeholder: 'Cooking Oil & Ghee',
        backgroundColor: '#fce4cf',
        id: '2',
    },
    {
        component: <Third />,
        placeholder: 'Meat & Fish',
        backgroundColor: '#fcd7d1',
        id: '3',
    },
    {
        component: <Fourth />,
        placeholder: 'Bakery & Snacks',
        backgroundColor: '#ead5f2',
        id: '4',
    },
    {
        component: <Sixth />,
        placeholder: 'Beverages',
        backgroundColor: '#d2eaf7',
        id: '6',
    },
    {
        component: <First />,
        placeholder: 'Fruits & Vegetables',
        backgroundColor: '#c1f4d5',
        id: '7',
    },
    {
        component: <Second />,
        placeholder: 'Cooking Oil & Ghee',
        backgroundColor: '#fce4cf',
        id: '8',
    },
    {
        component: <Third />,
        placeholder: 'Meat & Fish',
        backgroundColor: '#fcd7d1',
        id: '9',
    },
]

const grocery = [
    {
        img: require('../../assests/cokeimg.png'),
        content: 'Diet Coke',
        subContent: '355ml, Price',
        price: '1.99',
        id: '1',
    },
    {
        img: require('../../assests/cokeimg.png'),
        content: 'Diet Coke',
        subContent: '325ml, Price',
        price: '1.50',
        id: '2',
    },
    {
        img: require('../../assests/cokeimg.png'),
        content: 'Diet Coke',
        subContent: '2L, Price',
        price: '15.99',
        id: '3',
    },
    {
        img: require('../../assests/cokeimg.png'),
        content: 'Diet Coke',
        subContent: '2L, Price',
        price: '15.99',
        id: '4',
    },
    {
        img: require('../../assests/cokeimg.png'),
        content: 'Diet Coke',
        subContent: '325ml, Price',
        price: '4.99',
        id: '5',
    },
    {
        img: require('../../assests/cokeimg.png'),
        content: 'Diet Coke',
        subContent: '325ml, Price',
        price: '4.99',
        id: '6',
    },
    {
        img: require('../../assests/cokeimg.png'),
        content: 'Diet Coke',
        subContent: '2L, Price',
        price: '15.99',
        id: '7',
    },
    {
        img: require('../../assests/cokeimg.png'),
        content: 'Diet Coke',
        subContent: '325ml, Price',
        price: '4.99',
        id: '8',
    },
    {
        img: require('../../assests/cokeimg.png'),
        content: 'Diet Coke',
        subContent: '325ml, Price',
        price: '4.99',
        id: '9',
    }

]

const Explore = ({ navigation }) => {
    const [searchInput, setSearchInput] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainHeader}>
                <Text style={styles.productsHeader}>Find Products</Text>
            </View>

            <View style={{ marginHorizontal: 15, marginTop: '5%' }}>
                <TextInput
                    placeholder="Search Egg"
                    left={<TextInput.Icon name={() => <Icon name="search" size={30} />} />}
                    style={styles.searchInput}
                    underlineColor='#fff'
                    theme={{ roundness: 18, colors: { text: 'black', primary: 'transparent' } }}
                    onChangeText={setSearchInput}
                />
            </View>
            {searchInput.toLowerCase() === 'egg' ?
                <View style={{ marginHorizontal: 15, marginTop: 10, marginBottom: '64%', }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        data={grocery}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.items}>
                                    <View style={styles.cardStyle}>
                                        <Image
                                            source={item.img}
                                            style={{ width: 48, height: 90, alignSelf: 'center', backgroundColor: 'transparent', marginTop: 10 }}

                                        />
                                        <View>

                                            <Text style={{ fontWeight: 'bold', fontSize: 16, marginHorizontal: 10 }}>{item.content}</Text>
                                            <Text style={{ color: '#7C7C7C', marginHorizontal: 10 }}>{item.subContent}</Text>

                                            <View style={{ flexDirection: 'row', marginTop: 40, marginHorizontal: 10 }}>
                                                <Icons name="dollar" size={28} />
                                                <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{item.price}</Text>

                                            </View>
                                            <TouchableOpacity onPress={() => console.log('dlfkndfl;knd')} style={{
                                                left: '60%',
                                                top: '-80%',
                                                borderRadius: 18,
                                                height: 60,
                                                width: 50,
                                                paddingLeft: 15,
                                                paddingTop: 4,
                                            }}>

                                                <Plus name="plus-small" size={45} color={'white'} style={styles.next} />
                                            </TouchableOpacity>
                                        </View>

                                    </View>


                                </View>
                            )
                        }}

                    />
                </View>
                :
                <View style={{ marginHorizontal: 15, marginTop: 10, marginBottom: '64%', }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cat}
                        numColumns={2}
                        keyExtractor={cat => cat.id}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ ...styles.svgContainer, borderColor: item.backgroundColor, backgroundColor: item.backgroundColor }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('catdetails', { header: item.placeholder })}>
                                        <Text style={styles.flatComponent}>{item.component}</Text>
                                        <Text style={styles.flatPlaceholder}>{item.placeholder}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    next: {
        backgroundColor: '#53B175',
        height: 50,
        width: 50,
        borderRadius: 18,
        paddingLeft: 15,
        paddingTop: 4,
        right: '41%',
        top: '8%'
    },
    cardStyle: {
        height: 250,
        width: 178,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 20,
    },
    items: {
        height: 250,
        marginBottom: 12
    },
    flatPlaceholder: {
        alignSelf: 'center',
        fontWeight: 'bold',

    },
    flatComponent: {
        alignSelf: 'center',
    },
    svgContainer: {
        justifyContent: 'center',
        marginRight: '10%',
        // height: 220,
        height: hp(27),
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 20,
        // width: '45%'
        width: wp(41.5)
    },
    searchInput: {
        borderRadius: 18
    },
    productsHeader: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    mainHeader: {
        alignItems: 'center',
        marginTop: '4%',
        marginHorizontal: 15
    },
    container: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        backgroundColor: 'white',
    },

});

export default Explore;
