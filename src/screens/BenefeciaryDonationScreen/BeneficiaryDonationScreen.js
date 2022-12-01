import { View,ImageBackground, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../Components/CustomInputs/CustomInput';
import background from '../../../Assets/Images/3.jpg'

const BeneficiaryDonateScreen = () => {
    const {height} = useWindowDimensions()
    
      const onBackPressed = () => {
        navigation.navigate('BeneficiaryHome')
      }

      const navigation = useNavigation()

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
    <Text style={styles.title}>Donation Request Portal</Text>
    <CustomInput placeholder="Enter Full Name"></CustomInput>
    <CustomInput placeholder="Enter DOB"></CustomInput>
    <CustomButton type="SECONDARY" text="Upload Documents"></CustomButton>
    <CustomButton text="Submit"></CustomButton>
    <CustomButton type="LINK" text="Back" onPress={onBackPressed}></CustomButton>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default BeneficiaryDonateScreen

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    },
  });