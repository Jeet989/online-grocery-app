import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, ImageBackground, Image, Keyboard, TouchableWithoutFeedback, ImageBackgroundBase, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OtpInput = ({ navigation }) => {
    const [value, setValue] = useState();
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'rgba(252,252,252,.8)' }} behavior={'padding'} >
                

                    <ImageBackground
                        source={require('../assests/number.png')}
                        style={styles.img}
                    />

                    <View style={{ flex: 1 }}>
                        <Icon name="arrow-back-ios" size={30} style={{ top: 40, left: '3%' }} onPress={navigation.goBack} />

                        <Text style={styles.code}>Enter your 4-digit code</Text>

                        <Text style={styles.cod} >Code</Text>

                        <TextInput
                            keyboardType={'number-pad'}
                            style={styles.inp}
                            value={value}
                            onChangeText={setValue}
                            placeholder="- - - -"
                            autoFocus
                        />

                    </View>
                    <Text style={styles.resend}>Resend Code</Text>
                    <Icon name="chevron-right" size={40} color={'white'} style={styles.next} onPress={() => navigation.navigate('set')} />
                
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    resend: {
        position: 'absolute',
        left: '3%',
        top: 490,
        color: '#53B175',
        fontSize: 18,
    },
    img: {
        position: 'absolute',
        width: 414,
        height: 233,
    },
    next: {
        position: 'absolute',
        left: '75%',
        top: 470,
        backgroundColor: '#53B175',
        borderRadius: 50,
        height: 70,
        width: 70,
        paddingLeft: 16,
        paddingTop: 14
    },
    code: {
        fontWeight: 'bold',
        fontSize: 20,
        left: '3%',
        top: 140,
    },
    cod: {
        top: 160,
        left: '3%',
        color: '#7C7C7C'
    },
    inp: {

        height: 50,
        width: '100%',
        top: 170,
        left: '3%',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        fontSize: 16,


    }
});
export default OtpInput;
