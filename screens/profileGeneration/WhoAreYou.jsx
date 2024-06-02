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
    navigation.navigate("EnterSpaceTitle", { spaceCode });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/icons/chevron_big_left.png")}
            style={styles.backButtonIcon}
          />
        </TouchableOpacity>

        <View style={styles.mid}>
          <Text style={styles.title(theme)}>Who Are You?</Text>
          <Text style={styles.subTitle(theme)}>
            Enter your information to start using the Dooyt App
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EnterSpaceCode")}
          style={styles.card(theme)}
        >
          <Image source={spaceImg} style={styles.cardImage} />
          <Text style={styles.imageName(theme)}>Space</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("EnterYourName")}
          style={styles.card(theme)}
        >
          <Image source={expertImg} style={styles.cardImage} />
          <Text style={styles.imageName(theme)}>Expert</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WhoAreYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  top: {
    marginBottom: 20,
  },
  mid: {
    // alignItems: "center",
    gap: 15,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backButtonIcon: {
    width: 24,
    height: 24,
    tintColor: "#000",
  },
  title: (theme) => ({
    fontSize: 28,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  }),
  subTitle: (theme) => ({
    color: theme.colors.textSecondary,
    fontWeight: "400",
    fontSize: 16,
    // textAlign: "center",
    // marginHorizontal: 20,
  }),
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  card: (theme) => ({
    alignItems: "center",
  }),
  cardImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  imageName: (theme) => ({
    fontSize: 24,
    fontWeight: "700",
    color: theme.colors.textPrimary,
  }),
});
