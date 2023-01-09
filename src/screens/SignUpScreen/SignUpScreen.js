import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, useWindowDimensions, Switch } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../Assets/Images/Logo1.png'
import CustomInput from '../../Components/CustomInputs'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/4.jpg'
import CustomDropDown from '../../Components/CustomDropDown'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import firebase from 'firebase/compat/app'
// import "firebase/compat/firestore";

const SignUpScreen = () => {
  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [accountTypeValue, setSelectedValue] = useState('Donor');
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [emailerror, setEmailError] = useState(null);
  const [passworderror, setPasswordError] = useState(null);
  const [usernameerror, setUsernameError] = useState(null);
  const FIREBASE_API_ENDPOINT='https://mad-db-91771-default-rtdb.asia-southeast1.firebasedatabase.app/'



  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  }

  const onSignUpPressed = async () => {

    if(password == "" || passwordRepeat == ""){
      setPasswordError("Please fill password fields")
    }
    else if(password !== passwordRepeat){
      setPasswordError("Passwords are not the same")
    }
    else if(password.length < 5){
      setPasswordError("Password must be greater than 4 characters")
    }
    else if(username == ""){
      setUsernameError("Username cannot be empty")
    }
    else if (username.length < 3 ){
      setUsernameError("Username cannot be lower than 3 characters")
    }
    else if(!emailRegex.test(email)){
      setEmailError('Invalid Email');
    }
    else{

      fetch(`${FIREBASE_API_ENDPOINT}/data.json`, {
        method: 'POST',
        body: JSON.stringify({
    
          username:username,
          email: email,
          password: password,
          type: accountTypeValue
    
        })

      });
      
          try {
          await AsyncStorage.setItem('@store_email', email)
          await AsyncStorage.setItem('@store_pass', password)
          await AsyncStorage.setItem('@store_type', accountTypeValue)
          await AsyncStorage.setItem('@store_name', username)

      

        } catch (e) {
          alert("Registration failed")
        }

        alert("Signed Up!")
        navigation.navigate("SignIn")
        
    


    
    
  }
}

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };
  


  const {height} = useWindowDimensions()
  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
      <Image source={Logo} style={[styles.logo, {height: height * 0.15}]} resizeMode="contain"/>
    <Text style={styles.title} >Create An Account</Text>
    <CustomInput placeholder="Username" value={username} setValue={setUsername}></CustomInput>
    {usernameerror && <Text>{usernameerror}</Text>}

    <CustomInput placeholder="Email" value={email} setValue={setEmail}></CustomInput>
    {emailerror && <Text>{emailerror}</Text>}

    <CustomInput secureTextEntry={true} placeholder="Password" value={password} setValue={setPassword}></CustomInput>
    <CustomInput secureTextEntry={true} placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat}></CustomInput>
    {passworderror && <Text>{passworderror}</Text>}
    <Text style={{padding: 5, fontSize: 18, fontWeight: 'bold', color: 'black'}}>Account Type</Text>
    <CustomDropDown onValueChange={handleValueChange}></CustomDropDown>
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