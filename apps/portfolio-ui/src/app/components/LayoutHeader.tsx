"use client"
import React from "react"
import { usePathname } from "next/navigation"

function LayoutHeader() {
  const pathname = usePathname()
  return (
    <div className="text-white">
      {pathname?.split("/").slice(-1).toString().toUpperCase()}
    </div>
  )
}

export default LayoutHeader
