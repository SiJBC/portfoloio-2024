import * as React from "react"
const SvgStars = (props: React.SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.222}
      d="M6.825 14.8v.825m0 0v.825m0-.825h.825m-.825 0H6M12.05 6l.196 1.54a4.4 4.4 0 0 0 3.682 3.792L17 11.5l-1.072.168a4.4 4.4 0 0 0-3.682 3.792L12.05 17l-.196-1.54a4.4 4.4 0 0 0-3.683-3.792L7.1 11.5l1.071-.168a4.4 4.4 0 0 0 3.683-3.792zm-4.4 0 .041.25a1.65 1.65 0 0 0 1.36 1.359l.249.041-.25.041a1.65 1.65 0 0 0-1.359 1.36L7.65 9.3l-.041-.25a1.65 1.65 0 0 0-1.36-1.359L6 7.65l.25-.041a1.65 1.65 0 0 0 1.359-1.36z"
    />
  </svg>
)
export default SvgStars
