'use client';



import Link from "next/link"
import Nav from "./Nav"
import Cartsidebar from "./Cartsidebar"
import {CgShoppingBag} from 'react-icons/cg';
import { useShoppingCart } from "use-shopping-cart";


const Header = () =>{

  const {cartCount,handleCartClick} = useShoppingCart();
  return <header className="bg-[#89CFF0] shadow-lg sticky top-0 py-8 z-40 ">
    <div className="container mx-auto flex justify-between items-center">
      <Link href={'/'} className="hover:text-current">
      <h1 className="text-[26px]">
        <span >Clothing Brand</span>
      </h1>
      </Link>
      <div className="flex items-center gap-[26px]">
        <Nav ContainerStyles="flex items-center gap-[26px]" />
        <div onClick={()=>{handleCartClick()}} className="relative cursor-pointer">
          <CgShoppingBag className="text-[26px]"/>
          <div className="bg-white w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-[#89CFF0] flex items-center justify-center test-sm font-medium ">{cartCount}</div>
        </div>
        <Cartsidebar />
      </div>

      
    </div>
    
  </header>
}

export default Header