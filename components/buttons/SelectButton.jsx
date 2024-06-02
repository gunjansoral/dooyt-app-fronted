import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const SelectButton = ({ title, onPress }) => {
  console.log(`Button render check: ${title}`);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Image style={styles.icon} source={require('../../assets/icons/chevron_right.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderColor: "#DCE2EF",
    borderWidth: 1,
    borderRadius: 14,
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "PlusJakartaSans-SemiBold", // Make sure this font is available or use a default font
    color: "#181818",
    textAlign: "left"
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#181818", // Optional, if you need to colorize the icon
  }
});

export default SelectButton;
