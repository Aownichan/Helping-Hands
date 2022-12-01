import { View, ScrollView, ImageBackground, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../Components/CustomInputs'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/3.jpg'


const ConfirmEmailScreen = () => {
  const navigation = useNavigation()
  const [code, setCode] = useState('')
  const onEmailConfirmationPressed = () => {
    navigation.navigate('BeneficiaryHome')
  }
  const {height} = useWindowDimensions()
  const onBackToSignInPressed = () => {
    navigation.navigate('SignIn')
  }
  
  const onResendCodePressed = () => {
    console.warn("Code Resent")
  }

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
        <Text style={styles.title}>Email Confirmation</Text>
    <CustomInput placeholder="Enter Confirmation Code" value={code} setValue={setCode}></CustomInput>
    <CustomButton type="PRIMARY" text="Confirm" onPress={onEmailConfirmationPressed}></CustomButton>
    <CustomButton type="SECONDARY" text="Resend Code" onPress={onResendCodePressed}></CustomButton>
    <CustomButton type="LINK" text="Cancel" onPress={onBackToSignInPressed}></CustomButton>

    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default ConfirmEmailScreen

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