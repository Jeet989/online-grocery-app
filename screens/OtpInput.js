import React from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OtpInput = ({ navigation }) => (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 , backgroundColor: 'rgba(252,252,252,0.9)'}}
        keyboardVerticalOffset={1}
    >
        <>
            <ImageBackground
                source={require('../assests/number.png')}
                style={styles.img}
            />

            <Icon name="arrow-back-ios" style={{ position: 'absolute',top: '5%', left: '3%', }} size={30} onPress={() => navigation.goBack()} />

            <Text style={styles.code}>Enter your 4-digit code</Text>

            <Text style={styles.place}>Code</Text>

            <TextInput
                keyboardType='phone-pad'
                placeholder='---'
                style={styles.inp}
            />

            <Text style={styles.resend}>Resend Code</Text>

            <Icon name="chevron-right" size={40} color={'white'} style={styles.next} onPress={() => console.log('button pressed to nxt')} />
        </>


    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    code: {
        position: 'absolute',
        top: '18%',
        left: '3%',
        fontSize: 23,
        fontWeight: 'bold'
    },
    place: {
        position: 'absolute',
        color: '#7C7C7C',
        top: '23%',
        left: '3%',
        fontSize: 16
    },
    inp: {
        position: 'absolute',
        width: '100%',
        height: 50,
        left: '3%',
        top: '26%',
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2'
    },
    img: {
        width: '100%',
        height: '53%',

    },
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
    resend: {
        position: 'absolute',
        top: '83%',
        left: '3%',
        color: '#53B175'
    }
});
export default OtpInput;
