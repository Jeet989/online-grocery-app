import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Second from '../SvgImages/svg'
import First from '../SvgImages/First'
import Third from '../SvgImages/Third'
import Fourth from '../SvgImages/Fourth'
import Sixth from '../SvgImages/Sixth'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

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


const Explore = ({navigation}) => {
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

            <View style={{ marginHorizontal: 15, marginTop: 10, marginBottom: '64%', }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cat}
                    numColumns={2}
                    keyExtractor={cat => cat.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ ...styles.svgContainer, borderColor: item.backgroundColor, backgroundColor: item.backgroundColor }}>
                                <TouchableOpacity onPress={() => navigation.navigate('catdetails', {header: item.placeholder})}>
                                    <Text style={styles.flatComponent}>{item.component}</Text>
                                    <Text style={styles.flatPlaceholder}>{item.placeholder}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        height: 220,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 20,
        width: '45%'
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
