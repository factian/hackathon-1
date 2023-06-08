import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import Hero from "@/components/sections/Hero"
import heroImage from "/public/header.webp"
import Productlist from "@/components/sections/productlist" 
export default function Home() {
  return (
    <div>
      <Hero/>
      <Productlist />

    </div>
    
  )
}
