import { View,ImageBackground, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Table, Row, Rows } from 'react-native-table-component';
import background from '../../../Assets/Images/1.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';


const BeneficiaryHistoryScreen = () => {
  const [data, setData] = useState([])
  const [loanData, setLoanData] = useState([])
  


  const FIREBASE_API_ENDPOINT='https://mad-db-91771-default-rtdb.asia-southeast1.firebasedatabase.app/'

  

  

  // useEffect(() => {
  //   getComments();
  // }, []);

  const loadDonations = async () => {
    const fname = await AsyncStorage.getItem('@store_fname')
   const totalamount =  await AsyncStorage.getItem('@store_totalamount')
    const dateBenif = await AsyncStorage.getItem('@store_datebenif')
   const reqtype = await AsyncStorage.getItem('@store_reqtype')

  const ddata = [fname, totalamount, reqtype, dateBenif]


    try {
      const response = await fetch(`${FIREBASE_API_ENDPOINT}/requestDonations.json`);
      const json = await response.json();
      const Sjson=json;
      setData(ddata);
    console.log(data)

    } catch (error) {
      console.error(error);
    }
  };

  const loadLoans = async () => {
  const fnameLoan = await AsyncStorage.getItem('@store_fnameLoan')
   const totalamountLoan =  await AsyncStorage.getItem('@store_totalamountLoan')
    const dateBenifLoan = await AsyncStorage.getItem('@store_datebenifLoan')
   const reqtypeLoan = await AsyncStorage.getItem('@store_reqtypeLoan')

   console.log(fnameLoan,totalamountLoan, dateBenifLoan, reqtypeLoan)

  const ddataLoan = [fnameLoan, totalamountLoan, reqtypeLoan, dateBenifLoan]

  try {
    const response = await fetch(`${FIREBASE_API_ENDPOINT}/requestLoans.json`);
    const json = await response.json();
    const Sjson=json;
    setLoanData(ddataLoan);
    console.log(loanData)
  } catch (error) {
    console.error(error);
  }
  }
    
    const {height} = useWindowDimensions()
    
      const onBackPressed = () => {
        navigation.navigate('BeneficiaryHome')
      }

      const navigation = useNavigation()

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
    <Text style={styles.title}>Your Donation/Loan History</Text>
    <CustomButton text='Get Donation History' type="PRIMARY" onPress={()=>{loadDonations()}}/>
    <Text style={styles.grid}>{data}</Text>

    <CustomButton text='Get Loan History' type="PRIMARY" onPress={()=>{loadLoans()}}/>
    <Text style={styles.grid}>{loanData}</Text>
    <CustomButton type="LINK" text="Back" onPress={onBackPressed}></CustomButton>
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default BeneficiaryHistoryScreen

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
    grid: {
      fontSize: 20,
      borderWidth: 1,
      borderColor: 'black',
      padding: 30,
      color: '#6495ED',
      borderRadius: 20
    }
  });