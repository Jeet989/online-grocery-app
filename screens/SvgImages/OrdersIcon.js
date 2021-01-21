import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={23}
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.091 1.147l-3 4v14a2 2 0 002 2h14a2 2 0 002-2v-14l-3-4h-12zM1.091 5.147h18M14.091 9.147a4 4 0 11-8 0"
        stroke="#181725"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
