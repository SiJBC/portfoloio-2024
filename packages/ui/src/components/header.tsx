import { cva, VariantProps } from "class-variance-authority"

const heading = cva("ui-text-3xl font-bold", {
  variants: {
    variants: {
      page: "text-4xl lg:text-7xl font-bold",
      notebook: "text-2xl lg:text-5xl font-bold",
    },
    modifiers: {
      dark: "text-theme-white",
      light: "text-theme-black",
    },
  },
})

const subHeading = cva("ui-text-xl", {
  variants: {
    variants: {
      page: "text-xl lg:text-lg",
      notebook: "text-lg lg:text-ll",
    },
    modifiers: {
      dark: "text-theme-gray",
      light: "text-theme-gray",
    },
  },
})

interface HeaderProps extends VariantProps<typeof heading> {
  title: string
  subTitle: string
}

function header({ title, variants, subTitle, modifiers }: HeaderProps) {
  return (
    <header>
      <div className={heading({ variants, modifiers })}>
        <h1>{title}</h1>
      </div>
      <h2 className={subHeading({ variants, modifiers })}>{subTitle}</h2>
    </header>
  )
}

export default header
