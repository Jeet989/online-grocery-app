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
        d="M10.092.854a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
        fill="#181725"
      />
      <Path
        d="M10.31 4.854a3.5 3.5 0 00-3.5 3.5 1 1 0 002 0 1.5 1.5 0 111.5 1.5 1 1 0 00-1 1v2a1 1 0 002 0v-1.16a3.49 3.49 0 00-1-6.84zM10.31 16.854a1 1 0 100-2 1 1 0 000 2z"
        fill="#181725"
      />
    </Svg>
  )
}

export default SvgComponent
