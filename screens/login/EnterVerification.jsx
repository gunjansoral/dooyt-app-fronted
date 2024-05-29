import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { ProfileContext } from '../../context/ProfileContext';
import OtpInput from '../../components/inputs/OtpInput';

const EnterVerification = () => {
  const { theme } = useContext(ThemeContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const navigation = useNavigation();

  const [otp, setOtp] = useState('');
  const [time, setTime] = useState([0, 0]);

  useEffect(() => {
    const initialTime = convertTimeStringToSeconds("2:35");
    setTime(convertSecondsToTimeArray(initialTime));
  }, []);

  useEffect(() => {
    if (time[0] > 0 || time[1] > 0) {
      const interval = setInterval(() => {
        setTime(prevTime => {
          const totalSeconds = prevTime[0] * 60 + prevTime[1] - 1;
          return convertSecondsToTimeArray(totalSeconds);
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const convertTimeStringToSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  const convertSecondsToTimeArray = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return [minutes, seconds];
  };

  const handleContinue = (text) => {
    setOtp(text);
    console.log('Space code entered:', text);
    // verify api call
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/chevron_big_left.png')} />
        </TouchableOpacity>

        <View style={styles.mid}>
          <Text style={styles.title(theme)}>Enter Your Verification Code</Text>
          <Text style={styles.subTitle(theme)}>
            Enter the OTP sent to your mobile number
            <Text style={styles.phoneNumber(theme)}> {`(${profile.phoneNumber})`}</Text> to proceed.
          </Text>
          <View style={styles.otpContainer} >
            <OtpInput
              numberOfDigits={4} // Specify the number of digits for OTP
              onOtpChange={handleContinue}
            />
          </View>
          <Text style={styles.otpSubheader}>
            {`The OTP is valid for the remaining time of ${time[0]} minutes ${time[1] < 10 ? '0' : ''}${time[1]} seconds.`}
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <PrimaryButton
          text="Continue"
          style={styles.bottomButton(theme)}
          icon={<Image source={require('../../assets/icons/arrow-right.png')} />}
          onPress={() => handleContinue(otp)}
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

export default EnterVerification;

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
  phoneNumber: (theme) => ({
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
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
    backgroundColor: "#c8c8c8",
    paddingHorizontal: 16,
    height: 66,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  }),
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
  otpContainer: {
    alignItems: 'center',
  },
  otpSubheader: {
    fontSize: 14,
    letterSpacing: 0.7,
    lineHeight: 22,
    fontFamily: "PlusJakartaSans-Regular",
    color: "#909090",
    textAlign: "center",
  }
});
