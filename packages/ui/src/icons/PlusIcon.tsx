import * as React from "react"
const SvgPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="black"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19v-7m0 0V5m0 7H5m7 0h7"
    />
  </svg>
)
export default SvgPlus
