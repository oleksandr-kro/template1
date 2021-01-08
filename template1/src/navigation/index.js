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
    ScreenSignUpQuestion,
    ScreenSignUpPassport,
  } from '../scenes/Auth';

  import {Test} from '../views/components/basic'

const AuthStack = createStackNavigator();

const AuthNav =()=>(
    <AuthStack.Navigator screenOptions={{
        // ...defaultNavigationOptions,
        // // header: ()=> <Header/>,
        // header: ()=> <Test />,
        // headerBackTitleVisible: false,
        headerShown: true,
        headerTransparent: true,
      }} initialRouteName="SignUpPassport">
        <AuthStack.Screen name="Login" component={ScreenLogin} options={{headerShown: false, gestureEnabled: false}}/>
        <AuthStack.Screen name="Verification" component={ScreenVerification} />
        <AuthStack.Screen name="SignUp" component={ScreenSignUp} options={{headerShown: false, gestureEnabled: false}}/>
        <AuthStack.Screen name="SignUpQuestion" component={ScreenSignUpQuestion} options={{headerShown: false, gestureEnabled: false}}/>
        <AuthStack.Screen name="SignUpPassport" component={ScreenSignUpPassport} options={{headerShown: false, gestureEnabled: false}}/>
    </AuthStack.Navigator>

)    



export const Navigation = () => {
    return(
        <NavigationContainer>
            <AuthNav />
        </NavigationContainer>
    )
}