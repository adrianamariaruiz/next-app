import CartCounter from "@/shopping-cart/components/CartCounter";

export const metadata = {
  title: 'shopping cart',
  description: 'pagina contador'
}

export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos carrito de compras</span>
      <CartCounter value={20}/>
      
    </div>
  );
}