import React from "react"
import { NavigationMenu } from "@/app/components/Menu"

function page() {
  const navComponents = [
    {
      title: "Components",
      href: "/docs/components",
      description:
        "Beautifully designed components built with Radix UI and Tailwind CSS.",
    },
    {
      title: "Components",
      href: "/docs/components",
      description:
        "Beautifully designed components built with Radix UI and Tailwind CSS.",
    },
    {
      title: "Components",
      href: "/docs/components",
      description:
        "Beautifully designed components built with Radix UI and Tailwind CSS.",
    },
    {
      title: "Components",
      href: "/docs/components",
      description:
        "Beautifully designed components built with Radix UI and Tailwind CSS.",
    },
    {
      title: "Components",
      href: "/docs/components",
      description:
        "Beautifully designed components built with Radix UI and Tailwind CSS.",
    },
  ]
  return (
    <div>
      <NavigationMenu navComponents={navComponents}></NavigationMenu>
    </div>
  )
}

export default page
