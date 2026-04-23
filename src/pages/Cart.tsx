import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cart, updateQty, removeFromCart, cartTotal, clearCart } = useStore();
  const shipping = cartTotal > 50 || cartTotal === 0 ? 0 : 6;
  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="container animate-fade-in py-24 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
        <h1 className="mt-6 font-serif text-3xl">Your bag is empty</h1>
        <p className="mt-2 text-muted-foreground">Let's find something beautiful for you.</p>
        <Button asChild size="lg" className="mt-8 rounded-full px-8">
          <Link to="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in py-10 md:py-14">
      <h1 className="font-serif text-3xl md:text-4xl">Your Bag</h1>
      <p className="mt-1 text-sm text-muted-foreground">{cart.length} item{cart.length > 1 ? "s" : ""}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-2xl bg-card p-4 shadow-card">
              <Link to={`/product/${item.id}`} className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-blush sm:h-28 sm:w-28">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col justify-between gap-2">
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{item.category}</p>
                    <Link to={`/product/${item.id}`} className="font-serif text-base hover:text-primary">
                      {item.name}
                    </Link>
                  </div>
                  <p className="font-semibold whitespace-nowrap">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-border">
                    <button onClick={() => updateQty(item.id, item.quantity - 1)} className="grid h-8 w-8 place-items-center hover:text-primary">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.quantity + 1)} className="grid h-8 w-8 place-items-center hover:text-primary">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="text-xs text-muted-foreground hover:text-destructive">
            Clear bag
          </button>
        </div>

        <aside className="h-fit rounded-2xl bg-card p-6 shadow-card lg:sticky lg:top-24">
          <h2 className="font-serif text-xl">Order Summary</h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>₹{cartTotal.toFixed(2)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Shipping</dt><dd>{shipping === 0 ? "Free" : `$${shipping}`}</dd></div>
            <div className="my-2 border-t border-border" />
            <div className="flex justify-between text-base font-semibold"><dt>Total</dt><dd>₹{total.toFixed(2)}</dd></div>
          </dl>
          <Button size="lg" className="mt-6 w-full rounded-full">Checkout</Button>
          <Link to="/products" className="mt-3 block text-center text-xs text-muted-foreground hover:text-primary">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
