import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions, ScrollView } from 'react-native';

import { TextInput, Button } from 'react-native-paper';


const LogIn = ({ navigation }) => {
    const [value, setValue] = useState();
    const [pass, setPass] = useState();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'rgba(252,252,252,.9)', }}>
            <View>
                <View>
                    <ImageBackground
                        source={require('../assests/number.png')}
                        style={styles.img}
                    />
                    <Image
                        source={require('../assests/Group.png')}
                        style={{ height: 55, width: 47, left: '44.22%', top: '18%', position: 'absolute' }}
                    />
                </View>
                <View>
                    <Text style={styles.loging}>Loging</Text>
                    <Text style={styles.enter}>Enter your email and password</Text>
                </View>
                <View>
                    <Text style={styles.email}>Email</Text>
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        style={styles.emailInput}
                    />
                    <Text style={styles.pass}>Password</Text>
                    <TextInput
                        value={pass}
                        onChangeText={setPass}
                        style={styles.passInput}
                        secureTextEntry
                    />
                </View>
                <View>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </View>
                <View>
                    <Button
                        mode="contained"
                        style={styles.butt}
                        contentStyle={{ marginTop: '-3%', height: '130%' }}
                        labelStyle={{ fontSize: 20, }}
                        uppercase={false}
                        onPress={() => console.log("sdsddsfdfd")}
                    >
                        Log In
                    </Button>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={styles.acc}>Don't have an account?</Text>
                    <Text style={styles.signup} onPress={() => navigation.navigate('signup')}>SignUp</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    signup: {
        marginTop: '2%',
        fontSize: 17,
        marginLeft: '2%',
        color: '#53B175'
    },
    acc: {
        
        
        marginTop: '2%',
        fontSize: 17,
        
    },
    butt: {
        marginTop: '7%',
        height: 55,
        borderRadius: 15,
        marginHorizontal: '3%',
        backgroundColor: '#53B175',

    },
    forgot: {
        alignSelf: 'flex-end',
        marginHorizontal: '3%',
        marginTop: '2%'
    },
    passInput: {
        marginHorizontal: '3%',
        backgroundColor: 'transparent'
    },
    pass: {
        marginLeft: '3%',
        marginTop: '6%'
    },
    emailInput: {
        marginHorizontal: '3%',
        backgroundColor: 'transparent',
        marginTop: '-1%'
    },
    email: {
        marginLeft: '3%',
        marginTop: '10%',
        fontSize: 17,
        color: '#7C7C7C'
    },
    enter: {
        color: '#7C7C7C',
        marginLeft: '3%',
        marginTop: '2%'
    },
    loging: {
        marginLeft: '3%',
        fontSize: 23,
        fontWeight: 'bold'
    },
    img: {
        height: 250,
        width: Dimensions.get('screen').width
    }
});
export default LogIn;

