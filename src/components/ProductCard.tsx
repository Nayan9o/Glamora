import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import Rating from "./Rating";
import { useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const wished = isWishlisted(product.id);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow">
      <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-blush">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth group-hover:scale-105"
        />
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          aria-label="Toggle wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-card/90 backdrop-blur transition-smooth hover:bg-card"
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-primary text-primary" : "text-foreground/70"}`} />
        </button>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-2 font-serif text-base leading-snug text-foreground hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <Rating value={product.rating} reviews={product.reviews} />
        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="font-semibold text-foreground">₹{product.price}</p>
          <Button
            size="sm"
            onClick={() => addToCart(product)}
            className="rounded-full opacity-0 transition-smooth group-hover:opacity-100 sm:opacity-100"
          >
            <ShoppingBag className="mr-1.5 h-3.5 w-3.5" /> Add
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
