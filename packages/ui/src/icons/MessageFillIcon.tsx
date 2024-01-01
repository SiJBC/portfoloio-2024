import * as React from "react"
const SvgMessageFill = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#0D0D0D" clipPath="url(#MessageFill_svg__a)">
      <path d="M0 7.712v9.806a3.429 3.429 0 0 0 3.429 3.428h17.143A3.429 3.429 0 0 0 24 17.519V7.712L13.797 13.99a3.43 3.43 0 0 1-3.593 0z" />
      <path d="M24 5.698v-.18a3.429 3.429 0 0 0-3.428-3.429H3.429A3.429 3.429 0 0 0 0 5.518v.18l11.102 6.833a1.714 1.714 0 0 0 1.797 0z" />
    </g>
    <defs>
      <clipPath id="MessageFill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMessageFill
