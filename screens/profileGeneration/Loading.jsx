import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import logo from "../../assets/logo/Group.png";
import { Image } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#ff5722" />
      </View>
      <Text style={styles.welcomeText}>Welcome to Dooyt</Text>
      <Text style={styles.subText}>You Are All Set...</Text>
      <Text style={styles.footerText}>Jumping to Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    position: "absolute",
    top: 50,
    fontSize: 36,
    color: "#ff5722",
    fontWeight: "bold",
  },
  spinnerContainer: {
    alignContent: "center", // Adjust the marginTop as needed to position the spinner
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 20,
  },
  subText: {
    fontSize: 16,
    color: "#777777",
    marginTop: 10,
  },
  footerText: {
    position: "absolute",
    bottom: 30,
    fontSize: 14,
    color: "#cccccc",
  },
});

export default Loading;
