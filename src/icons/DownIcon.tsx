import React from "react";
import { Path,  Svg } from "react-native-svg";

export function DownIcon({
  color = "#0D0D0D",
}: {
  color?: string;
}) {
  return (
    <Svg
      width="18"
      height="9"
      viewBox="0 0 18 9"
      fill="none"
    >
      <Path
        d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DownIcon;
