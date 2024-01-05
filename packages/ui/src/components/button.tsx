import React, { ButtonHTMLAttributes, ReactNode } from "react"
import { cva, VariantProps } from "class-variance-authority"
import * as Icons from "../icons"

const button = cva(
  "justify-center inline-flex gap-2 rounded-lg text-lg w-[11.625rem] hover:opacity-70",
  {
    variants: {
      variants: {
        primary: "",
        secondary: "",
        text: "",
      },
      modifier: {
        dark: "",
        light: "",
      },
    },
    compoundVariants: [
      {
        modifier: "dark",
        variants: "primary",
        className:
          "bg-light-gradient shadow-dark h-14 px-8 py-4 text-theme-white leading-6",
      },
      {
        modifier: "dark",
        variants: "secondary",
        className:
          "bg-dark-gradient shadow-dark h-14 px-8 py-4 text-theme-white",
      },
      {
        modifier: "dark",
        variants: "text",
        className: "text-theme-white",
      },
      {
        modifier: "light",
        variants: "primary",
        className:
          "bg-dark-gradient text-theme-white shadow-dark h-14 px-8 py-4",
      },
      {
        modifier: "light",
        variants: "secondary",
        className:
          "bg-light-gradient text-theme-white shadow-dark h-14 px-8 py-4",
      },
      {
        modifier: "light",
        variants: "text",
        className: " text-theme-dark-gray",
      },
    ],
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  iconLeft?: keyof typeof Icons
  iconRight?: keyof typeof Icons
  variants: "primary" | "secondary" | "text"
  children: ReactNode
  className?: string
  loading: boolean
  modifier: "dark" | "light"
}

export const Button: React.FC<ButtonProps> = ({
  iconLeft,
  iconRight,
  children,
  className,
  variants,
  loading,
  modifier,
  ...rest
}) => {
  const IconRightComponent = iconRight ? Icons[iconRight] : null
  const IconLeftComponent = iconLeft ? Icons[iconLeft] : null
  const stroke = modifier === "light" && variants === "text" ? "grey" : "white"
  return (
    <button {...rest} className={button({ variants, modifier })}>
      {IconLeftComponent && <IconLeftComponent stroke={stroke} />}
      {children}
      {IconRightComponent && <IconRightComponent stroke={stroke} />}
    </button>
  )
}
