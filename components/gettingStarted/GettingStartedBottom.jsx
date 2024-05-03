import { StyleSheet, Text, View } from "react-native";

const GettingStartedBottom = () => {
  return (
    <View style={styles.rectangleView}>
      <Text style={styles.title}>Set Discounts, Increase Sales</Text>
      <Text style={styles.subTitle}>Set discounts on your own terms and increase store sales.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#fffb",
    flex: 1,
    width: "100%",
    height: 449
  },
  title: {
    fontSize: 36,
    letterSpacing: 0.9,
    textTransform: "capitalize",
    fontWeight: "700",
    // fontFamily: "PlusJakartaSans-Bold",
    color: "#2c2c2c",
    textAlign: "center",
    width: 330
  },
  subTitle: {
    fontSize: 16,
    letterSpacing: 0.8,
    lineHeight: 22,
    fontFamily: "PlusJakartaSans-Regular",
    color: "#909090",
    textAlign: "center",
    width: 305,
    height: 51
  }
});

export default GettingStartedBottom;