import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';


const SignUp = () => {
    const [value, setValue] = useState();
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={-800}>
            <View>
                <ImageBackground
                    source={require('../assests/number.png')}
                    style={styles.img}
                />

                <Image
                    source={require('../assests/Group.png')}
                    style={styles.carrot}
                />
                <View style={{height: '100%', }}>
                    <ScrollView style={{ flex: 1, top: '20%', position: 'relative', }}>
                        <Text style={styles.loging}>Loging</Text>
                        <Text style={styles.enter}>Enter your email and password</Text>
                        <Text style={styles.email}>Email</Text>



                        <TextInput
                            keyboardType={"email-address"}
                            style={styles.emailInput}
                            value={value}
                            onChangeText={setValue}
                        />
                    </ScrollView>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    emailInput: {
        position: 'absolute',
        flex: 1,
        height: 40,
        borderBottomColor: '#7C7C7C',
        borderBottomWidth: 1,
        width: 400,
        top: '70%',
        left: '3%',
        padding: 0,
        margin: 0,
        backgroundColor: 'yellow'
    },
    email: {
        color: '#7C7C7C',
        top: '50%',
        left: '3%',
        fontSize: 17
    },
    enter: {
        color: '#7C7C7C',
        top: '25%',
        left: '3%'
    },
    loging: {
        fontSize: 20,
        top: '20%',
        left: '3%',
        lineHeight: 29
    },
    carrot: {
        position: 'absolute',
        height: 55,
        width: 47,
        top: '8.62%',
        left: '44.22%'
    },
    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 300,
        width: Dimensions.get('screen').width
    }
});
export default SignUp;

