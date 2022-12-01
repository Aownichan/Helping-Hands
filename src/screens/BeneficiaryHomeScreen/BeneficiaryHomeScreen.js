import { View, ScrollView, ImageBackground, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Beneficiary from '../../../Assets/Images/Beneficiary.jpg'
import CustomInput from '../../Components/CustomInputs'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/1.jpg'

const DonorDonateScreen = () => {
    const {height} = useWindowDimensions()

    const onDonatePressed = () => {
        navigation.navigate('BeneficiaryDonate')
      }
    
      const onLoanPressed = () => {
        navigation.navigate('BeneficiaryLoan')
      }

      const onHistoryPressed = () => {
        navigation.navigate('BeneficiaryHistory')
      }
    
      const onSettingsPressed = () => {
        navigation.navigate('Settings')
      }

      const onLogoutPressed = () => {
        navigation.navigate("SignIn")
      }

      const navigation = useNavigation()

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
        <Text style={styles.title}> Welcome Beneficiary</Text>
        <Image source={Beneficiary} style={[styles.logo, {height: height * 0.4}]} resizeMode="contain"/>
    <CustomButton type="PRIMARY" text="Request Donation" onPress={onDonatePressed}></CustomButton>
    <CustomButton type="PRIMARY" text="Request Loan" onPress={onLoanPressed}></CustomButton>
    <CustomButton type="SECONDARY" text="Donation/Loan History" onPress={onHistoryPressed}></CustomButton>
    <Text></Text>
    <Text></Text>
    <CustomButton type="LINK" text="Settings" onPress={onSettingsPressed}></CustomButton>
    <CustomButton type="LINK" text="Logout" onPress={onLogoutPressed}></CustomButton>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default DonorDonateScreen

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      width: '120%',
      maxWidth: 500,
      maxHeight: 500,
      marginBottom: 30
    },
    title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    },
  });