import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import gettingStarted from './screens/gettingStarted';
import SignIn from './screens/signIn';
import NumberInput from './screens/NumberInput';
import Icon from 'react-native-vector-icons/Ionicons';
import OtpInput from './screens/OtpInput';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />

        <Stack.Screen options={{ headerShown: false }} name="getting" component={gettingStarted} />

        <Stack.Screen options={{ headerShown: false }} name="signin" component={SignIn} />

        <Stack.Screen options={{headerShown: false}} name="number" component={NumberInput} />

        <Stack.Screen options={{headerShown: false}} name="otp" component={OtpInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;