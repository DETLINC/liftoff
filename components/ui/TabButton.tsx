import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Rectangle from "../icons/tabBar/Rectangle";

interface TabButtonProps {
  children: React.ReactNode;
  focused: boolean;
}

export function TabButton({ children, focused }: TabButtonProps) {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withSpring(focused ? 1 : 0),
    transform: [{ scale: withSpring(focused ? 1 : 0.95) }],
  }));

  if (!focused) {
    return <View className="pt-10">{children}</View>;
  }

  return (
    <View className="relative">
      <Animated.View
        className="shadow-xl shadow-black/30"
        style={animatedStyle}
      >
        <Rectangle children={children} />
      </Animated.View>
    </View>
  );
}
