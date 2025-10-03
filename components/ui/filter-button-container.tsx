import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Svg, { G, Rect, Defs, LinearGradient, Stop } from "react-native-svg";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";

interface FilterButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  isActive?: boolean;
}

const FilterButtonContainer = ({
  label,
  icon,
  onPress,
  isActive,
}: FilterButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      {isActive ? (
        <View style={{ width: 86, height: 100 }}>
          <ExpoLinearGradient
            colors={["#34C8E8", "#4E4AF2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              marginTop: 50,
            }}
          />
        </View>
      ) : (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={86}
          height={100}
          fill="none"
        >
          <G filter="url(#a)" shapeRendering="crispEdges">
            <Rect width={50} height={50} x={0} y={50} fill="url(#b)" rx={10} />
            <Rect
              width={49}
              height={49}
              x={0}
              y={50.5}
              stroke="url(#c)"
              strokeOpacity={0.2}
              rx={9.5}
            />
          </G>
          <Defs>
            <LinearGradient
              id="b"
              x1={48.03}
              x2={53.393}
              y1={63.278}
              y2={93.641}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#353F54" />
              <Stop offset={1} stopColor="#222834" />
            </LinearGradient>
            <LinearGradient
              id="c"
              x1={35.606}
              x2={64.866}
              y1={51.867}
              y2={80.523}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#fff" />
              <Stop offset={0.845} />
              <Stop offset={1} />
            </LinearGradient>
          </Defs>
        </Svg>
      )}

      <View className="absolute items-center justify-center top-[50px] left-[0px] w-[50px] h-[50px]">
        {icon ? (
          icon
        ) : (
          <Text className="text-white text-base font-poppins-medium">
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default FilterButtonContainer;
