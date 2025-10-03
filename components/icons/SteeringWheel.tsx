import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types";

const SteeringWheel = ({ isActive }: IconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
    <Path
      fill="#fff"
      fillOpacity={isActive ? 1 : 0.6}
      fillRule="evenodd"
      d="M30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15ZM4.968 21.587l4.805-8.584h10.114l4.862 8.995A11.945 11.945 0 0 0 27 15c0-6.627-5.373-12-12-12S3 8.373 3 15c0 2.433.724 4.696 1.968 6.587Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M14.618 13.003h.85l.127 1.19H14.49l.128-1.19ZM14.448 15.637h1.19l.127 1.275h-1.487l.17-1.275ZM14.108 19.122h1.87l.212 2.295h-2.422l.34-2.295ZM13.768 24.39h2.55l.254 2.805H13.47l.297-2.804Z"
    />
  </Svg>
);
export default SteeringWheel;
