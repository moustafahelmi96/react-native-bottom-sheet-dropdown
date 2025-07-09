import React from "react";
import { Path, Svg } from "react-native-svg";

export function TickIcon({ color = "#215A47" }: { color?: string }) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M3 12L8.99294 18L21 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TickIcon;
