import * as React from "react"
const SvgPenFill = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#0D0D0D"
      d="M21.731 2.27a2.625 2.625 0 0 0-3.712 0l-1.157 1.156 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712M19.513 8.2l-3.712-3.713-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32z"
    />
  </svg>
)
export default SvgPenFill
