import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text , styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY:{
        backgroundColor: '#d21404',
    },

    container_SECONDARY:{
      borderColor: '#d21404',
      borderWidth: 2,
  },
    container_LINK:{},

    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_LINK: {
        color: 'gray',
    },
    text_SECONDARY: {
      color: '#d21404',
  },
})