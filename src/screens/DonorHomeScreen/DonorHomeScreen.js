import { View, ScrollView, ImageBackground, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Donate from '../../../Assets/Images/Donate.jpg'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/1.jpg'

const DonorHomeScreen = () => {
    const {height} = useWindowDimensions()

    const onDonatePressed = () => {
        navigation.navigate('DonorDonate')
      }
    
      const onHistoryPressed = () => {
        navigation.navigate('DonorHistory')
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
        <Text style={styles.title}> Welcome Donor</Text>
        <Image source={Donate} style={[styles.logo, {height: height * 0.4}]} resizeMode="contain"/>
    <CustomButton type="PRIMARY" text="Donate" onPress={onDonatePressed}></CustomButton>
    <CustomButton type="SECONDARY" text="Donation History" onPress={onHistoryPressed}></CustomButton>
    <Text></Text>
    <Text></Text>
    <CustomButton type="LINK" text="Settings" onPress={onSettingsPressed}></CustomButton>
    <CustomButton type="LINK" text="Logout" onPress={onLogoutPressed}></CustomButton>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default DonorHomeScreen

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      width: '100%',
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