import * as React from "react";
import { useWindowDimensions, View } from "react-native";
import Svg, {
  ForeignObject,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: div */

const BottomTabContainer = () => {
  const { width } = useWindowDimensions();
  return (
    <View className="shadow-2xl">

    <Svg
      width={width}
      height={111}
      viewBox="0 0 390 101"
      preserveAspectRatio="xMidYMid slice"
      fill={"nofill"}
    >
      <G data-figma-bg-blur-radius={30}>
        <Path
          fill="url(#b)"
          d="M0 20 390 0v53.5c0 27.614-22.386 50-50 50H50c-27.614 0-50-22.386-50-50V20Z"
        />
        <Path
          strokeOpacity={0.2}
          strokeWidth={2}
          d="M389 53.5c0 27.062-21.938 49-49 49H50c-27.062 0-49-21.938-49-49V20.95L389 1.053V53.5Z"
          style={{
            mixBlendMode: "overlay",
          }}
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1={195}
          x2={195}
          y1={-5}
          y2={121}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#363E51" />
          <Stop offset={1} stopColor="#181C24" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={192.5}
          x2={191}
          y1={-3.5}
          y2={41.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="a" transform="translate(30 30)">
          <Path d="M0 20 390 0v53.5c0 27.614-22.386 50-50 50H50c-27.614 0-50-22.386-50-50V20Z" />
        </ClipPath>
      </Defs>
    </Svg>
    </View>

  );
};

export default BottomTabContainer;
