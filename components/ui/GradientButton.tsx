import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface GradientButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  size?: number;
  colors?: string[];
  style?: ViewStyle;
  animated?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  onPress,
  children,
  size = 48,
  colors = ["#34C8E8", "#4E4AF2"],
  style,
  animated = false,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    if (animated) {
      scale.value = withSpring(0.8, {
        // damping: 5,
        stiffness: 150,
      });
    }
  };

  const handlePressOut = () => {
    if (animated) {
      scale.value = withSpring(1, {
        // damping: 105,
        stiffness: 150,
      });
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.shadow}
      className="shadow-2xl"
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={animated ? animatedStyle : undefined}>
        <LinearGradient
          style={[
            {
              borderRadius: 10,
              width: style ? style : size,
              height: size,
              alignItems: "center",
              justifyContent: "center",
            },
            style,
          ]}
          colors={colors}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1.2 }}
        >
          {children}
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default GradientButton;
