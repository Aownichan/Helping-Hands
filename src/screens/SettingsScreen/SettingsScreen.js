import { View, ImageBackground, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/3.jpg'

const DonorDonateScreen = () => {
    const {height} = useWindowDimensions()
    
      const onBackPressed = () => {
        navigation.navigate('DonorHome')
      }

      const onResetPasswordPressed = () => {
        navigation.navigate('ResetPassword')
      }

      const navigation = useNavigation()

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root}>
    <Text style={styles.title}>User Settings</Text>
    <Text style={styles.simpletext}>Username: 'Name'</Text>
    <Text style={styles.simpletext}>Email: 'Email'</Text>
    <Text style={styles.simpletext}>Password: 'Password'</Text>
    <CustomButton type="SECONDARY" text="Reset Password" onPress={onResetPasswordPressed}></CustomButton>
    

    <CustomButton type="LINK" text="Back" onPress={onBackPressed}></CustomButton>
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
    title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    marginBottom: 50,
    },
    simpletext:{
    fontSize: 20,
    alignContent: 'center',
    alignItems: 'center',
    color: 'black',
    }
  });