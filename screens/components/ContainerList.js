import React from 'react';
import { Image ,FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/Foundation'
import Plus from 'react-native-vector-icons/Octicons';


const ContainerList = ({ grocery, navigation }) => {
    return (
        <View style={{ marginBottom: 10 }}>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={grocery}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.items}>
                            <Card style={styles.cardStyle} onPress={() => navigation.navigate('details', {
                                values: item,
                            })}>
                                <Image
                                    source={item.img}
                                    style={{ width: 130, height: 100, alignSelf: 'center', backgroundColor: 'transparent', marginTop: 10, resizeMode: 'contain' }}
                                />
                                
                                <Card.Content>

                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.content}</Text>
                                    <Text style={{ color: '#7C7C7C' }}>{item.subContent}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 40 }}>
                                        <Icons name="dollar" size={28} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{item.price}</Text>
                                        <TouchableOpacity style={{ left: '100%' }} onPress={() => console.log('dlfkndfl;knd')}>

                                            <Plus name="plus-small" size={45} color={'white'} style={styles.next} />
                                        </TouchableOpacity>
                                    </View>

                                </Card.Content>
                            </Card>


                        </View>
                    )
                }}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        height: hp(31)
    },
    cardStyle: {
        height: hp(30.5),
        width: wp(43),
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 20
    },
    next: {
        left: wp(-3),
        top: hp(-1),
        backgroundColor: '#53B175',
        borderRadius: 18,
        height: 50,
        width: 50,
        paddingLeft: 15,
        paddingTop: 4,
    },
});

export default ContainerList;
