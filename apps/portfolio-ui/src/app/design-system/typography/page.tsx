import React from "react"

function Typography() {
  return (
    <>
      <div className="flex flex-col pb-14">
        <div className="flex flex-col gap-28 lg:flex-row">
          <div className="flex flex-col">
            <span className="text-4xl">INTER</span>
            <span className="text-9xl">Ag</span>
          </div>
          <div className="flex flex-col gap-1 break-words">
            <div className="text-4xl">
              {"abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase()}
            </div>
            <div className="text-4xl">abcdefghijklmnopqrstuvwxyz</div>
            <div className="text-4xl">0123456789.</div>
          </div>
        </div>
        <div className="flex flex-col gap-28 font-nanum mt-24 lg:flex-row">
          <div className="flex flex-col">
            <span className="text-4xl">NANUM PEN</span>
            <span className="text-9xl">Ag</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl">
              {"abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase()}
            </span>
            <span className="text-4xl">abcdefghijklmnopqrstuvwxyz</span>
            <span className="text-4xl">0123456789.</span>
          </div>
        </div>
      </div>
      <div className="mx-auto pb-14 pt-6 border-t-8 border-gray-200 rounded-lg">
        <div className=" mx-auto p-4">
          <h2 className="text-5xl pb-8">inter</h2>
          <p className="text-xs mb-2">
            Design systems are frameworks of guidelines and components.
            (text-xs: 0.75rem / 12px)
          </p>
          <p className="text-sm mb-2">
            They ensure consistency and efficiency in design. (text-sm: 0.875rem
            / 14px)
          </p>
          <p className="text-base mb-2">
            Components include UI elements, patterns, and style guides.
            (text-base: 1rem / 16px)
          </p>
          <p className="text-lg mb-2">
            Documentation and principles guide usage and application. (text-lg:
            1.125rem / 18px)
          </p>
          <p className="text-xl mb-2">
            Design systems aid in scalable and cohesive product development.
            (text-xl: 1.25rem / 20px)
          </p>
          <p className="text-2xl mb-2">
            They foster collaboration between designers and developers.
            (text-2xl: 1.5rem / 24px)
          </p>
          <p className="text-3xl mb-2">
            Effective design systems evolve with changing trends and
            technologies. (text-3xl: 1.875rem / 30px)
          </p>
          <p className="text-4xl">
            Design systems are integral to modern digital product design.
            (text-4xl: 2.25rem / 36px)
          </p>
        </div>
      </div>
      <div className="mx-auto pb-14 pt-6 border-t-8 border-gray-200 rounded-lg font-nanum">
        <div className=" mx-auto p-4">
          <h2 className="text-5xl pb-8">Nanum Pen</h2>
          <p className="text-xs mb-2">
            Design systems are frameworks of guidelines and components.
            (text-xs: 0.75rem / 12px)
          </p>
          <p className="text-sm mb-2">
            They ensure consistency and efficiency in design. (text-sm: 0.875rem
            / 14px)
          </p>
          <p className="text-base mb-2">
            Components include UI elements, patterns, and style guides.
            (text-base: 1rem / 16px)
          </p>
          <p className="text-lg mb-2">
            Documentation and principles guide usage and application. (text-lg:
            1.125rem / 18px)
          </p>
          <p className="text-xl mb-2">
            Design systems aid in scalable and cohesive product development.
            (text-xl: 1.25rem / 20px)
          </p>
          <p className="text-2xl mb-2">
            They foster collaboration between designers and developers.
            (text-2xl: 1.5rem / 24px)
          </p>
          <p className="text-3xl mb-2">
            Effective design systems evolve with changing trends and
            technologies. (text-3xl: 1.875rem / 30px)
          </p>
          <p className="text-4xl">
            Design systems are integral to modern digital product design.
            (text-4xl: 2.25rem / 36px)
          </p>
        </div>
      </div>
    </>
  )
}

export default Typography
