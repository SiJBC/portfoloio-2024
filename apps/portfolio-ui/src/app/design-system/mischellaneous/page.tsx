import React from "react"
import { Icons, Components } from "@repo/ui/components"
import { colours } from "../colours/page"

function page() {
  const IconArray = Object.values(Icons)
  const { Button } = Components
  return (
    <div className="max-w-screen">
      <div className="py-6">
        <h2 className="text-3xl pb-6">Icons</h2>
        <div className="flex max-w-[384px] ">
          <div className="flex flex-wrap gap-4 max-w-fit bg-theme-white p-4 rounded-lg">
            {IconArray.map((Icon, index) => (
              <Icon stroke="black" key={`icon-${index}`} />
            ))}
          </div>
          <div className="font-semibold m-auto translate-x-6">Light</div>
        </div>
        <div className="flex max-w-[384px] mt-6">
          <div className="flex flex-wrap gap-4 max-w-fit rounded-lg bg-theme-black p-4">
            {IconArray.map((Icon, index) => (
              <Icon stroke="white" fill="white" key={`icon-${index}`} />
            ))}
          </div>
          <div className="font-semibold m-auto translate-x-6">Dark</div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl pt-12">Buttons</h2>
        <div className="w-[40rem]">
          <div className="flex py-6 font-semibold">
            <h3 className="m-auto text-center">Primary</h3>
            <h3 className="m-auto text-center">Secondary</h3>
            <h3 className="m-auto text-center">Text</h3>
          </div>
          <div className="flex">
            <div className="flex gap-6 justify-center p-4 bg-theme-black rounded-lg">
              <div className="flex flex-col gap-6 justify-center">
                <Button
                  loading={false}
                  iconLeft="PlusIcon"
                  iconRight="ChevronRightIcon"
                  modifier="dark"
                  variants="primary"
                >
                  Button
                </Button>
              </div>
              <div className="flex flex-col gap-6 justify-center">
                <Button
                  loading={false}
                  iconLeft="PlusIcon"
                  iconRight="ChevronRightIcon"
                  modifier="dark"
                  variants="secondary"
                >
                  Button
                </Button>
              </div>
              <div className="flex flex-col gap-6 justify-center">
                <Button
                  loading={false}
                  iconLeft="PlusIcon"
                  iconRight="ChevronRightIcon"
                  modifier="dark"
                  variants="text"
                >
                  Button
                </Button>
              </div>
            </div>
            <div className="flex font-semibold flex-col px-6 justify-center">
              <div className="m-auto">Dark</div>
            </div>
          </div>
        </div>
        <div className="w-[40rem]">
          <div className="flex py-6 font-semibold">
            <h3 className="m-auto text-center">Primary</h3>
            <h3 className="m-auto text-center">Secondary</h3>
            <h3 className="m-auto text-center">Text</h3>
          </div>
          <div className="flex">
            <div className="flex gap-6 justify-center p-4 bg-theme-white rounded-lg">
              <div className="flex flex-col gap-6 justify-center">
                <Button
                  loading={false}
                  iconLeft="PlusIcon"
                  iconRight="ChevronRightIcon"
                  modifier="light"
                  variants="primary"
                >
                  Button
                </Button>
              </div>
              <div className="flex flex-col gap-6 justify-center">
                <Button
                  loading={false}
                  iconLeft="PlusIcon"
                  iconRight="ChevronRightIcon"
                  modifier="light"
                  variants="secondary"
                >
                  Button
                </Button>
              </div>
              <div className="flex flex-col gap-6 justify-center">
                <Button
                  loading={false}
                  iconLeft="PlusIcon"
                  iconRight="ChevronRightIcon"
                  modifier="light"
                  variants="text"
                >
                  Button
                </Button>
              </div>
            </div>
            <div className="flex font-semibold flex-col px-6 justify-center">
              <div className="m-auto">Light</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
