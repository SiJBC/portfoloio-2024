import { CardComponents } from "@repo/ui/components"

export default function Home() {
  const {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
    CardFooter,
  } = CardComponents
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
