import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import { slides } from "../data";
import OnboardingItem from "../components/OnboardingItem";
import { useRef, useState } from "react";
import Paginator from "../components/Paginator";
import NextButton from "../components/NextButton";
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const scrollToNextSlide = () => {
    const nextIndex = currentIndex + 1;
    if (slidesRef.current && nextIndex < slides.length) {
      slidesRef.current.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    } else {
      navigation.navigate('Login');  // Use navigation here
    }
  };

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }} >
        <FlatList
          ref={slidesRef}
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          showsHorizontalScrollIndicator
          horizontal
          pagingEnabled
          bounces={false}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          keyExtractor={item => item._id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton percentage={(currentIndex + 1) * (100 / slides.length)} onPressNext={scrollToNextSlide} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Onboarding;