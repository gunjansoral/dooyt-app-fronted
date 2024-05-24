import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import ArrowRight from '../../assets/icons/chevron_right.svg'; // Ensure SVG support

const SelectButton = ({ title, onPress }) => {
  console.log(`Button render check: ${title}`);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <ArrowRight width={24} height={24} fill="#181818" />
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
    // height: '100%'
    // backgroundColor: 'white' // Added for visibility
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "PlusJakartaSans-SemiBold", // Changed to a default system font for testing
    color: "#181818",
    textAlign: "left"
  }
});

export default SelectButton;
