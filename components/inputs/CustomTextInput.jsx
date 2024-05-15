import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: "#DCE2EF",
    borderWidth: 1,
    borderRadius: 14,
    padding: 20,
  },
  textInput: theme => ({
    color: theme.colors.textSecondary,
    fontWeight: '400',
    fontSize: 16
  })
})