import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import CustomTextInput from '../../components/inputs/CustomTextInput'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { SvgUri } from 'react-native-svg';  // Import if using SvgUri


const EnterSpaceCode = () => {
  const { theme } = useContext(ThemeContext);

  const handleRegisterNowPress = () => {
    // Open the link in the browser when the text is pressed
    Linking.openURL('https://www.dooyt.com');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButton}>
        <Image source={require('../../assets/icons/chevron_big_left.png')} />
      </View>
      <Text style={styles.title(theme)}>Enter Your Unique Space Code</Text>
      <Text style={styles.subTitle(theme)}>
        Enter your Unique Space Code provided in your subscription plan
      </Text>
      <CustomTextInput placeholder='Your Space Code' />
      <TouchableOpacity onPress={handleRegisterNowPress}>
        <Text style={styles.bottomText(theme)}>Do you still not have your own unique space code?
          <Text style={styles.linkText}> Register Now on Dooyt.com</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
        <PrimaryButton
          text="Continue"
          style={styles.bottomButton(theme)}
          icon={<SvgUri uri={require('../../assets/icons/arrow-right.svg')} width="24" height="24" />}
        />
      </View>
    </SafeAreaView>
  )
}

export default EnterSpaceCode

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 14,
    width: '100%',
    gap: 16
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
  },
  bottomButton: theme => ({
    borderRadius: 33,
    backgroundColor: "#c8c8c8",
    flex: 1,
    width: "100%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "PlusJakartaSans-Bold",
    color: "#fff",
  })
});
