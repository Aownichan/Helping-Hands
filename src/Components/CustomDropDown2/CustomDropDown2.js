import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const CustomDropDown2 = ({ onValueChange }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Visa');

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
                <Text style={styles.innertext}>Payment Method:</Text>
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress('Visa')}
              >
                <Text style={styles.optionText}>Visa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress('MasterCard')}
              >
                <Text style={styles.optionText}>MasterCard</Text>
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
      borderColor: '#051C60',
      borderRadius: 10,
      padding: 20,
      width: 200
    },
    selectedText: {
      fontSize: 20,
      color: "#051C60"
    },
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderWidth: 1,
      borderColor: '#051C60',

    },
    innerContainer: {
      width: 300,
      height: 200,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',


    },
    option: {
      height: 50,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      borderColor: 'black',

    },
    innertext: {
        fontSize: 20,
        color: 'black'
      },
    optionText: {
      fontSize: 20,
      color: "#051C60"
    },})

export default CustomDropDown2