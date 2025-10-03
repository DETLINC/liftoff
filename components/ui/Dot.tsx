import { Dimensions } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface PaginationDotProps {
  index: number;
  scrollX: Animated.SharedValue<number>;
}

function PaginationDot({ index, scrollX }: PaginationDotProps) {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  const animatedDotStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];

    // Scale animation: active dot is larger

    // Opacity animation: active dot is fully opaque
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.2, 1, 0.2],
      Extrapolation.CLAMP
    );

    return {
      opacity,
    };
  });

  return (
    <>
      <Animated.View
        style={animatedDotStyle}
        className="w-[5.38px] h-[5.38px] rounded-full bg-white"
      />
    </>
  );
}

export default PaginationDot;
