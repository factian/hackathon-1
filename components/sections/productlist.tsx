import Image from "next/image"
import React from 'react'
import ProductCard from "@/components/productCard"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"

export const productlist = () => {
  return (
   <div className="flex justify-evenly mt-16">
        <ProductCard title="abc" price={100} img={P1}/>
        <ProductCard title="xyz" price={500} img={P1}/>
        <ProductCard title="Jacket" price={1000} img={P3}/>
    </div>

  )
}
export default productlist
