import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
function SvgComponent(props) {
  return (
    <Svg
      width={103}
      height={74}
      viewBox="0 0 103 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M.639.392h102.125v72.694H.639z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00114 0 0 .0016 -.062 -.331)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={1024}
          height={859}
        />
      </Defs>
    </Svg>
  )
}
export default SvgComponent