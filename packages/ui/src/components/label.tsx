import React from "react"
import { LinkIcon, ArrowRightIcon, UserFillIcon } from "../icons"
import { cn } from "../../lib/utils"

type LabelProps = {
  labelPrimary?: string
  labelSecondary?: string
  adornmentRight?: React.FC<React.SVGProps<SVGSVGElement>>
  href?: string
  fill?: boolean
  hexCode?: string
  colour?:
    | "bg-theme-black"
    | "bg-theme-white"
    | "bg-theme-onyx"
    | "bg-theme-dark-gray"
    | "bg-theme-gray"
    | "bg-theme-light-gray"
    | "bg-theme-light-blue"
    | "bg-theme-light-red"
    | "bg-theme-light-yellow"
    | "bg-theme-card-border"
    | "bg-theme-white-10%"
    | "bg-theme-white-20%"
    | "bg-theme-black-50%"
    | "bg-theme-main-bg"
    | "bg-theme-faint-white"
    | "bg-theme-light-card-border"
    | "bg-theme-card-bg"
    | "bg-theme-card-bg-hover"
    | string
}

function Label({
  adornmentRight: AdornmentRight = UserFillIcon, // Default to UserFillIcon
  colour = "theme-black",
  fill = false,
  href,
  hexCode,
  labelPrimary = "Simon C",
  labelSecondary = "tm",
}: LabelProps) {
  const bg = fill ? hexCode : ""
  return (
    <div
      style={{
        border: `1px solid ${hexCode}`,
        backgroundColor: bg,
      }}
      className={cn(
        "flex justify-between rounded-full hover:opacity-70 hover:cursor-pointer  border-solid border-[1px] py-1 px-4",
        bg
      )}
    >
      <div className="flex gap-1">
        <div
          style={{
            color: fill ? "white" : hexCode,
          }}
          className={cn("text-lg leading-tight font-semibold")}
        >
          {labelPrimary}
        </div>
        <span
          style={{
            color: fill ? "white" : hexCode,
          }}
          className={cn("leading-tight text-[12px] mix-blend-darken")}
        >
          <sup>{labelSecondary}</sup>
        </span>
      </div>
      <div>
        <AdornmentRight fill={hexCode} />
      </div>
    </div>
  )
}

export default Label
