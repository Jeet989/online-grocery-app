import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { TextInput } from 'react-native-paper';


const SignUp = () => {
    const [value, setValue] = useState();
    return (
        // <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={-800}>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assests/number.png')}
                    style={styles.img}
                />

                <Image
                    source={require('../assests/Group.png')}
                    style={styles.carrot}
                />
                <View style={{ flex: 1 }}>

                    <Text style={styles.loging}>Loging</Text>
                    <Text style={styles.enter}>Enter your email and password</Text>
                    <Text style={styles.email}>Email</Text>
                    <ScrollView style={{ flex: 1, }}>
                        <TextInput
                            value={value}
                            onChangeText={setValue}
                            style={styles.emailInput}
                            mode={"flat"}
                        />

                    </ScrollView>
                </View>
            </View>
        // </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    emailInput: {
        
        left: '3%',
        backgroundColor: 'white',
        top: '70%'
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

