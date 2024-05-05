import { useContext } from "react";
import { StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  const { theme } = useContext(ThemeContext)

  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
      <View style={{ flex: 0.3 }} >
        <Text style={styles.title(theme)}>{item.title}</Text>
        <Text style={styles.description(theme)}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 0.7,
    justifyContent: 'center'
  },
  title: (theme) => ({
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: theme.colors.textPrimary,
    textAlign: 'center'
  }),
  description: (theme) => ({
    fontWeight: '300',
    paddingHorizontal: 64,
    color: theme.colors.textSecondary,
    textAlign: 'center'
  })
})

export default OnboardingItem;