import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import IntlPhoneInput from 'react-native-intl-phone-input';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NumberInput = ({ navigation }) => {
    const [value, setValue] = useState();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={3}
        >


            <View style={{ flex: 1, backgroundColor: 'rgba(252,252,252,0.73)' }}>
                <ImageBackground
                    source={require('../assests/number.png')}
                    style={styles.img}

                >
                    <Text style={styles.numTxt}>Enter your mobile number</Text>

                    <Text style={{ fontSize: 16, color: '#7C7C7C', top: '24%', left: '3%' }}>Mobile Number</Text>
                    <IntlPhoneInput
                        onChangeText={setValue}
                        defaultCountry="IN"
                        placeholder=' '
                        containerStyle={{ backgroundColor: 'rgba(252,252,252, 0.73)', left: '0.4%', top: '30%' }}
                    />




                </ImageBackground>

                <Icon name="arrow-back-ios" style={{ position: 'absolute', top: '5%', left: '3%', }} size={30} onPress={() => navigation.goBack()} />

                
                    <Icon name="chevron-right" size={40} color={'white'} style={styles.next} onPress={() => navigation.navigate('otp')} />
                

            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    next: {
        position: 'absolute',
        left: '70%',
        top: '80%',
        backgroundColor: '#53B175',
        borderRadius: 50,
        height: 70,
        width: 70,
        paddingLeft: 16,
        paddingTop: 14
    },
    img: {
        width: '100%',
        height: '53%',

    },
    numTxt: {
        fontWeight: 'bold',
        fontSize: 23,
        top: '20%',
        left: '3%'
    },
});

export default NumberInput;