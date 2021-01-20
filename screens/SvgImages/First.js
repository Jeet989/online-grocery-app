import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
function SvgComponent(props) {
  return (
    <Svg
      width={112}
      height={76}
      viewBox="0 0 112 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M.052.182h111.379v74.902H.052z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#prefix__image0" transform="scale(.00063 .00093)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={1600}
          height={1076}
        />
      </Defs>
    </Svg>
  )
}
export default SvgComponent