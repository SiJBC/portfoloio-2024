import React from "react"
import ColourCard from "@/app/components/ColourCards"

export const colours = [
  { "bg-theme-black": "#0D0D0D" },
  { "bg-theme-white": "#FFFFFF" },
  { "bg-theme-onyx": "#181818" },
  { "bg-theme-dark-gray": "#808080" },
  { "bg-theme-gray": "rgba(128, 128, 128, 0.5)" },
  { "bg-theme-light-gray": "#C5C5C5" },
  { "bg-theme-light-blue": "rgba(63, 100, 234, 0.43)" },
  { "bg-theme-light-red": "rgba(233, 63, 64, 0.43)" },
  { "bg-theme-light-yellow": "rgba(255, 184, 0, 0.43)" },
  { "bg-theme-card-border": "#383737" },
  { "bg-theme-white-10%": "rgba(255, 255, 255, 0.1)" },
  { "bg-theme-white-20%": "rgba(255, 255, 255, 0.2)" },
  { "bg-theme-black-50%": "rgba(21, 21, 21, 0.5)" },
  { "bg-theme-main-bg": "#FBFBFB" },
  { "bg-theme-faint-white": "#F3F3F3" },
  { "bg-theme-light-card-border": "#EBEBEB" },
  { "bg-theme-card-bg": "#F6F6F6" },
  { "bg-theme-card-bg-hover": "#EDEDED" },
] as const

function Colours() {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center ">
        {colours.map((card) => {
          const colourName = Object.keys(card)[0]
          const colourHexCode = Object.values(card)[0]
          return (
            <ColourCard
              key={colourName}
              colourName={colourName}
              colourHexCode={colourHexCode}
            />
          )
        })}
      </div>
      <div className="w-screen flex fle-col justify-center mt-12">
        <div className="m-auto text-center">
          <ColourCard colourName="bg-dark-gradient" />
        </div>
      </div>
    </>
  )
}

export default Colours
