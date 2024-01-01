import * as React from "react"
const SvgChevronTop = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M16 13.86a20.355 20.355 0 0 0-3.702-3.893.472.472 0 0 0-.596 0A20.354 20.354 0 0 0 8 13.86"
    />
  </svg>
)
export default SvgChevronTop
