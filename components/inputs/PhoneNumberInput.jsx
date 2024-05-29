import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import PhoneInput from 'react-native-phone-number-input';

const PhoneNumberInput = ({ onChangeText }) => {
  const [countryCode, setCountryCode] = useState('US');
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <View style={styles.container}>
      <CountryPicker
        countryCode={countryCode}
        withFilter
        withFlag
        withCountryNameButton={false}
        withAlphaFilter
        withCallingCode
        onSelect={onSelect}
        containerButtonStyle={styles.countryPicker}
      />
      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode={country?.cca2}
        layout="first"
        onChangeFormattedText={onChangeText}
        onChangeText={setPhoneNumber}
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textContainer}
      />
    </View>
  );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  countryPicker: {
    marginRight: 10,
  },
  phoneInputContainer: {
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#dce2ef",
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 66,
    backgroundColor: 'transparent',
  },
  textContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 0,
  },
});
