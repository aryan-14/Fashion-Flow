'use client';
import CartItem from '@/components/ui/CartItem';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useShoppingCart } from 'use-shopping-cart';
import Checkoutbtn from './Checkoutbtn';

const Cartsidebar = () => {
  const { cartCount, cartDetails, shouldDisplayCart, handleCartClick } = useShoppingCart();

  // Calculate the total price
  const totalPrice = Object.values(cartDetails).reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Format totalPrice as INR currency
  const formattedTotalPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(totalPrice);

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-12 text-black-400">My Shopping Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div className='text-black-400'>Your cart is empty</div>
          ) : (
            <ScrollArea className="h-[70vh] pr-4 mb-4">
              {cartDetails && Object.entries(cartDetails).map(([key, item]) => (
                <CartItem key={key} item={item} />
              ))}
            </ScrollArea>
          )}
        </>

        {cartCount > 0 && (
          <div>
            <div className='flex justify-between font-semibold'>
              <div className='uppercase text-black font-semibold'>Total</div>
              <div className='text-black font-semibold'>{formattedTotalPrice}</div>
            </div>

            <Checkoutbtn/>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default Cartsidebar;
