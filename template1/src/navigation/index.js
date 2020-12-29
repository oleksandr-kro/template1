import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {Header} from '../views/components/basic'
import {defaultNavigationOptions} from '../assets/styles'

import {
    ScreenLogin,
    ScreenVerification,
    ScreenSignUp,
  } from '../scenes/Auth';

const AuthStack = createStackNavigator();

const AuthNav =()=>(
    <AuthStack.Navigator screenOptions={{
        ...defaultNavigationOptions,
        header: ()=>Header,
        headerBackTitleVisible: false,
      }}>
        <AuthStack.Screen name="SignUp" component={ScreenSignUp} options={{headerShown: false}}/>
        <AuthStack.Screen name="Verification" component={ScreenVerification} />
        <AuthStack.Screen name="Login" component={ScreenLogin} options={{headerShown: false}}/>
    </AuthStack.Navigator>

)    



export const Navigation = () => {
    return(
        <NavigationContainer>
            <AuthNav />
        </NavigationContainer>
    )
}