import HomePage from "@/components/homepage";
import { DateProvider } from "@/contextProvider";


export default function Home() {
  return (
    <DateProvider><HomePage /></DateProvider>
  )
}
