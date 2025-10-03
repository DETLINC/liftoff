import * as React from "react";
import { View } from "react-native";
import Svg, { G, Rect, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

interface ProductBottomSheetProps {
  children: React.ReactNode;
}

const ProductBottomSheet = ({ children }: ProductBottomSheetProps) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height={570}
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 80 510 50"
      >
        <G filter="url(#a)">
          <Rect width={390} height={450} x={60} y={80} fill="url(#b)" rx={30} />
          <Rect
            width={388}
            height={448}
            x={61}
            y={81}
            stroke="url(#c)"
            strokeOpacity={0.2}
            strokeWidth={2}
            rx={29}
            style={{
              mixBlendMode: "overlay",
            }}
          />
        </G>
        <Defs>
          <LinearGradient
            id="b"
            x1={83.5}
            x2={225.585}
            y1={69}
            y2={372.353}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#353F54" />
            <Stop offset={1} stopColor="#222834" />
          </LinearGradient>
          <LinearGradient
            id="c"
            x1={264}
            x2={263}
            y1={80}
            y2={141}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#fff" />
            <Stop offset={1} stopOpacity={0} />
          </LinearGradient>
        </Defs>
      </Svg>
      {children}
    </View>
  );
};

export default ProductBottomSheet;
