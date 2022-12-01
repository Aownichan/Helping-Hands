import { View,ImageBackground, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../Components/CustomInputs'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/3.jpg'

const ResetPasswordScreen = () => {
  const {height} = useWindowDimensions()
  const navigation = useNavigation()

  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')


  const onConfirmPressed = () => {
    console.warn("Password Changed")
    navigation.navigate("SignIn")
  }
  const onBackToSignInPressed = () => {
    navigation.navigate("SignIn")
  }

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
        <Text style={styles.title}>Reset Your Password</Text>
    <CustomInput placeholder="Enter Your Code *" value={code} setValue={setCode}></CustomInput>
    <CustomInput placeholder="Enter New Password *" value={password} setValue={setPassword}></CustomInput>
    <CustomButton text="Submit" onPress={onConfirmPressed}></CustomButton>
    <CustomButton type="LINK" text="Cancel" onPress={onBackToSignInPressed}></CustomButton>

    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default ResetPasswordScreen

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