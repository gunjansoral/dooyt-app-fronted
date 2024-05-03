import { StyleSheet, TouchableOpacity } from "react-native";

const GettingStartedButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Get Started</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: "#f65f3e",
    flex: 1,
    width: "100%",
    height: 66
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "PlusJakartaSans-Bold",
    color: "#fff",
    textAlign: "center"
  }
})

export default GettingStartedButton;