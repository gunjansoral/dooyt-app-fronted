import { StyleSheet, Text, TouchableOpacity } from "react-native";

const PrimaryButton = ({ style, text, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
      {icon}
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
    paddingHorizontal: 16,
    width: '100%'
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
  }
});

export default PrimaryButton;
