import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
function SvgComponent(props) {
  return (
    <Svg
      width={51}
      height={95}
      viewBox="0 0 51 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M.835.35h49.517v94.589H.835z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00128 0 0 .00067 -.24 -.06)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={1158}
          height={1650}
        />
      </Defs>
    </Svg>
  )
}
export default SvgComponent