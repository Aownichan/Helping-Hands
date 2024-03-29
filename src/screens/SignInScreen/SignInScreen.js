import { View, ScrollView, Text, Image, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../Assets/Images/Logo1.png'
import CustomInput from '../../Components/CustomInputs'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/4.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignInScreen = () => {
  const [enteredEmail, setEmail] = useState('')
  const [enteredPassword, setPassword] = useState('')
  const [error, setError] = useState(null);
  const FIREBASE_API_ENDPOINT = 'https://mad-db-91771-default-rtdb.asia-southeast1.firebasedatabase.app/'

  const onSignInPressed = async () => {

    if(enteredEmail=='' || enteredPassword=='' ){
      alert("Please Fill All Fields")
    }else{
    try {
      const emailval = await AsyncStorage.getItem('@store_email')
      const passval = await AsyncStorage.getItem('@store_pass')
      const typeval = await AsyncStorage.getItem('@store_type')
      const nameval = await AsyncStorage.getItem('@store_name')


      
      if(emailval === enteredEmail && passval === enteredPassword) {
        setPassword('')
        if(typeval === 'Donor'){
          navigation.navigate("DonorHome")
          alert("Welcome "+nameval+"!")
        }
        else{
          navigation.navigate("BeneficiaryHome")
          alert("Welcome "+nameval+"!")
        }
      }
      else{
        alert("Login failed")
        setPassword('')
      }
    } catch(e) {
      alert(e)
    }
    }
    
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
    <CustomInput placeholder="Email" value={enteredEmail} setValue={setEmail}></CustomInput>
    <CustomInput secureTextEntry={true} placeholder="Password" value={enteredPassword} setValue={setPassword}></CustomInput>
    {error && <Text>{error}</Text>}
    <CustomButton type="PRIMARY" text="Sign In" onPress={()=>{onSignInPressed()}}></CustomButton>

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