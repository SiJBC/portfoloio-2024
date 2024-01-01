import React from "react"
import { Components } from "@repo/ui/components"

function page() {
  const { Header } = Components
  return (
    <>
      <h2 className="font-semibold pb-12">Page Headers</h2>
      <div className="rounded border-blue-50 border-2 p-1">
        <div className="bg-theme-black p-4">
          <Header
            title="Stack"
            subTitle="The dev tools, apps, devices, and games I use and play."
            modifiers="dark"
            variants="page"
          />
        </div>
        <div className="mt-12 p-4">
          <Header
            title="Stack"
            subTitle="The dev tools, apps, devices, and games I use and play."
            modifiers="light"
            variants="page"
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold pb-12">Notebook Headers</h2>
        <div className="rounded border-blue-50 border-2 p-1">
          <div className="bg-theme-black p-4">
            <Header
              title="Stack"
              subTitle="The dev tools, apps, devices, and games I use and play."
              modifiers="dark"
              variants="notebook"
            />
          </div>
          <div className="mt-12 p-4">
            <Header
              title="Stack"
              subTitle="The dev tools, apps, devices, and games I use and play."
              modifiers="light"
              variants="notebook"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
