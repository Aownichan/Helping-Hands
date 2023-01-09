import { View, ImageBackground, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/3.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DonorDonateScreen = () => {

  const [emailval, setemailval] = useState('')
  const [passval, setpassval] = useState('')
  const [nameval, setnameval] = useState('')
  const [typeval, settypeval] = useState('')



  useEffect(() => {
    userData();
  }, []);
  
  const userData = async () => {
    const emailval = await AsyncStorage.getItem('@store_email')
      const passval = await AsyncStorage.getItem('@store_pass')
      const typeval = await AsyncStorage.getItem('@store_type')
      const nameval = await AsyncStorage.getItem('@store_name')

      setemailval(emailval)
      setpassval(passval)
      setnameval(nameval)
      settypeval(typeval)


    }
    const {height} = useWindowDimensions()
    
      const onBackPressed = () => {

        if(typeval === 'Donor'){
        navigation.navigate('DonorHome')
        }
        else{
          navigation.navigate('BeneficiaryHome')
        }
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
    <Text style={styles.simpletext}>Username: {nameval}</Text>
    <Text style={styles.simpletext}>Email: {emailval}</Text>
    <Text style={styles.simpletext}>Password: {passval}</Text>
    

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