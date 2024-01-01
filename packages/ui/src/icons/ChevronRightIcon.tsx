import * as React from "react"
const SvgChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="black"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.14 16a20.359 20.359 0 0 0 3.894-3.702.472.472 0 0 0 0-.596A20.358 20.358 0 0 0 10.14 8"
    />
  </svg>
)
export default SvgChevronRight
