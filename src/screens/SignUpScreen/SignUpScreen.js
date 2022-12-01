import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, useWindowDimensions, Switch } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../Assets/Images/Logo1.png'
import CustomInput from '../../Components/CustomInputs'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/4.jpg'

const SignUpScreen = () => {
  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [isEnabled, toggleSwitch] = useState('')
  const [isEnabled2, toggleSwitch2] = useState('')

  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  }

  const onSignUpPressed = () => {
    navigation.navigate("ConfirmEmail")
  }
  


  const {height} = useWindowDimensions()
  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
      <Image source={Logo} style={[styles.logo, {height: height * 0.15}]} resizeMode="contain"/>
    <Text style={styles.title} >Create An Account</Text>
    <CustomInput placeholder="Username" value={username} setValue={setUsername}></CustomInput>
    <CustomInput placeholder="Email" value={email} setValue={setEmail}></CustomInput>

    <CustomInput secureTextEntry={true} placeholder="Password" value={password} setValue={setPassword}></CustomInput>
    <CustomInput secureTextEntry={true} placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat}></CustomInput>
    <Text style={{padding: 5, fontSize: 18, fontWeight: 'bold', color: 'black'}}>Account Type</Text>
    <View style={{flexDirection: 'row',}}>
      <Text style={{padding: 15}}>Beneficiary</Text>
    <Switch
        trackColor={{ false: "#767577", true: "red" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={{padding: 15}}>Donor</Text>
    <Switch
        trackColor={{ false: "#767577", true: "red" }}
        thumbColor={isEnabled2 ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
    </View>
    <Text></Text>
    <CustomButton type="PRIMARY" text="Sign Up" onPress={onSignUpPressed}></CustomButton>

    <CustomButton type="LINK" text="Already have an account? Log In" onPress={onSignInPressed}></CustomButton>

    
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '35%',
    maxWidth: 300,
    maxHeight: 300,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
});