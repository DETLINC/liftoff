import { View, Text } from "react-native";
import BackGroundSvg from "../../components/icons/tabBar/BG";

export default function Profile() {
  return (
    <View className="flex-1 bg-background items-center justify-center">
      <View className="absolute right-0 bottom-0" pointerEvents="none">
        <BackGroundSvg />
      </View>
      <Text className="text-white text-2xl">Profile Screen</Text>
    </View>
  );
}
