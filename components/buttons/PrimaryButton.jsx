import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PrimaryButton = ({ style, text, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button(style.backgroundColor)}
      onPress={onPress}
    >
      <Text style={styles.text(style.color)}>{text}</Text>
      {icon}
      {/* Use SvgUri to display SVG images */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: backgroundColor => ({
    borderRadius: 50,
    backgroundColor,
    // flex: 1,
    width: "100%",
    height: 66,
    justifyContent: "center",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  }),
  text: color => ({
    fontSize: 18,
    fontWeight: "700",
    // fontFamily: "PlusJakartaSans-Bold",
    color,
    textAlign: "center"
  })
})

export default PrimaryButton;
