import React from "react";
import { ImageBackground, Image, StatusBar, StyleSheet, Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

const gettingStarted = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar translucent backgroundColor='transparent' />
            <ImageBackground
                source={require('../assests/getting.png')}
                style={{ height: Dimensions.get('screen').height, width: Dimensions.get('screen').width, resizeMode: 'cover'}}
            />
            <Image
                source={require('../assests/carrot.png')}
                style={styles.carrot}
            />
            <Image
                source={require('../assests/tip.png')}
                style={styles.tip}
            />
            <Text style={styles.wel}>Welcome {'\n'} to our store</Text>
            <Text style={styles.get}>Get your groceries in as fast as on hour</Text>

            <Button
                mode="contained"
                uppercase={false}
                contentStyle={{ width: '100%', height: '135%', backgroundColor: "rgb(83, 177, 117)" }}
                labelStyle={{ fontSize: 20, color: 'white', marginTop: '1%', top: '-3%'}}
                
                style={styles.butt}
                onPress={() => navigation.navigate('signin')}
            >
                Get Started
                </Button>


        </View>
    );
}

const styles = StyleSheet.create({
    butt: {
        position: 'absolute',
        top: '83%',
        borderRadius: 12,

    },
    wel: {
        position: 'absolute',
        color: 'white',
        top: '62%',
        fontSize: 40,
        textAlign: "center",
    },
    get: {
        position: 'absolute',
        color: 'white',
        top: '75%',
        fontSize: 13,
        fontFamily: 'sans-serif'
    },
    carrot: {
        top: '55%',
        // left: '44.88%',
        position: 'absolute',
        resizeMode: 'contain',
        width: 40.13,
        height: 45.13,
    },
    tip: {
        width: 25.42,
        height: 21.61,
        position: 'absolute',
        top: '53.5%',
        left: '51%'
    }
});

export default gettingStarted;