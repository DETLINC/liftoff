import * as React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";

interface PromoBannerProps {
  ImageUrl: any;
  discount: string;
}

const PromoBanner = ({ ImageUrl, discount }: PromoBannerProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.99}
      onPress={() => console.log("main-bike")}
      className="opacity-95"
    >
      {/* SVG Background */}
      <Svg
        width="100%"
        height={290}
        viewBox="20 0 355 290"
        preserveAspectRatio="xMidYMid slice"
        fill="nofill"
      >
        <G shapeRendering="crispEdges">
          <Path
            fill="url(#c)"
            d="M20 40c0-11.046 8.954-20 20-20h310c11.046 0 20 8.954 20 20v162.156c0 10.167-7.628 18.716-17.729 19.87l-310 35.429C30.403 258.811 20 249.529 20 237.584V40Z"
          />
          <Path
            stroke="url(#d)"
            strokeOpacity={0.2}
            strokeWidth={2}
            d="M40 21h310c10.493 0 19 8.507 19 19v162.155c0 9.659-7.247 17.781-16.843 18.877l-310 35.429C30.883 257.749 21 248.932 21 237.584V40c0-10.493 8.507-19 19-19Z"
          />
        </G>
        <Defs>
          <LinearGradient
            id="c"
            x1={196.212}
            x2={904.149}
            y1={83.734}
            y2={581.851}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#353F54" />
            <Stop offset={1} stopColor="#222834" />
          </LinearGradient>
          <LinearGradient
            id="d"
            x1={99.242}
            x2={191.249}
            y1={28.963}
            y2={217.494}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#fff" />
            <Stop offset={1} />
          </LinearGradient>
        </Defs>
      </Svg>

      <Image
        source={ImageUrl}
        className="absolute w-[326px] h-[153px] top-8 left-1/2"
        style={{ marginLeft: -170 }}
        resizeMode="cover"
      />

      {/* Text - Bottom Left */}
      <Text
        className="absolute bottom-10 left-5 text-white text-4xl"
        style={{ fontFamily: "Poppins-Bold", opacity: 0.6 }}
      >
        {discount}
      </Text>
    </TouchableOpacity>
  );
};

export default PromoBanner;
