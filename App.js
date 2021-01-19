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
import SetLocation from './screens/SetLocation';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/appContents/HomeScreen';
import ProductDetails from './screens/appContents/ProductDetails';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Explore from './screens/appContents/Explore';
import Cart from './screens/appContents/Cart';
import Favourite from './screens/appContents/Favourite';
import Account from './screens/appContents/Account';

const Home = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" options={{ headerShown: false }} component={HomeScreen} />

      <Stack.Screen name="details" options={{ headerShown: false }} component={ProductDetails} />
    </Stack.Navigator>
  )
}

const Main = () => {

  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />

      <Tab.Screen options={{ headerShown: false }} name="explore" component={Explore} />

      <Tab.Screen options={{ headerShown: false }} name="cart" component={Cart} />

      <Tab.Screen options={{ headerShown: false }} name="favourite" component={Favourite} />

      <Tab.Screen options={{ headerShown: false }} name="account" component={Account} />
    </Tab.Navigator>)
}

const App = () => {
  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />

        <Stack.Screen options={{ headerShown: false }} name="getting" component={gettingStarted} />

        <Stack.Screen options={{ headerShown: false }} name="signin" component={SignIn} />

        <Stack.Screen options={{ headerShown: false }} name="number" component={NumberInput} />

        <Stack.Screen options={{ headerShown: false }} name="otp" component={OtpInput} />

        <Stack.Screen options={{ headerShown: false }} name="set" component={SetLocation} />

        <Stack.Screen options={{ headerShown: false }} name="login" component={LogIn} />

        <Stack.Screen options={{ headerShown: false }} name="signup" component={SignUp} /> */}

        <Stack.Screen options={{ headerShown: false }} component={Main} name="main" />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;