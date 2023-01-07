import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const CustomDropDown = ({ onValueChange }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Donor');

    const handleOptionPress = (value) => {
        setSelectedValue(value);
        setModalVisible(false);
        onValueChange(value);
      };
  
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.selectedText}>{selectedValue}</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.innertext}>Account Type:</Text>
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress('Donor')}
              >
                <Text style={styles.optionText}>Donor</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress('Beneficiary')}
              >
                <Text style={styles.optionText}>Beneficiary</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      padding: 20,
      width: 200
    },
    selectedText: {
      fontSize: 20,
    },
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderWidth: 1,
      borderColor: 'black',

    },
    innerContainer: {
      width: 300,
      height: 200,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'black',


    },
    option: {
      height: 50,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      borderWidth: 1,
      borderColor: 'black',

    },
    innertext: {
        fontSize: 20
      },
    optionText: {
      fontSize: 20,
    },})

export default CustomDropDown