import React, { useState } from 'react';
import { Dimensions, Image, FlatList, Platform, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Modal, TouchableHighlight, StatusBar, Alert } from 'react-native';
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
import ContainerList from '../components/ContainerList'
import { Card, Checkbox, Button } from 'react-native-paper';

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

const check = [
    {
        id: 1,
        checked: 'unchecked',
        key: 'Eggs',
    },
    {
        id: 2,
        checked: 'unchecked',
        key: 'Noodles & Pasta',
    },
    {
        id: 3,
        checked: 'checked',
        key: 'Chips & Crisps',
    },
    {
        id: 4,
        checked: 'unchecked',
        key: 'Fast Food',
    },

]

const fil = [
    {
        id: 5,
        checked: 'unchecked',
        key: 'Individual Collection',
    },
    {
        id: 6,
        checked: 'checked',
        key: 'Coca cola',
    },
    {
        id: 7,
        checked: 'unchecked',
        key: 'Ifad',
    },
    {
        id: 8,
        checked: 'unchecked',
        key: 'Kazi Farmas',
    },
]


const CategoryProduct = ({ route, navigation }) => {
    const { header } = route.params;

    const [modalVisible, setModalVisible] = useState(false);




    const unChecked = () => setChecked('checked');

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
                <Modal
                    style={{ margin: 0 }}
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View>
                        <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
                        <View>

                            <View style={{ flexDirection: 'row', marginTop: 15, }}>
                                <Left name="cross" size={38} style={{ padding: 0, margin: 0 }} onPress={() => {
                                    setModalVisible(!modalVisible);
                                }} />
                                <Text style={styles.filters}>Filters</Text>
                            </View>

                            <View style={{ backgroundColor: '#F1F8F8', display: 'flex', height: Dimensions.get('screen').height, paddingHorizontal: 15, marginTop: '10%', borderRadius: 30, }}>
                                <Text style={{ marginLeft: '2%', fontSize: 20, marginBottom: '5%', marginTop: '5%', fontWeight: 'bold', }}>Categories</Text>
                                {check.map((item, id) => {
                                    return (<View style={{ flexDirection: 'row', }}>
                                        <Checkbox
                                            status={item.checked}
                                            color='#53B175'
                                            theme={{ roundness: 80, mode: 'exact' }}

                                        />
                                        <Text style={{ alignSelf: 'center', fontSize: 17, marginLeft: '1%' }}>{item.key}</Text>
                                    </View>
                                    )
                                })}

                                <Text style={{ marginLeft: '2%', fontSize: 20, marginBottom: '5%', marginTop: '5%', fontWeight: 'bold', }}>Brand</Text>
                                {fil.map((item, id) => {
                                    return (<View style={{ flexDirection: 'row', }}>
                                        <Checkbox
                                            status={item.checked}
                                            color='#53B175'
                                            theme={{ roundness: 80, mode: 'exact' }}

                                        />
                                        <Text style={{ alignSelf: 'center', fontSize: 17, marginLeft: '1%' }}>{item.key}</Text>
                                    </View>
                                    )
                                })}

                                <Button
                                    mode="contained"
                                    uppercase={false}
                                    contentStyle={{ width: '100%', height: '135%', backgroundColor: "rgb(83, 177, 117)" }}
                                    labelStyle={{ fontSize: 20, color: 'white', marginTop: '1%', top: '-3%' }}

                                    style={styles.butt}
                                    onPress={() => console.log("button pressed")}
                                >
                                    Apply Filter
                                </Button>



                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.mainHeader}>
                <Left name="chevron-small-left" size={37} style={styles.leftIcn} onPress={() => navigation.goBack()} />
                <Text style={styles.contentHeader}>{header}</Text>
                <Filter style={styles.filterIcn} size={40} onPress={() => setModalVisible(true)} />
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

                {/* <ContainerList 
                grocery={grocery}
                navigation={navigation}
                /> */}
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    butt: {
        position: 'absolute',
        top: '75%',
        borderRadius: 12,
        width: '100%',
        marginHorizontal: 15

    },
    filters: {
        alignSelf: 'center',
        left: '330%',
        fontSize: 20,
        fontWeight: 'bold'
    },
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
