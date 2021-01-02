import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import gettingStarted from './screens/gettingStarted';
import signIn from './screens/signIn';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="getting" component={gettingStarted} />
        <Stack.Screen options={{headerShown: true}} name="signin" component={signIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;