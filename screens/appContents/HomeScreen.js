import React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, Image, ScrollView, Dimensions, FlatList, ImageBackground } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons'

import ContainerList from '../components/ContainerList';

const images = [
    require('../../assests/banner.png'),
    require('../../assests/banner.png'),
    require('../../assests/banner.png'),
    require('../../assests/banner.png'),
    require('../../assests/banner.png'),
    require('../../assests/banner.png'),
    require('../../assests/banner.png'),
    require('../../assests/banner.png')
]

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

const grocCat = [
    {
        img: require('../../assests/pulses.png'),
        content: 'Pulses',
        color: '#FEF2E4',
        id: '1',
    },
    {
        img: require('../../assests/rice.png'),
        content: 'Rice',
        color: '#E5F4EA',
        id: '2',
    },
    {
        img: require('../../assests/pulses.png'),
        content: 'Pulses',
        color: '#FEF2E4',
        id: '3',
    },
    {
        img: require('../../assests/rice.png'),
        content: 'Rice',
        color: '#E5F4EA',
        id: '4',
    },
    {
        img: require('../../assests/pulses.png'),
        content: 'Pulses',
        color: '#FEF2E4',
        id: '5',
    },
    {
        img: require('../../assests/rice.png'),
        content: 'Rice',
        color: '#E5F4EA',
        id: '6',
    }
]



const HomeScreen = ({ navigation }) => {
    // console.log(navigation)
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
                    <Image
                        source={require('../../assests/Group.png')}
                        style={{ height: 35, width: 30, alignSelf: 'center', marginTop: 20 }}
                    />
                    <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                        <Image
                            source={require('../../assests/location.png')}
                            style={{ height: 20, width: 17, marginTop: 10 }}
                        />
                        <Text style={{ marginTop: 10, fontSize: 16, color: '#4C4F4D' }}> Dhaka, Banasree</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            placeholder="Search Store"
                            left={<TextInput.Icon name={() => <Icon name="search" size={30} />} />}
                            style={styles.searchInput}
                            underlineColor='transparent'
                            theme={{ roundness: 30 }}
                        />
                    </View>

                    <View style={{ marginHorizontal: 15, }}>
                        <Carousel
                            data={images}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ marginTop: 10 }}>
                                        <Image
                                            source={item}
                                        />
                                    </View>
                                )
                            }}
                            sliderWidth={Dimensions.get('screen').width}
                            itemWidth={Dimensions.get('screen').width}
                        />
                    </View>

                    <View style={styles.offer}>
                        <Text style={styles.exclu}>Exclusive Offer</Text>
                        <Text style={styles.all}>See all</Text>
                    </View>

                    <View style={{ marginTop: 10, marginHorizontal: 15, }}>
                        <ContainerList
                            grocery={grocery}
                            navigation={navigation}
                        />
                    </View>

                    <View style={styles.offer}>
                        <Text style={styles.exclu}>Best Selling</Text>
                        <Text style={{ ...styles.all, left: '640%' }}>See all</Text>
                    </View>

                    <View style={{ marginTop: 10, marginHorizontal: 15, }}>
                        <ContainerList
                            grocery={grocery}
                            navigation={navigation}
                        />
                    </View>

                    <View style={styles.offer}>
                        <Text style={styles.exclu}>Groceries</Text>
                        <Text style={{ ...styles.all, left: '720%' }}>See all</Text>
                    </View>

                    <View style={{ marginHorizontal: 15, marginBottom: 12 }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            keyExtractor={item => item.id}
                            data={grocCat}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ ...styles.groc, backgroundColor: item.color }}>
                                        <ImageBackground
                                            source={item.img}
                                            style={{ width: 71, height: 71, alignSelf: "center", marginLeft: 13 }}
                                        />
                                        <Text style={styles.cont}>{item.content}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>

                    <View style={{ marginTop: 10, marginHorizontal: 15, }}>
                        <ContainerList
                            grocery={grocery}
                            navigation={navigation}
                        />
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    groc: {
        marginTop: 10,
        flexDirection: 'row',
        width: 280,
        height: 100,
        marginRight: 15,
        borderRadius: 20

    },
    cont: {
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
    },
    all: {
        fontSize: 16,
        color: '#53B175',
        marginTop: 5,
        left: '540%'
    },
    exclu: {
        fontSize: 20,
        fontWeight: '700',
    },
    offer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 5
    },
    searchInput: {
        marginHorizontal: 17,
        borderRadius: 30

    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        minHeight: Dimensions.get('screen').height,
        bottom: '6%'
    }
});
export default HomeScreen;
