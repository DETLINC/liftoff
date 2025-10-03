import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Header from "../../components/ui/Header";
import BackGroundSvg from "../../components/icons/tabBar/BG";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import PaginationDot from "../../components/ui/Dot";
import { useCallback, useState } from "react";
import ImageCarousel from "../../components/ui/ImageCarousal";
import SkeuomorphicButton from "../../components/ui/SkeuomorphicButton";
import GradientButton from "../../components/ui/GradientButton";
import AddToCartBottomContainer from "../../components/ui/AddToCartBottomContainer";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const router = useRouter();
  const { id, name, imageUrl, price } = useLocalSearchParams();
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<"description" | "specification">(
    "description"
  );

  const images = [imageUrl, imageUrl, imageUrl];

  // Shared value to track scroll position

  return (
    <View className="flex-1 bg-background">
      <View className="absolute right-0 -top-10" pointerEvents="none">
        <BackGroundSvg />
      </View>
      <View className="px-4">
        <Header title={name} showBack onBackPress={() => router.back()} />
      </View>
      <View className="w-full  flex-[.4]">
        <ImageCarousel images={images} />
      </View>

      {/* <ProductBottomSheet /> */}
      <View className="relative flex-[.6] rounded-t-[30px] bottom-0 bg-[#353F54] shadow-2xl border-2 border-[#3D4860]">
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(34,40,52,0.6)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 100, y: 5 }}
          className="absolute inset-0 rounded-t-[30px]"
        />

        <View className="flex flex-row justify-evenly mt-[30px] gap-[30px] p-4">
          <SkeuomorphicButton
            title="Description"
            isActive={activeTab === "description"}
            onPress={() => setActiveTab("description")}
          />
          <SkeuomorphicButton
            title="Specification"
            isActive={activeTab === "specification"}
            onPress={() => setActiveTab("specification")}
          />
          2
        </View>
        <View className="mt-[30px] gap-4 p-4">
          <Text className="font-poppins-bold text-white text-lg">{name}</Text>
          <Text className="opacity-60 text-white text-[15px]">
            The LR01 uses the same design as the most iconic bikes from PEUGEOT
            Cycles' 130-year history and combines it with agile, dynamic
            performance that's perfectly suited to navigating today's cities. As
            well as a lugged steel frame and iconic PEUGEOT black-and-white
            chequer design, this city bike also features a 16-speed Shimano
            Claris drivetrain.
          </Text>
        </View>

        <View className=" bottom-0 w-full">
          <View className="relative bottom-0">
            <AddToCartBottomContainer />
            <View className="absolute inset-0 -mt-5 flex-row items-center justify-between px-10">
              <Text className="text-2xl text-[#3D9CEA] font-poppins-bold">
                $ {price}
              </Text>
              <GradientButton
                style={{
                  paddingHorizontal: 40,
                  paddingVertical: 14,
                  borderRadius: 12,
                  width: 160,
                }}
                animated={true}
                onPress={() => {
                  addItem({
                    id: id,
                    name: name,
                    price: price,
                    image: images[0],
                  });
                  setTimeout(() => {
                    router.push({ pathname: "/MyCart/Cart" });
                  }, 500);
                }}
              >
                <Text className="text-white font-poppins-semibold text-base">
                  Add to Cart
                </Text>
              </GradientButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
