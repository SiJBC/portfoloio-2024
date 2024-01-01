import * as React from "react"
const SvgMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#0D0D0D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.926}
      d="M21.046 12.79a9.043 9.043 0 1 1-9.836-9.836 7.033 7.033 0 0 0 9.836 9.836"
    />
  </svg>
)
export default SvgMoon
