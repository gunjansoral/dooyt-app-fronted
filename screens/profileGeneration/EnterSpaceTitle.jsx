import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import CustomTextInput from '../../components/inputs/CustomTextInput'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';

const EnterSpaceTitle = () => {
  const { theme } = useContext(ThemeContext);

  const handleRegisterNowPress = () => {
    // Open the link in the browser when the text is pressed
    Linking.openURL('https://www.dooyt.com');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.backButton}>
          <Image source={require('../../assets/icons/chevron_big_left.png')} />
        </View>

        <View style={styles.mid}>
          <Text style={styles.title(theme)}>Enter Your Space Title</Text>
          <Text style={styles.subTitle(theme)}>
            Enter your information to start using the Dooyt App
          </Text>
          <CustomTextInput placeholder='Your Space Title' />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text="Continue"
            style={styles.bottomButton(theme)}
            icon={<ArrowRightIcon />}
            onPress={() => console.log('pressed')}
          />
        </View>
        <Text style={styles.byGivingYourContainer}>
          <Text style={styles.byGivingYour}>{`By giving your information, you agree to our `}</Text>
          <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
          <Text style={styles.byGivingYour}>{` and `}</Text>
          <Text style={styles.termsConditions}>Privacy Policy</Text>
          <Text style={styles.byGivingYour}>.</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default EnterSpaceTitle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 14,
    width: '100%',
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
  title: theme => ({
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
  bottom: {
    bottom: 20,
    gap: 24
  },
  buttonContainer: {
    // Ensure this container does not stretch the button
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bottomButton: theme => ({
    borderRadius: 33,
    backgroundColor: "#c8c8c8",
    paddingHorizontal: 16,
    height: 66,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  }),
  byGivingYour: {
    color: "#979797"
  },
  termsConditions: {
    color: "#f65f3e"
  },
  byGivingYourContainer: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "PlusJakartaSans-Medium",
    textAlign: "center",
    width: 291,
    height: 37
  }
});
