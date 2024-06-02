import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../../context/ThemeContext";
import CustomTextInput from "../../components/inputs/CustomTextInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { ProfileContext } from "../../context/ProfileContext";
import expertImg from "../../assets/Expert_icon.png";
import spaceImg from "../../assets/Space_icon.png";

const WhoAreYou = () => {
  const { theme } = useContext(ThemeContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const navigation = useNavigation();

  const [spaceCode, setSpaceCode] = useState("");

  const handleRegisterNowPress = () => {
    Linking.openURL("https://www.dooyt.com");
  };

  const handleContinue = () => {
    console.log("Space code entered:", spaceCode);
    setProfile({ ...profile, spaceCode });
    // Navigate to EnterSpaceTitle screen
    navigation.navigate("EnterSpaceTitle", { spaceCode });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../../assets/icons/chevron_big_left.png")} />
        </TouchableOpacity>

        <View style={styles.mid}>
          <Text style={styles.title(theme)}>Who Are You</Text>
          <Text style={styles.subTitle(theme)}>
            Enter your information to start using the Dooyt App
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate("EnterSpaceCode")}>
          <Image source={spaceImg}></Image>
          <Text>Space</Text>
        </TouchableOpacity>

        <View>
          <Image source={expertImg}></Image>
          <Text>Expert</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WhoAreYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 14,
    width: "100%",
    justifyContent: "space-between",
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
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  }),
  subTitle: (theme) => ({
    color: theme.colors.textSecondary,
    fontWeight: "400",
    fontSize: 16,
  }),
  bottomText: (theme) => ({
    color: theme.colors.textPrimary,
    fontSize: 14,
    marginTop: 10,
  }),
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  bottom: {
    gap: 24,
    alignItems: "center",
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
    color: "#979797",
  },
  termsConditions: {
    color: "#f65f3e",
  },
  byGivingYourContainer: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "PlusJakartaSans-Medium",
    textAlign: "center",
  },
});
