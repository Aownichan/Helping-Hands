import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import DonorHomeScreen from '../screens/DonorHomeScreen/DonorHomeScreen';
import DonorDonateScreen from '../screens/DonorDonateScreen';
import DonerDonationHistory from '../screens/DonerDonationHistory';
import SettingsScreen from '../screens/SettingsScreen';
import BeneficiaryHomeScreen from '../screens/BeneficiaryHomeScreen';
import BenefeciaryDonationScreen from '../screens/BenefeciaryDonationScreen';
import BeneficiaryLoanScreen from '../screens/BeneficiaryLoanScreen';
import BeneficiaryHistoryScreen from '../screens/BeneficiaryHistoryScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
        <Stack.Screen name="DonorHome" component={DonorHomeScreen}/>
        <Stack.Screen name="DonorDonate" component={DonorDonateScreen}/>
        <Stack.Screen name="DonorHistory" component={DonerDonationHistory}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="BeneficiaryHome" component={BeneficiaryHomeScreen}/>
        <Stack.Screen name="BeneficiaryDonate" component={BenefeciaryDonationScreen}/>
        <Stack.Screen name="BeneficiaryLoan" component={BeneficiaryLoanScreen}/>
        <Stack.Screen name="BeneficiaryHistory" component={BeneficiaryHistoryScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation