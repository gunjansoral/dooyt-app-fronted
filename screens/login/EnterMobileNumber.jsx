import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { ProfileContext } from '../../context/ProfileContext';
import PhoneNumberInput from '../../components/inputs/PhoneNumberInput';

const EnterMobileNumber = () => {
  const { theme } = useContext(ThemeContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleContinue = () => {
    console.log('Phone number entered:', phoneNumber);
    setProfile({ ...profile, phoneNumber });
    // Navigate to EnterVerification screen
    navigation.navigate('EnterVerification');
  };

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
  };

  const handleValidityChange = (isValid) => {
    setIsButtonEnabled(isValid);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/chevron_big_left.png')} />
        </TouchableOpacity>

        <View style={styles.mid}>
          <Text style={styles.title(theme)}>Enter Your Mobile Number</Text>
          <Text style={styles.subTitle(theme)}>
            Enter your mobile number to start using Dooyt App.
          </Text>
          <PhoneNumberInput
            onChangeText={handlePhoneNumberChange}
            onValidityChange={handleValidityChange}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <PrimaryButton
          text="Continue"
          style={[styles.bottomButton(theme), isButtonEnabled ? styles.enabledButton : styles.disabledButton]}
          icon={<Image source={require('../../assets/icons/arrow-right.png')} />}
          onPress={handleContinue}
          disabled={!isButtonEnabled}
        />
        <Text style={styles.byGivingYourContainer}>
          <Text style={styles.byGivingYour}>{`By giving your information, you agree to our `}</Text>
          <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
          <Text style={styles.byGivingYour}>{` and `}</Text>
          <Text style={styles.termsConditions}>Privacy Policy</Text>
          <Text style={styles.byGivingYour}>.</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EnterMobileNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 14,
    width: '100%',
    justifyContent: 'space-between',
  },
  top: {
    gap: 10,
  },
  mid: {
    gap: 15,
  },
  backButton: {
    marginBottom: 20,
  },
  title: (theme) => ({
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  }),
  subTitle: (theme) => ({
    color: theme.colors.textSecondary,
    fontWeight: '400',
    fontSize: 16,
  }),
  bottomText: (theme) => ({
    color: theme.colors.textPrimary,
    fontSize: 14,
    marginTop: 10,
  }),
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  bottom: {
    gap: 24,
    alignItems: 'center',
  },
  bottomButton: (theme) => ({
    borderRadius: 33,
    paddingHorizontal: 16,
    height: 66,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  }),
  enabledButton: {
    backgroundColor: 'orange',
  },
  disabledButton: {
    backgroundColor: "#d3d3d3",
  },
  byGivingYour: {
    color: '#979797',
  },
  termsConditions: {
    color: '#f65f3e',
  },
  byGivingYourContainer: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'PlusJakartaSans-Medium',
    textAlign: 'center',
  },
});
