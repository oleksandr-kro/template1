import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



import {
    ScreenLogin,
    ScreenVerification,
  } from '../scenes/Auth';

const AuthStack = createStackNavigator();

const AuthNav =()=>(
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={ScreenLogin} options={{headerShown: false}}/>
        <AuthStack.Screen name="Verification" component={ScreenVerification} />
    </AuthStack.Navigator>

)



export const Navigation = () => {
    return(
        <NavigationContainer>
            <AuthNav />
        </NavigationContainer>
    )
}