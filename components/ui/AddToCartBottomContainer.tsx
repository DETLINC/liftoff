import * as React from "react";
import { View } from "react-native";
import Svg, { G, Rect, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const AddToCartBottomContainer = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height={184}
        fill="none"
        viewBox="40 40 390 116"
        preserveAspectRatio="xMidYMid meet"
      >
        <G filter="url(#a)">
          <Rect width={390} height={104} x={40} y={50} fill="#262E3D" rx={50} />
          <Rect
            width={388}
            height={100}
            x={41}
            y={51}
            stroke="url(#b)"
            strokeOpacity={0.2}
            strokeWidth={2}
            rx={49}
            style={{
              mixBlendMode: "overlay",
            }}
          />
        </G>
        <Defs>
          <LinearGradient
            id="b"
            x1={235}
            x2={235}
            y1={50}
            y2={122}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#fff" />
            <Stop offset={1} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default AddToCartBottomContainer;
