import * as React from "react"
const SvgChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8 10.14a20.354 20.354 0 0 0 3.702 3.893c.175.142.42.142.596 0A20.355 20.355 0 0 0 16 10.14"
    />
  </svg>
)
export default SvgChevronDown
