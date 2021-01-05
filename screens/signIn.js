import { useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ImageBackground, Keyboard, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import IntlPhoneInput from 'react-native-intl-phone-input';
import { Button } from 'react-native-paper';


const SignIn = ({ navigation }) => {
    const [value, setValue] = useState();

    return (
        <View style={{ backgroundColor: 'rgb(251,251,251)', flex: 1 }}>
            <ImageBackground
                source={require('../assests/signinimg.png')}
                style={{ width: '100%', height: '65%' }}
            />
            <Text style={styles.dat}>Get your groceries{'\n'}with nectar</Text>
            <IntlPhoneInput
                onChangeText={setValue}
                defaultCountry="IN"
                placeholder="Phone Number"
                containerStyle={{ backgroundColor: 'rgb(251,251,251)', left: 11.54, position: 'absolute', top: 500 }}
                inputProps={{
                    onFocus: () => {
                        Keyboard.dismiss();
                        navigation.navigate('number');
                    }
                }}
            />

            <Text style={styles.soco}>Or connect with social media</Text>

            <Button
                mode="contained"
                uppercase={false}
                contentStyle={{ width: '100%', height: '135%', backgroundColor: "#5383EC" }}
                labelStyle={{ fontSize: 20, color: 'white', marginTop: '1%', top: '-3%' }}

                style={styles.butt}
                onPress={() => console.log("ss")}
            >
                Continue with Google
                </Button>

            <Button
                mode="contained"
                uppercase={false}
                contentStyle={{ width: '100%', height: '135%', backgroundColor: "#4A66AC" }}
                labelStyle={{ fontSize: 20, color: 'white', marginTop: '1%', top: '-3%', }}

                style={styles.butt2}
                onPress={() => console.log("ss")}
            >
                Continue with Facebook
                </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    dat: {
        fontWeight: 'bold',
        fontSize: 24,
        position: 'absolute',
        top: 423.63,
        left: 24.54
    },
    soco: {
        position: 'absolute',
        left: 105,
        top: 570,
        color: '#828282'
    },
    butt: {
        position: 'absolute',
        top: 620,
        borderRadius: 19,
        width: 364,
        left: 25

    },
    butt2: {
        position: 'absolute',
        top: 693,
        borderRadius: 19,
        width: 364,
        left: 25

    },
});

export default SignIn;