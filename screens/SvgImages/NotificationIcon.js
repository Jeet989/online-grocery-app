import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={21}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.611 13.354l-1.8-1.81v-4.46a6.86 6.86 0 00-5.82-6.88 6.74 6.74 0 00-7.619 6.67v4.67l-1.8 1.81a1.64 1.64 0 001.16 2.79h3.36v.34a3.84 3.84 0 004 3.66 3.84 3.84 0 004-3.66v-.34h3.36a1.64 1.64 0 001.16-2.79zm-6.52 3.13a1.88 1.88 0 01-2 1.66 1.88 1.88 0 01-2-1.66v-.34h4v.34zm-8.489-2.34l1.18-1.18a2 2 0 00.59-1.42v-4.67a4.73 4.73 0 011.62-3.56 4.67 4.67 0 013.74-1.17 4.86 4.86 0 014.08 4.9v4.5a2.001 2.001 0 00.58 1.42l1.19 1.18H2.601z"
        fill="#181725"
      />
    </Svg>
  )
}

export default SvgComponent
