import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../../types";

const ProfileIcon = ({ focused }: IconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={17} fill="none">
    <Path
      fillOpacity={focused ? 1 : 0.6}
      fill="#fff"
      d="M8.009 8.575c1.916 0 3.542-1.705 3.542-3.91C11.55 2.51 9.916.857 8.009.857c-1.916 0-3.56 1.68-3.551 3.824 0 2.188 1.626 3.893 3.55 3.893ZM2.524 16.75h10.952c1.45 0 1.95-.44 1.95-1.248 0-2.259-2.864-5.37-7.426-5.37-4.553 0-7.427 3.111-7.427 5.37 0 .809.501 1.248 1.951 1.248Z"
    />
  </Svg>
);
export default ProfileIcon;
