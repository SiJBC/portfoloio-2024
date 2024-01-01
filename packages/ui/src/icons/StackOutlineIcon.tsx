import * as React from "react"
const SvgStackOutline = (props: React.SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m-11.142 4.5L2.25 16.5 12 21.75l9.75-5.25-4.179-2.25m-11.142 0 5.571 3 5.571-3m0-4.5L21.75 12l-4.179 2.25"
    />
  </svg>
)
export default SvgStackOutline
