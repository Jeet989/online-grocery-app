import React from 'react';
import { Dimensions, Image, FlatList, Platform, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Left from 'react-native-vector-icons/Entypo';
import Filter from '../SvgImages/filter';
import Sprite from '../SvgImages/Sprite'
import Diet from '../SvgImages/DietCoke'
import Apple from '../SvgImages/AppleJuice'
import Orange from '../SvgImages/OrangeJuice'
import Coke from '../SvgImages/Coke'
import Pepsi from "../SvgImages/Pepsi";
import Icons from 'react-native-vector-icons/Foundation'
import Plus from 'react-native-vector-icons/Octicons';

const grocery = [
    {
        img: <Diet />,
        content: 'Diet Coke',
        subContent: '355ml, Price',
        price: '1.99',
        id: '1',
    },
    {
        img: <Sprite />,
        content: 'Sprite Can',
        subContent: '325ml, Price',
        price: '1.50',
        id: '2',
    },
    {
        img: <Apple />,
        content: 'Apple Juice',
        subContent: '2L, Price',
        price: '15.99',
        id: '3',
    },
    {
        img: <Orange />,
        content: 'Orange Juice',
        subContent: '2L, Price',
        price: '15.99',
        id: '4',
    },
    {
        img: <Coke />,
        content: 'Coca Cola Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '5',
    },
    {
        img: <Pepsi />,
        content: 'Pepsi Can',
        subContent: '330ml, Price',
        price: '4.99',
        id: '6',
    },
    {
        img: <Orange />,
        content: 'Orange Juice',
        subContent: '2L, Price',
        price: '15.99',
        id: '7',
    },
    {
        img: <Coke />,
        content: 'Coca Cola Can',
        subContent: '325ml, Price',
        price: '4.99',
        id: '8',
    },
    {
        img: <Pepsi />,
        content: 'Pepsi Can',
        subContent: '330ml, Price',
        price: '4.99',
        id: '9',
    }

]

const CategoryProduct = ({ route, navigation }) => {
    const { header } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainHeader}>
                <Left name="chevron-small-left" size={37} style={styles.leftIcn} />
                <Text style={styles.contentHeader}>{header}</Text>
                <Filter style={styles.filterIcn} size={40} />
            </View>

            <View style={{ marginBottom: 10, marginHorizontal: 15, paddingBottom: '7%' }}>

                <FlatList
                showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    data={grocery}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.items}>
                                {/* <Card style={styles.cardStyle} > */}
                                <View style={styles.cardStyle}>
                                    <Text
                                        onPress={() => navigation.navigate('details', {
                                            values: item,
                                        })}
                                        style={{ backgroundColor: 'transparent', marginTop: 10, marginHorizontal: 10, justifyContent: 'center', padding: 0, marginLeft: 50, width: null, height: null,  }}
                                    >{item.img}</Text>

                                    <View>

                                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginHorizontal: 10 }}>{item.content}</Text>
                                        <Text style={{ color: '#7C7C7C', marginHorizontal: 10 }}>{item.subContent}</Text>

                                        <View style={{ flexDirection: 'row', marginTop: 40, marginHorizontal: 10 }}>
                                            <Icons name="dollar" size={28} />
                                            <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{item.price}</Text>

                                        </View>
                                        <TouchableOpacity onPress={() => console.log('dlfkndfl;knd')} style={{
                                            width: 50, left: '60%',
                                            top: '-24%',
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

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    items: {
        height: 250,
        marginBottom: 12
    },
    cardStyle: {
        height: 250,
        width: 178,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 20,
    },
    next: {
        backgroundColor: '#53B175',
        borderRadius: 18,
        height: 50,
        width: 50,
        paddingLeft: 15,
        paddingTop: 4,
    },
    filterIcn: {
        alignSelf: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        fontSize: 17.5,
        width: '80%',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    leftIcn: {
        paddingLeft: 0,
        marginLeft: 0,
    },
    mainHeader: {
        flexDirection: 'row',
        marginTop: 6,
        marginHorizontal: 15,
        justifyContent: 'space-between'
    },
    container: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        margin: 0,
        backgroundColor: 'white',
        flex: 1
    }
});

export default CategoryProduct;
