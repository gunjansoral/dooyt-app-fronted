import React, { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Animated } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from "../context/ThemeContext";

const NextButton = ({ percentage, onPressNext }) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const animatedValue = useRef(new Animated.Value(0)).current;

  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [percentage]);

  useEffect(() => {
    animatedValue.addListener((value) => {
      const strokeDashoffset = circumference - (circumference * value.value) / 100;
      setStrokeDashoffset(strokeDashoffset);
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, []);

  const handleNextPress = () => {
    if (onPressNext) {
      onPressNext(); // Call the onPressNext function provided as prop
    }
  };

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#E6E7E8"
            fill="none"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            fill="none"
            stroke={theme.colors.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </G>
      </Svg>
      <TouchableOpacity
        style={styles.button(theme)} // Pass the theme to the button style function
        activeOpacity={0.6}
        onPress={handleNextPress}
      >
        <Icon name="arrow-right" size={32} strokeWidth={1} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: (theme) => ({ // Define a function that takes the theme as a parameter
    position: "absolute",
    backgroundColor: theme.colors.primary, // Access the theme directly
    borderRadius: 180,
    padding: 20,
  }),
});

export default NextButton;
