import React from "react"
import { Components } from "@repo/ui/components"
import { cn } from "@/lib/utils"

function ColourCards({
  colourHexCode = "#0D0D0D",
  colourName = "bg-theme-black",
}: {
  colourName?: string
  colourHexCode?: string
}) {
  const { CardComponents } = Components
  const { Card, CardContent, CardFooter } = CardComponents
  return (
    <div>
      <Card className=" w-56 h-72">
        <CardContent
          className={cn(
            "w-56 h-48 rounded-md rounded-b-none flex flex-col-reverse whitespace-normal",
            colourName
          )}
        >
          <span className="mix-blend-difference text-theme-light-gray text-wrap">
            {colourName
              .slice(2)
              .split("-")
              .join(" ")
              .slice()
              .toLocaleUpperCase()}
          </span>
        </CardContent>
        <CardFooter className="justify-left border border-t-sky-100 border-none pt-1 align-middle font-semibold ">
          {colourHexCode}
        </CardFooter>
      </Card>
    </div>
  )
}

export default ColourCards
