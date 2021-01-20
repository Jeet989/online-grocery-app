import * as React from "react"
import Svg, { Circle, Rect } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={6.662}
        cy={4.458}
        r={3.3}
        stroke="#181725"
        strokeWidth={1.9}
      />
      <Rect
        x={0.892}
        y={3.416}
        width={3.308}
        height={2.083}
        rx={1.042}
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
      <Circle
        cx={12.319}
        cy={13.807}
        r={3.3}
        transform="rotate(-180 12.319 13.807)"
        stroke="#181725"
        strokeWidth={1.9}
      />
      <Rect
        x={9.834}
        y={3.416}
        width={7.836}
        height={2.083}
        rx={1.042}
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
      <Rect
        x={9.146}
        y={14.848}
        width={7.84}
        height={2.083}
        rx={1.042}
        transform="rotate(-180 9.146 14.848)"
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
      <Rect
        x={17.995}
        y={14.848}
        width={2.841}
        height={2.083}
        rx={1.042}
        transform="rotate(-180 17.995 14.848)"
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
    </Svg>
  )
}

export default SvgComponent
