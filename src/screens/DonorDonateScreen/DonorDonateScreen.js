import { View, ImageBackground, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import background from '../../../Assets/Images/4.jpg'
import CustomInput from '../../Components/CustomInputs/CustomInput'
import CustomDropDown from '../../Components/CustomDropDown'
import CustomDropDown2 from '../../Components/CustomDropDown2'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DonorDonateScreen = () => {
  const [donationAmount, setAmount] = useState('')
  const [donationAmountError, setAmountError] = useState('')

  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  const regex2 = /^\d+$/;

  const [paymentTypeValue, setSelectedValue] = useState('Visa');
  const today = new Date();
  const FIREBASE_API_ENDPOINT='https://mad-db-91771-default-rtdb.asia-southeast1.firebasedatabase.app/'


  
  const onDonateClick = async () => {
  const nameval = await AsyncStorage.getItem('@store_name')
    if (!regex.test(cardNumber)) {
      setCardNumberError('Invalid card number');
    }
    else if(donationAmount === '' || donationAmount <= 0 || donationAmount > 9999 || !regex2.test(donationAmount)){
      setAmountError('Invalid amount entered (range: 1-9999)')
    }
    else{
    setCardNumberError('');
    setAmountError('')

    fetch(`${FIREBASE_API_ENDPOINT}/donations.json`, {
      method: 'POST',
      body: JSON.stringify({


        name: nameval,
        amount:donationAmount,
        card: cardNumber,
        method: paymentTypeValue,
        date: today.toDateString(),

  
      })

    });
    try {
      await AsyncStorage.setItem('@store_amount', "Amount: $"+donationAmount+"\n")
      await AsyncStorage.setItem('@store_card', cardNumber+"\n")
      await AsyncStorage.setItem('@store_method', "Method: "+paymentTypeValue+"\n")
      await AsyncStorage.setItem('@store_date', "Date: "+today.toDateString())


  

    } catch (e) {
      
    }

    alert("Donation made!")
    setAmount('')
    setCardNumber('')
    navigation.navigate("DonorHome")
    }
  };
    const {height} = useWindowDimensions()
    
      const onBackPressed = () => {
        navigation.navigate('DonorHome')
      }

      const navigation = useNavigation()

      const handleValueChange = (value) => {
        setSelectedValue(value);
      };

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
    <Text style={styles.title}>Payment Portal</Text>
    <CustomInput placeholder="Donation Amount ($)" value={donationAmount} setValue={setAmount}></CustomInput>
    {donationAmountError ? <Text>{donationAmountError}</Text> : null}
    <CustomInput placeholder="Credit Card Number" value={cardNumber} setValue={setCardNumber}></CustomInput>
    <Text>Format: XXXX-XXXX-XXXX-XXXX</Text>
    {cardNumberError ? <Text>{cardNumberError}</Text> : null}
    <Text style={{padding: 5, fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 50}}>Payment Method:</Text>
    <CustomDropDown2 onValueChange={handleValueChange}></CustomDropDown2>
    <Text></Text>
    <Text></Text>

    <CustomButton type="PRIMARY" text="Donate" onPress={onDonateClick}></CustomButton>
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
    },
  });