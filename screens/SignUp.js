import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, Image, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react/cjs/react.development';

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'rgba(252,252,252,.9)' }}>
            <View>
                <View>
                    <ImageBackground
                        source={require('../assests/number.png')}
                        style={styles.img}
                    />
                    <Image
                        source={require('../assests/Group.png')}
                        style={styles.carrot}
                    />
                </View>
                <View>
                    <Text style={styles.signup}>Sign Up</Text>
                    <Text style={styles.cred}>Enter your credentials to continue</Text>
                </View>
                <View>
                    <Text style={styles.user}>Username</Text>
                    <TextInput
                        mode="flat"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.userInput}
                    />
                </View>
                <View>
                    <Text style={styles.email}>Email</Text>
                    <TextInput
                        mode="flat"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.emailInput}

                    />
                </View>
                <View>
                    <Text style={styles.pass}>Password</Text>
                    <TextInput
                        mode="flat"
                        value={pass}
                        onChangeText={setPass}
                        style={styles.passInput}
                    />
                </View>
                <View>
                    <Text style={styles.mainText}>By continuing you agree to our <Text style={{ color: '#53B175' }}>Terms of Service </Text> and <Text style={{ color: '#53B175' }}> Privacy Policy. </Text></Text>
                </View>
                <View>
                    <Button
                        mode="contained"
                        uppercase={false}
                        style={styles.butt}
                        labelStyle={{fontSize: 20}}
                        contentStyle={{height: 60}}
                        onPress={() => navigation.navigate('main')}
                    >
                        Sign Up
                    </Button>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: '2%'}}>
                    <Text style={styles.acc}>Alreay have an account? </Text>
                    <Text style={styles.signin} onPress={() => navigation.navigate('login')}>SignIn</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    signin: {
        color: '#53B175',
        fontSize: 17 
    },
    acc: {
        fontSize: 17
    },
    butt: {
        marginTop: '5%',
        marginHorizontal: '3%',
        borderRadius: 15,
        backgroundColor: '#53B175',
    },
    mainText: {
        marginHorizontal: '3%',
        marginTop: '2%',
        color: '#7C7C7C'
    },
    passInput: {
        marginHorizontal: '3%',
        marginTop: '-1%',
        backgroundColor: 'transparent',
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 2
    },
    pass: {
        marginLeft: '3%',
        marginTop: '5%',
        fontSize: 18,
        color: '#7C7C7C'
    },
    emailInput: {
        marginHorizontal: '3%',
        backgroundColor: 'transparent',
        marginTop: '-1%',
        height: 40,
        justifyContent: 'center',
    },
    email: {
        marginLeft: '3%',
        color: '#7C7C7C',
        fontSize: 18,
        marginTop: '5%'
    },
    userInput: {
        marginHorizontal: '3%',
        backgroundColor: 'transparent',
        marginTop: '-1%',
        height: 40,
        justifyContent: 'center',
    },
    user: {
        marginTop: '7.5%',
        marginLeft: '3%',
        fontSize: 18,
        color: '#7C7C7C'
    },
    cred: {
        marginLeft: '3%',
        color: '#7C7C7C',
        marginTop: '1.5%'
    },
    signup: {
        marginLeft: '3%',
        fontSize: 23,
        fontWeight: 'bold',

    },
    carrot: {
        position: 'absolute',
        height: 55,
        width: 47,
        left: '44.22%',
        top: '18%'
    },
    img: {
        width: Dimensions.get('screen').width,
        height: 250
    }
});
export default SignUp;
