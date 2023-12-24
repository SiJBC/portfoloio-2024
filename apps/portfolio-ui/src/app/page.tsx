import { Button } from "@repo/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col font-bold text-4xl bg-white text-blue-900">
      Beep
      <Button appName="hello">Hello</Button>
    </div>
  )
}
