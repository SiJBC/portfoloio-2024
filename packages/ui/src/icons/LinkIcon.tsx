import * as React from "react"
const SvgLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.122 9.879 9.879 14.12m.707-7.778.707-.707a5 5 0 0 1 7.071 7.071l-.707.707M6.343 10.586l-.707.707a5 5 0 1 0 7.071 7.071l.707-.707"
    />
  </svg>
)
export default SvgLink
