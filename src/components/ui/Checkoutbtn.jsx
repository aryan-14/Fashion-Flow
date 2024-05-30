import { useShoppingCart } from "use-shopping-cart";


const Checkoutbtn = () => {

    const {redirectToCheckout} = useShoppingCart();
   const handlecheckout = async ()=> {
    try{
        const res = await redirectToCheckout();
        if(res?.error){
            console.log(res);
        }

    }catch(error){
     console.log(error)
    }
   }

    
  return (
    <button className="text-black btn btn-primary w-full" onClick={handlecheckout}>
     
      Procced to checkout!
      </button>
    
  )
}

export default Checkoutbtn
