import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';




const SplashScreen = () => {
    return (
        <View style={styles.SplashScreenRootView}>
            <View style={styles.SplashScreenChildView}>
                <StatusBar translucent backgroundColor='transparent'/>
                <Image
                    source={require('../assests/tip.png')}
                    style={{ width: 26.42, height: 23.61, resizeMode: 'contain', left: '-18%', bottom: '3%', marginBottom: '10%' }}
                />
                <Image
                    source={require('../assests/carrot.png')}
                    style={{ width: 43.13, height: 49.13, resizeMode: 'contain', left: '22%', top: '45%', position: 'absolute' }}
                />
                <Text style={styles.nectar}>nectar</Text>
                <Text style={styles.online}>online groceriet</Text>
            </View>
        </View>
    )
}


const App = ({ navigation }) => {

    const [Visible, setVisible] = useState(true);

    //Similar to ComponentDidMount
    useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 3000)
    },[setVisible]);



    return (
        <View style={styles.MainContainer}>
            {(Visible) ? SplashScreen() : navigation.navigate('getting')}
            

        </View>
    );
};

const styles = StyleSheet.create({
    nectar: {
        position: 'absolute',
        color: 'white',
        fontSize: 55,
        top: '41%',
        left: '37%'
    },
    online: {
        position: 'absolute',
        width: '100%',
        color: 'white',
        fontSize: 15,
        letterSpacing: 3,
        left: '37%',
        bottom: widthPercentageToDP(106.5)
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },

    SplashScreenRootView: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    SplashScreenChildView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(83, 177, 117)',
        flex: 1,
    }
})

export default App;