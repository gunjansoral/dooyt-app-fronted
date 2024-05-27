import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PrimaryButton = ({ style, text, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.iconWrapper}>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    height: 66,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 16,
    width: '100%',
    gap: 8
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 24,
    height: 24,
  }
});

export default PrimaryButton;
