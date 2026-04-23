import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getProduct, products } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";
import Rating from "@/components/Rating";
import ProductCard from "@/components/ProductCard";
import { Heart, Minus, Plus, Truck, RotateCcw, Shield } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container py-24 text-center">
        <p>Product not found.</p>
        <Link to="/products" className="mt-4 inline-block text-primary underline">Back to products</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const wished = isWishlisted(product.id);

  return (
    <div className="container animate-fade-in py-10 md:py-14">
      <nav className="mb-6 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> ·{" "}
        <Link to="/products" className="hover:text-primary">Shop</Link> · {product.category}
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-blush shadow-card">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{product.category}</p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl">{product.name}</h1>
            <Rating value={product.rating} reviews={product.reviews} size="md" />
          </div>

          <p className="text-3xl font-semibold">₹{product.price}</p>
          <p className="text-base leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-full border border-border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-10 w-10 place-items-center hover:text-primary">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm font-medium">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="grid h-10 w-10 place-items-center hover:text-primary">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button size="lg" className="flex-1 rounded-full" onClick={() => addToCart(product, qty)}>
              Add to Bag
            </Button>
            <Button size="icon" variant="outline" className="rounded-full" onClick={() => toggleWishlist(product.id)}>
              <Heart className={`h-5 w-5 ${wished ? "fill-primary text-primary" : ""}`} />
            </Button>
          </div>

          <div className="grid gap-3 rounded-2xl bg-card p-5 shadow-card">
            {[
              { icon: Truck, t: "Free shipping over ₹50" },
              { icon: RotateCcw, t: "30-day easy returns" },
              { icon: Shield, t: "Cruelty-free & dermatologist tested" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <f.icon className="h-4 w-4 text-primary" /> {f.t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl">Reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { n: "Aria S.", t: "Absolutely obsessed", c: "The pigment is gorgeous and lasted all day. Will repurchase!" },
            { n: "Maya K.", t: "Beautiful packaging", c: "Feels luxurious — perfect for gifting. Color is exactly as shown." },
            { n: "Lily R.", t: "My new favorite", c: "Comfortable wear and the shade flatters my skin tone perfectly." },
          ].map((r, i) => (
            <article key={i} className="rounded-2xl bg-card p-5 shadow-card">
              <Rating value={5} />
              <h3 className="mt-2 font-serif text-lg">{r.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.c}</p>
              <p className="mt-3 text-xs font-medium">— {r.n}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 font-serif text-2xl">You may also love</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
