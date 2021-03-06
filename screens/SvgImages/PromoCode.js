import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.639 4.12a.682.682 0 000-.99l-2.176-2.09a.751.751 0 00-1.032 0L1.105 13.84a.682.682 0 000 .991l2.176 2.09a.751.751 0 001.032 0 1.626 1.626 0 012.231 0c.615.59.615 1.553 0 2.143a.682.682 0 000 .992l2.176 2.09a.751.751 0 001.032 0l13.326-12.8a.682.682 0 000-.992l-2.175-2.09a.751.751 0 00-1.033 0c-.615.59-1.616.59-2.231 0a1.475 1.475 0 010-2.143zm-1.032 3.135c1.006.967 2.55 1.112 3.717.436L21.53 8.85l-8.35 8.02-1.116-1.071a.751.751 0 00-1.033 0 .682.682 0 000 .991l1.116 1.072-2.911 2.796L8.03 19.5a2.837 2.837 0 00-.454-3.57c-1.006-.967-2.55-1.112-3.717-.436l-1.206-1.159 2.911-2.796 1.116 1.072a.751.751 0 001.032 0 .682.682 0 000-.992l-1.115-1.071 8.35-8.021 1.206 1.158a2.837 2.837 0 00.454 3.57z"
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
      <Path
        d="M8.312 13.187a.682.682 0 000 .99l1.087 1.046a.751.751 0 001.032 0 .682.682 0 000-.992l-1.087-1.044s0 0 0 0a.751.751 0 00-1.032 0z"
        fill="#181725"
        stroke="#181725"
        strokeWidth={0.3}
      />
    </Svg>
  )
}

export default SvgComponent
