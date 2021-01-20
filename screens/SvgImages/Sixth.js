import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
function SvgComponent(props) {
  return (
    <Svg
      width={104}
      height={77}
      viewBox="0 0 104 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M.717.75h103.049v76.191H.717z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00063 0 0 .00085 0 -.007)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={1600}
          height={1200}
        />
      </Defs>
    </Svg>
  )
}
export default SvgComponent