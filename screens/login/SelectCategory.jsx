import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import CustomTextInput from '../../components/inputs/CustomTextInput'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import SelectButton from '../../components/buttons/SelectButton'
import CategoryList from '../../components/CategoryList'

const SelectCategory = () => {
  const { theme } = useContext(ThemeContext);

  const handleRegisterNowPress = () => {
    // Open the link in the browser when the text is pressed
    Linking.openURL('https://www.dooyt.com');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top} >
        <View style={styles.backButton}>
          <Image source={require('../../assets/icons/chevron_big_left.png')} />
        </View>

        <View style={styles.mid} >
          <Text style={styles.title(theme)}>Select Category</Text>
          <Text style={styles.subTitle(theme)}>
            Select your buisiness category
          </Text>
          <CategoryList />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default SelectCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 14,
    width: '100%',
    gap: 16,
    justifyContent: 'space-between',
  },
  top: {
    gap: 10
  },
  mid: {
    gap: 15
  },
  backButton: {
    marginBottom: 20
  },
  title: (theme) => ({
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textPrimary
  }),
  subTitle: theme => ({
    color: theme.colors.textSecondary,
    fontWeight: '400',
    fontSize: 16
  }),
  bottomText: theme => ({
    color: theme.colors.textPrimary,
    fontSize: 14,
  }),
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});
