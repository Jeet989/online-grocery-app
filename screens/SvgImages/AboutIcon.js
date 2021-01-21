import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.092.076a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
        fill="#181725"
      />
      <Path
        d="M10.092 15.076a1 1 0 100-2 1 1 0 000 2zM10.092 5.076a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1z"
        fill="#181725"
      />
    </Svg>
  )
}

export default SvgComponent
