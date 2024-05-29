import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';

const OtpInput = ({ numberOfDigits, onOtpChange }) => {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < numberOfDigits - 1) {
      inputRefs.current[index + 1].focus();
    }

    const otpString = newOtp.join('');
    if (otpString.length === numberOfDigits) {
      onOtpChange(otpString);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {otp.map((_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={otp[index]}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
          onSubmitEditing={() => {
            if (index < numberOfDigits - 1 && otp[index] !== '') {
              inputRefs.current[index + 1].focus();
            }
          }}
        />
      ))}
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  input: {
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#dce2ef",
    borderWidth: 2,
    flex: 1,
    maxWidth: 50,
    height: 60,
    fontSize: 24,
    textAlign: "center",
  },
});
