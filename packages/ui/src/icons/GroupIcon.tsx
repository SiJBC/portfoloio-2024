import * as React from "react"
const SvgGroup = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#0D0D0D"
      fillRule="evenodd"
      d="M19.556 21.998H2.448a2.444 2.444 0 0 1-2.444-2.444V2.446A2.444 2.444 0 0 1 2.448.002h17.108A2.444 2.444 0 0 1 22 2.446v17.108a2.444 2.444 0 0 1-2.444 2.444m-3.876-3.055h3.264v-6.705c0-2.838-1.608-4.21-3.855-4.21s-3.193 1.75-3.193 1.75V8.353H8.75v10.59h3.146v-5.558c0-1.49.686-2.377 1.998-2.377 1.207 0 1.786.852 1.786 2.377zM3.058 5.01c0 1.08.868 1.954 1.94 1.954 1.07 0 1.939-.875 1.939-1.954s-.868-1.954-1.94-1.954c-1.071 0-1.94.875-1.94 1.954m3.595 13.932h-3.28V8.353h3.28z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgGroup
