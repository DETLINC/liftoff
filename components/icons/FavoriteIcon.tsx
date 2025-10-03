import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

interface FavoriteIconProps {
  white?: boolean;
}

const FavoriteIcon = ({ white = false }: FavoriteIconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={18} fill="none">
    <Path
      fill={white ? "#FFFFFF" : "url(#a)"}
      d="M18.172 1.88a6.29 6.29 0 0 0-8.16-.64 6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84Zm-1.41 7.46-6.21 6.21a.76.76 0 0 1-1.08 0l-6.21-6.24a4.29 4.29 0 0 1 0-6 4.27 4.27 0 0 1 6 0 1 1 0 0 0 1.42 0 4.27 4.27 0 0 1 6 0 4.29 4.29 0 0 1 .08 6v.03Z"
    />
    {!white && (
      <Defs>
        <LinearGradient
          id="a"
          x1={0.012}
          x2={14.512}
          y1={-0.121}
          y2={22.879}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#34CAE8" />
          <Stop offset={1} stopColor="#4E49F2" />
        </LinearGradient>
      </Defs>
    )}
  </Svg>
);

export default FavoriteIcon;
