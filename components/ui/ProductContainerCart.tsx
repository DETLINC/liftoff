import * as React from "react";
import { View, Image } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";

interface ProductContainerCartProps {
  imageUrl: any;
}

const ProductContainerCart = ({ imageUrl }: ProductContainerCartProps) => {
  return (
    <View className="w-[100px] h-[90px]">
      {/* SVG Background */}
      <View className="absolute">
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={90}
          fill="none"
          viewBox="0 0 100 90"
          preserveAspectRatio="xMidYMid slice"
        >
          <Rect width={100} height={90} fill="url(#a)" rx={20} />
          <Rect
            width={99}
            height={89}
            x={0.5}
            y={0.5}
            stroke="url(#b)"
            strokeOpacity={0.2}
            rx={19.5}
            style={{
              mixBlendMode: "overlay",
            }}
          />
          <Defs>
            <LinearGradient
              id="a"
              x1={82.002}
              x2={20.002}
              y1={90}
              y2={0}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#363E51" />
              <Stop offset={1} stopColor="#4C5770" />
            </LinearGradient>
            <LinearGradient
              id="b"
              x1={10.606}
              x2={65.081}
              y1={2.466}
              y2={45.848}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#fff" />
              <Stop offset={1} />
            </LinearGradient>
          </Defs>
        </Svg>
      </View>

      {/* Image Content */}
      <View className="flex-1 items-center justify-center">
        <Image
          source={imageUrl}
          style={{
            width: 80,
            height: 80,
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default ProductContainerCart;
