import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaX } from 'react-icons/fa6';

const CartItem = ({ item, }) => {
 const {removeItem,incrementItem, decrementItem} = useShoppingCart();


  return (
    <div className="flex w-full justify-between mb-4 h-[120px] border-b items-center">
      {/* Image */}
      <div className="w-[110px] h-[110px] relative">
  {item.images && item.images[0] && (
    <Image
      src={urlFor(item.images[0]).url()}
      fill
      priority
      sizes="(max-width:110px) 110px 110px 110px"
      alt={item.name} 
    />
  )}
</div>

      {/* Name, Price, Quantity, Remove */}
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <h5 className="text-black mr-10">{item.name}</h5>
          <button onClick={()=> removeItem(item.id)}><FaX className="text-sm text-black" /></button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={()=>decrementItem(item.id)} className="text-black"><FaMinus /></button>
            <div className="text-black">{item.quantity}</div>
            <button onClick={()=>incrementItem(item.id)} className="text-black"><FaPlus /></button>
          </div>
          <div className="text-black">{(item.price * item.quantity).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
