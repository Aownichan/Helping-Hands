import { View, ScrollView, Text, Image, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../Assets/Images/Logo1.png'
import CustomInput from '../../Components/CustomInputs'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/4.jpg'
const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSignInPressed = () => {
    navigation.navigate('DonorHome')
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  const onSignUpPressed = () => {
    navigation.navigate('SignUp')
  }

  const {height} = useWindowDimensions()
  const navigation = useNavigation()
  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
    <CustomInput placeholder="Username" value={username} setValue={setUsername}></CustomInput>
    <CustomInput secureTextEntry={true} placeholder="Password" value={password} setValue={setPassword}></CustomInput>
    
    <CustomButton type="PRIMARY" text="Sign In" onPress={onSignInPressed}></CustomButton>

    <CustomButton type="LINK" text="Forgot Password" onPress={onForgotPasswordPressed}></CustomButton>
    <CustomButton type="LINK" text="Don't have an account? Create One" onPress={onSignUpPressed}></CustomButton>

    
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 500,
  },
});