import { View,ImageBackground, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../Components/CustomInputs/CustomInput';
import background from '../../../Assets/Images/4.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';

const BeneficiaryLoanScreen = () => {
  const [fname, setFName] = useState('')
  const [totalamount, setTotalAmount] = useState('')
  const [totalamounterror, setTotalAmountError] = useState('')
  const regex = /^\d+$/;

  const today = new Date();
  const FIREBASE_API_ENDPOINT='https://mad-db-91771-default-rtdb.asia-southeast1.firebasedatabase.app/'

  const onSubmitClick = async () => {
      if (!regex.test(totalamount) || totalamount <=0 || totalamount > 9999) {
        setTotalAmountError('Invalid amount entered (range: 1-9999)');
      }
      else if(fname === '' || totalamount === ''){
        alert("Please enter both fields")
      }
      else{
      setTotalAmountError('')
  
      fetch(`${FIREBASE_API_ENDPOINT}/requestLoans.json`, {
        method: 'POST',
        body: JSON.stringify({
  
  
          name: fname,
          amount:totalamount,
          date: today.toDateString(),
          type: "Loan"
  
    
        })
  
      });
      try {
        await AsyncStorage.setItem('@store_fnameLoan', "Full Name: "+fname+"\n")
        await AsyncStorage.setItem('@store_totalamountLoan', "Total Amount: "+totalamount+"\n")
        await AsyncStorage.setItem('@store_datebenifLoan', "Date: "+today.toDateString())
        await AsyncStorage.setItem('@store_reqtypeLoan', "Type: Loan \n")

        const fnameLoan = await AsyncStorage.getItem('@store_fnameLoan')
        const totalamountLoan =  await AsyncStorage.getItem('@store_totalamountLoan')
         const dateBenifLoan = await AsyncStorage.getItem('@store_datebenifLoan')
        const reqtypeLoan = await AsyncStorage.getItem('@store_reqtypeLoan')


   console.log(fnameLoan,totalamountLoan, dateBenifLoan, reqtypeLoan)
  
      } catch (e) {
        
      }
  
      alert("Loan Request made!")
      setFName('')
      setTotalAmount('')
      navigation.navigate("BeneficiaryHome")
      }
    };
    const {height} = useWindowDimensions()
    
      const onBackPressed = () => {
        navigation.navigate('BeneficiaryHome')
      }

      const navigation = useNavigation()

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
    <Text style={styles.title}>Loan Request Portal</Text>
    <CustomInput placeholder="Enter Full Name" value={fname} setValue={setFName}></CustomInput>
    <CustomInput placeholder="Enter Amount" value={totalamount} setValue={setTotalAmount}></CustomInput>
    {totalamounterror ? <Text>{totalamounterror}</Text> : null}
    <CustomButton text="Submit" onPress={onSubmitClick}></CustomButton>
    <CustomButton type="LINK" text="Back" onPress={onBackPressed}></CustomButton>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default BeneficiaryLoanScreen


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