import React from "react"
import Image from "next/image"
import LayoutHeader from "@/app/components/LayoutHeader"

function DesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen bg-theme-main-bg relative min-h-screen pb-24">
      <div>
        <span className="absolute text-white top-8 left-14">
          <h1 className="text-4xl text-white">
            <LayoutHeader />
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
      <div className="p-14 pb-48">{children}</div>
      <div className="absolute bottom-0">
        <Image
          alt="Gradient Background"
          src="/Header.png"
          width={1920}
          height={1080}
        />
      </div>
      <div className=" absolute top-0 right-8">
        <Image
          alt="Logo Dark Theme SC"
          src="/LogoDarkTheme.png"
          width={124}
          height={124}
        />
      </div>
    </div>
  )
}

export default DesignLayout
