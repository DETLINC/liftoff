import * as React from "react";
import { View } from "react-native";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
interface RectangleProps {
  children: React.ReactNode;
}
const Rectangle = ({ children }: RectangleProps) => {
  return (
    <View className="justify-center items-center">
      <Svg width={80} height={70} viewBox="30 10 60 56" fill="none">
        <Path
          fill="url(#b)"
          d="M30 28.198a10 10 0 0 1 8.039-9.806l40-8C84.227 9.155 90 13.888 90 20.198v27.604a10 10 0 0 1-8.039 9.806l-40 8C35.773 66.845 30 62.112 30 55.802V28.198Z"
        />
        <Path
          stroke="url(#c)"
          strokeOpacity={0.6}
          d="M78.137 10.883c5.878-1.176 11.363 3.32 11.363 9.315v27.604a9.5 9.5 0 0 1-7.637 9.315l-40 8c-5.878 1.176-11.363-3.32-11.363-9.315V28.198a9.5 9.5 0 0 1 7.637-9.315l40-8Z"
        />
        <Defs>
          <LinearGradient
            id="b"
            x1={89}
            x2={130.791}
            y1={-21.5}
            y2={59.543}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#34C8E8" />
            <Stop offset={1} stopColor="#4E4AF2" />
          </LinearGradient>
          <LinearGradient
            id="c"
            x1={86}
            x2={120.075}
            y1={-21.5}
            y2={50.73}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#fff" />
            <Stop offset={1} />
          </LinearGradient>
        </Defs>
      </Svg>
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
};
export default Rectangle;
