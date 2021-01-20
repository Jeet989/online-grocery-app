import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SvgUri } from 'react-native-svg';
import Second from '../SvgImages/svg'
import First from '../SvgImages/First'
import Third from '../SvgImages/Third'
import Fourth from '../SvgImages/Fourth'
import Sixth from '../SvgImages/Sixth'
import FindProducts from '../components/FindProducts';
import { FlatList } from 'react-native-gesture-handler';

const cat = [
    {
        component: <First />,
        placeholder: 'Fresh Fruits & Vegetables',
        id: '1',
    },
    {
        component: <Second />,
        placeholder: 'Cooking Oil & Ghee',
        id: '2',
    },
    {
        component: <Third />,
        placeholder: 'Meat & Fish',
        id: '3',
    },
    {
        component: <Fourth />,
        placeholder: 'Bakery & Snacks',
        id: '4',
    },
    // {
    //     component: require('../../assests/fifth.png'),
    //     placeholder: 'Dairy & Eggs',
    //     id: '5',
    // },
    {
        component: <Sixth />,
        placeholder: 'Beverages',
        id: '6',
    },
]


const Explore = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainHeader}>
                <Text style={styles.productsHeader}>Find Products</Text>
            </View>

            <View style={{ marginHorizontal: 15, marginTop: '5%' }}>
                <TextInput
                    placeholder="Search Store"
                    left={<TextInput.Icon name={() => <Icon name="search" size={30} />} />}
                    style={styles.searchInput}
                    underlineColor='transparent'
                    theme={{ roundness: 18 }}
                />
            </View>

            <View style={{ marginHorizontal: 15, marginTop: 10, }}>
                <FlatList
                    data={cat}
                    keyExtractor={cat => cat.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.svgContainer}>
                                

                                    {/* <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text>
                                    <Text>{item.placeholder}</Text> */}
                                

                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    svgContainer: {
        
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around'
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
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },

});

export default Explore;
