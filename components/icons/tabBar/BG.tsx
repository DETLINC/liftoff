// import * as React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const BackGroundSvg = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={390} height={695} fill="none">
    <Path
      fill="url(#a)"
      d="M242.5 167.5 322 0l71.5 59.5v661L-20 705l262.5-537.5Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={168.5}
        x2={372.499}
        y1={0.5}
        y2={720.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#37B6E9" />
        <Stop offset={1} stopColor="#4B4CED" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BackGroundSvg;
