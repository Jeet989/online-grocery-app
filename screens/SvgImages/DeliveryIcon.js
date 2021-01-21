import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={23}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M1.686 9.463C1.702 4.78 5.478.998 10.12 1.014c4.642.016 8.393 3.824 8.377 8.506v.096c-.057 3.043-1.742 5.857-3.808 8.055a22.135 22.135 0 01-3.931 3.264c-.383.334-.95.334-1.333 0a21.769 21.769 0 01-5.53-5.222A10.907 10.907 0 011.686 9.49v-.028z"
        stroke="#181725"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M10.092 11.987a2.352 2.352 0 002.341-2.361 2.352 2.352 0 00-2.341-2.362A2.352 2.352 0 007.75 9.626a2.352 2.352 0 002.342 2.361z"
        stroke="#181725"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
