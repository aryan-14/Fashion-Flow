'use client'

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from 'react-icons/cg'

import Addtocartbutton from "./Addtocartbutton";

const Products = ({ products }) => {



  const Hoodies = products.categories.find((products) => products.name === 'Hoodies');

  const Pant = products.categories.find((products) => products.name === 'Pant');

  const Shirts = products.categories.find((products) => products.name === 'Shirts');

  const Polo = products.categories.find((products) => products.name === 'Polo');

  return (
    <div className="group">
      <div className="border h-[380px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {products && (<div className="absolute top-8 left-8 bg-accent text-white px-3 text-sn uppercase font-medium">Products</div>)}

          <Image src={urlFor(products.images[0]).url()} width={240} height={147} alt=" "/>

        </div>

        {/*button group  */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Addtocartbutton 
          id={products._id}
          name={products.name} 
          price_id={products.price_id}
          currency={'INR'} 
          description={products.description}
           images={products.images}
           price={products.price} 
           btnstyles={'btn btn-accent'}
             icon={<CgShoppingBag/>}/>

          <Link href={`/product/${products.slug}`}>
            <button className="btn-icon btn-black ">
              <CgEye color="white"/>
            </button> 
            </Link>

        </div>
      </div>

      <h5 className="text-gray-400 font-semibold mg-2">{products.categories[0].name}</h5>
      <h4 className="mb-1">{products.name}</h4>
      <div className="text-lg font-bold text-accent ">₹{products.price}</div>
    </div>
  )
}

export default Products
