import { View, Text } from "react-native";
import BackGroundSvg from "../../components/icons/tabBar/BG";

export default function index() {
  return (
    <View className="flex-1 bg-background">
      <View className="absolute right-0 bottom-0" pointerEvents="none">
        <BackGroundSvg />
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-2xl">Index Screen</Text>
      </View>
    </View>
  );
}