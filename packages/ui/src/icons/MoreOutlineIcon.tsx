import * as React from "react"
const SvgMoreOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 12.5h16.5M4 16.25h16.5M4 20h16.5M5.875 5h12.75a1.875 1.875 0 1 1 0 3.75H5.875a1.875 1.875 0 0 1 0-3.75"
    />
  </svg>
)
export default SvgMoreOutline
