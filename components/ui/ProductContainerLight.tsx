import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { ProductCardProps } from "../../types";
import FavoriteIcon from "../icons/FavoriteIcon";

const ProductContainerLight = ({
  name,
  price,
  category,
  imageUrl,
  isFavorite = false,
  onPress,
  onFavoriteToggle,
}: ProductCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className="w-[165px] h-[215px] opacity-95 -mt-7"
    >
      <View className="h-[205px]">
        <View className="absolute">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={165}
            height={215}
            fill="none"
            viewBox="0 0 165 215"
            preserveAspectRatio="xMidYMid slice"
          >
            <Path
              fill="url(#a)"
              fillOpacity={0.6}
              d="M0 35.722c0-10.115 7.552-18.637 17.593-19.855l125-15.151C154.506-.728 165 8.571 165 20.571v158.707c0 10.115-7.552 18.637-17.593 19.855l-125 15.151C10.494 215.728 0 206.429 0 194.429V35.722Z"
            />
            <Path
              stroke="url(#b)"
              strokeOpacity={0.2}
              strokeWidth={2}
              d="M142.714 1.709C154.031.337 164 9.171 164 20.57v158.708c0 9.609-7.175 17.705-16.714 18.862l-125 15.151C10.97 214.663 1 205.83 1 194.43V35.722c0-9.61 7.175-17.705 16.714-18.862l125-15.151Z"
            />
            <Defs>
              <LinearGradient
                id="a"
                x1={46}
                x2={76.931}
                y1={53.851}
                y2={158.073}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#363E51" />
                <Stop offset={1} stopColor="#191E26" />
              </LinearGradient>
              <LinearGradient
                id="b"
                x1={17.5}
                x2={131.225}
                y1={4}
                y2={65.412}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#fff" />
                <Stop offset={1} />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
        {/* Content */}
        <View className="flex-1 px-4 pt-4 justify-evenly">
          <View className="items-end">
            <TouchableOpacity onPress={onFavoriteToggle} activeOpacity={0.7}>
              <FavoriteIcon white={true} />
            </TouchableOpacity>
          </View>

          <View className="justify-center items-center">
            <Image
              source={imageUrl}
              className="w-[120px] h-[85px]"
              resizeMode="contain"
            />
          </View>

          <View>
            <Text className="text-white opacity-60 font-poppins-medium text-xs mb-1">
              {category}
            </Text>
            <Text className="text-white font-poppins-bold text-[15px] leading-tight">
              {name}
            </Text>
            <Text className="text-white opacity-60 text-sm font-semibold">
              $ {price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductContainerLight;
