import * as React from "react"
const SvgChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.86 8a20.356 20.356 0 0 0-3.894 3.702.472.472 0 0 0 0 .596A20.357 20.357 0 0 0 13.86 16"
    />
  </svg>
)
export default SvgChevronLeft
