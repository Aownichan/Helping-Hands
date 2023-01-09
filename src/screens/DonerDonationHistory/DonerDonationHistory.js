import { View, ImageBackground, ScrollView, Button,Text, Image, StyleSheet, useWindowDimensions, FlatList } from 'react-native'
import React, {useState,useEffect} from 'react'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Table, Row, Rows } from 'react-native-table-component';
import background from '../../../Assets/Images/4.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
//import { Button } from 'react-native-paper';

const DonorDonateScreen = () => {

  const [data, setData] = useState([])
  


  const FIREBASE_API_ENDPOINT='https://mad-db-91771-default-rtdb.asia-southeast1.firebasedatabase.app/'

  

  

  // useEffect(() => {
  //   getComments();
  // }, []);

  const load = async () => {
    const amount = await AsyncStorage.getItem('@store_amount')
  const card =  await AsyncStorage.getItem('@store_card')
  const method = await AsyncStorage.getItem('@store_method')
  const nameval = await AsyncStorage.getItem('@store_name')
  const date = await AsyncStorage.getItem('@store_date')

  const ddata = [amount, method, date]


    try {
      const response = await fetch(`${FIREBASE_API_ENDPOINT}/donations.json`);
      const json = await response.json();
      const Sjson=json;
      setData(ddata);
    } catch (error) {
      console.error(error);
    }
  };
    
    const {height} = useWindowDimensions()
    
      const onBackPressed = () => {
        navigation.navigate('DonorHome')
      }

      const navigation = useNavigation()
      

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <View style={styles.root} >
    <Text style={styles.title}>Your Donation History</Text>
    <Text style={styles.grid}>{data}</Text>
    <CustomButton text='Get History' type="PRIMARY" onPress={()=>{load()}}/>
    <View style={{ marginTop: 1 }}> 
    </View>
    <CustomButton type="LINK" text="Back" onPress={onBackPressed}></CustomButton>
    </View>
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
    txt1: {
      padding: 5,
      color: '#6495ED'
  },
  FList: {
      
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