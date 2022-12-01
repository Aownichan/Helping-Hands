import { View, ImageBackground, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../Components/CustomInputs'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/3.jpg'

const ForgotPasswordScreen = () => {
  const {height} = useWindowDimensions()

  const navigation = useNavigation()

  const [username, setUsername] = useState('')

  const onSendPressed = () => {
    navigation.navigate("ResetPassword")
  }
  const onBackToSignInPressed = () => {
    navigation.navigate("SignIn")
  }

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
        <Text style={styles.title}>Reset Password</Text>
    <CustomInput placeholder="Username" value={username} setValue={setUsername}></CustomInput>
    <CustomButton text="Send" onPress={onSendPressed}></CustomButton>
    <CustomButton type="LINK" text="Back to Sign In" onPress={onBackToSignInPressed}></CustomButton>

    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default ForgotPasswordScreen

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