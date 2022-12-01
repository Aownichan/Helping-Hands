import { View, ImageBackground, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Table, Row, Rows } from 'react-native-table-component';
import background from '../../../Assets/Images/4.jpg'

const DonorDonateScreen = () => {
    const header = ['Donation Date', 'Donation Amount']
        const data = [
            ['25/2/2021', '$100'],
            ['18/8/2021', '$50'],
            ['5/1/2022', '$80']
      
        ]
    
    const {height} = useWindowDimensions()
    
      const onBackPressed = () => {
        navigation.navigate('DonorHome')
      }

      const navigation = useNavigation()

  return (
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.root} >
    <Text style={styles.title}>Your Donation History</Text>
    <View style={{ marginTop: 30 }}>
        <Text>--------------------------------------------------------------------------</Text>
            <Table borderStyle={{ borderWidth: 2, 
                borderColor: '#c8e1ff' }}>
                <Row data={header} />
                <Rows data={data} />
            </Table>
            
        </View>
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