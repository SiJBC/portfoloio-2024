import React from "react"
import Image from "next/image"
import { headers } from "next/headers"

function DesignLayout({ children }: { children: React.ReactNode }) {
  const heads = headers()
  const pathname = heads.get("next-url")
  return (
    <div className="max-w-screen bg-theme-main-bg">
      <div className="relative">
        <span className="absolute text-white top-[60%] left-[10%]">
          <h1 className="text-4xl text-white">
            {pathname?.split("/").slice(-1).toString().toUpperCase()}
          </h1>
        </span>
        <Image
          style={{
            minHeight: "9rem",
          }}
          alt="Gradient Background"
          src="/Header.png"
          width={1920}
          height={1080}
        />
      </div>
      <div className="p-14">{children}</div>
      <div className="relative">
        <Image
          alt="Gradient Background"
          src="/Header.png"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  )
}

export default DesignLayout
