import * as React from "react";
import { View } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";

const SubtractContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="w-10 h-11">
      {/* SVG Background */}
      <View className="absolute">
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={35}
          height={40}
          fill="none"
          viewBox="0 0 40 40"
        >
          <Rect width={40} height={40} fill="#353F54" rx={8} />
          <Rect
            width={39}
            height={39}
            x={0.5}
            y={0.5}
            stroke="url(#a)"
            strokeOpacity={0.2}
            rx={7.5}
          />
          <Defs>
            <LinearGradient
              id="a"
              x1={2.5}
              x2={19.14}
              y1={2.5}
              y2={23.472}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#fff" />
              <Stop offset={1} />
            </LinearGradient>
          </Defs>
        </Svg>
      </View>

      {/* Icon Content */}
      <View className="flex-1 items-center justify-center">{children}</View>
    </View>
  );
};

export default SubtractContainer;
