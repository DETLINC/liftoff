import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../../types";

const ReceiptIcon = ({ focused }: IconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={20} fill="none">
    <Path
      fillOpacity={focused ? 1 : 0.6}
      fill="#fff"
      d="M3.315 19.182h9.37c1.89 0 2.865-.993 2.865-2.892V8.424H8.958c-1.099 0-1.626-.528-1.626-1.626V.136H3.315c-1.88 0-2.865.993-2.865 2.9V16.29c0 1.899.985 2.892 2.865 2.892ZM9.125 7.14h6.337c-.053-.405-.343-.783-.8-1.248l-4.808-4.87C9.415.575 9.02.276 8.615.223v6.408c.009.343.176.51.51.51ZM4.59 12.317c-.378 0-.65-.272-.65-.624 0-.351.272-.624.65-.624h6.847c.36 0 .641.273.641.624a.625.625 0 0 1-.641.624H4.59Zm0 3.296c-.378 0-.65-.272-.65-.624 0-.351.272-.624.65-.624h6.847c.36 0 .641.273.641.624a.625.625 0 0 1-.641.624H4.59Z"
    />
  </Svg>
);
export default ReceiptIcon;
