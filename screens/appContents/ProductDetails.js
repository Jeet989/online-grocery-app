import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ProductDetails = ({ navigation, route }) => {
    const { itemId, otherParam, img } = route.params;
    return (
        <View>
            {/* <Text>{console.log(JSON.stringify(img))}</Text> */}
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>itemId: {console.log(route.params)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ProductDetails;
