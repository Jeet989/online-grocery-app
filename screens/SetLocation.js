import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';

const SetLocation = ({ navigation }) => {
 
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(252,252,252,.8)' }}>
            <ImageBackground
                source={require('../assests/number.png')}
                style={styles.img}
            />
            <ImageBackground
                source={require('../assests/illustration.png')}
                style={styles.map}
            />
            <Text style={styles.loc}>Select Your Location</Text>
            <Text style={styles.content}>Switch on your location to stay in tune with what's happening in you area</Text>
            <Text style={styles.zone}>Your Zone</Text>

            <Picker
                selectedValue={'India'}
                style={styles.picker}

            >
                <Picker.Item label="Banasree" value="us" />
                <Picker.Item label="UK" value="uk" />
            </Picker>

            <Text style={styles.area}>Your Area</Text>

            <Picker
                selectedValue={'India'}
                style={styles.picker2}
            >
                <Picker.Item label="Types of your area" value="area" />
                <Picker.Item label="Banasree" value="us" />
                <Picker.Item label="UK" value="uk" />
            </Picker>

            <Button
                mode="contained"
                uppercase={false}
                contentStyle={{ width: '100%', height: '135%', backgroundColor: "rgb(83, 177, 117)" }}
                labelStyle={{ fontSize: 20, color: 'white', marginTop: '1%', top: '-3%' }}

                style={styles.butt}
                onPress={() => navigation.navigate('signup')}
            >
                Submit
                </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    butt: {
        position: 'absolute',
        top: '80%',
        borderRadius: 12,
        left: '3%',
        width: '93%',
    },
    picker2: {
        height: 50,
        width: '98%',
        left: '3%',
        top: '66%',
        position: 'absolute',
    },
    area: {
        position: 'absolute',
        top: '63%',
        left: '3%',
        color: '#7C7C7C'
    },
    picker: {
        height: 50,
        width: '98%',
        left: '3%',
        top: '-38%',
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },
    zone: {
        position: 'absolute',
        top: '53%',
        left: '3%',
        color: '#7C7C7C'
    },

    content: {
        flex: 1,
        position: 'absolute',
        textAlign: 'center',
        top: '42%',
        color: '#7C7C7C'

    },
    img: {
        flex: 1,
        position: 'absolute',
        width: 414,
        height: 233,
    },
    map: {
        flex: 1,
        position: 'relative',
        height: 200,
        width: 254,
        alignSelf: 'center',
        top: 118
    },
    loc: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        top: '37%',
        fontSize: 26
    }
});

export default SetLocation;
