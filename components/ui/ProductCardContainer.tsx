import * as React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { ProductCardProps } from "../../types";
import FavoriteIcon from "../icons/FavoriteIcon";

const ProductCardContainer = ({
  name,
  price,
  category,
  imageUrl,
  isFavorite = false,
  onPress,
  onFavoriteToggle,
}: ProductCardProps) => {
      console.log(imageUrl)

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className="w-[160px] h-[220px] opacity-95"
    >
      <View className="h-[220px]">
        <View className="absolute">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={285}
            height={376}
            fill="none"
            viewBox="60 60 285 376"
            preserveAspectRatio="xMidYMid slice"
          >
            <G filter="url(#a)">
              <Path
                fill="url(#b)"
                d="M60 95.722c0-10.115 7.552-18.637 17.593-19.854l125-15.152C214.506 59.272 225 68.571 225 80.571v179.707c0 10.115-7.552 18.637-17.593 19.855l-125 15.151C70.494 296.728 60 287.429 60 275.429V95.722Z"
              />
              <Path
                stroke="url(#c)"
                strokeOpacity={0.2}
                strokeWidth={2}
                d="M202.714 61.709C214.031 60.337 224 69.171 224 80.57v179.708c0 9.609-7.175 17.705-16.714 18.862l-125 15.151C70.97 295.663 61 286.83 61 275.43V95.722c0-9.61 7.175-17.705 16.714-18.862l125-15.151Z"
              />
            </G>
            <Defs>
              <LinearGradient
                id="b"
                x1={119.5}
                x2={155.716}
                y1={121.734}
                y2={262.72}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#353F54" />
                <Stop offset={1} stopColor="#222834" />
              </LinearGradient>
              <LinearGradient
                id="c"
                x1={78.5}
                x2={208.663}
                y1={66.963}
                y2={154.6}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#fff" />
                <Stop offset={0.845} />
                <Stop offset={1} />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>

        {/* Content */}
        <View className="flex-1 px-4 pt-4 justify-around">
          {/* Heart - Top Right */}
          <View className="items-end">
            <TouchableOpacity onPress={onFavoriteToggle} activeOpacity={0.7}>
              <FavoriteIcon />
            </TouchableOpacity>
          </View>

          {/* Bike Image - Center */}
          <View className="justify-center">
            <Image
              source={imageUrl}
              className="w-[130px] h-[95px]"
              resizeMode="contain"
            />
          </View>

          {/* Product Info - Bottom */}
          <View className="">
            <Text className="text-white opacity-60 font-poppins-medium text-xs font-normal mb-1">
              {category}
            </Text>
            <Text className="text-white font-poppins-bold leading-tight text-[15px]">
              {name}
            </Text>
            <Text className="text-white opacity-60 text-sm font-semibold">
              $ {price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardContainer;
