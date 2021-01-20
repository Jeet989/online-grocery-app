import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const FindProducts = ({data}) => {
    return (
        <View style={{marginHorizontal: 15}}>
            <Text>FindProducts</Text>
            {console.log(data)}
            <FlatList 
                data={data}
                keyExtractor={data => data.id}
                renderItem={({item,index}) => {
                    return (
                        <View>
                            {item.component}
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default FindProducts;
