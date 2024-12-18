"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {

    //CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParam.get("q")

    console.log(q)

    const handleClick = () => {
        console.log("clicked");
        router.forword()

    }

  return ( 
      <div>
        <Link href="/" prefetch={false}>Click here</Link>
        <button onClick={handleClick}> Write and Redirect</button>
      </div>
    )
}

export default NavigationTestPage