import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  const { wishlist } = useStore();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="container animate-fade-in py-10 md:py-14">
      <h1 className="font-serif text-3xl md:text-4xl">Your Wishlist</h1>
      <p className="mt-1 text-sm text-muted-foreground">{items.length} saved item{items.length !== 1 ? "s" : ""}</p>

      {items.length === 0 ? (
        <div className="mt-12 rounded-2xl bg-card p-12 text-center shadow-card">
          <Heart className="mx-auto h-10 w-10 text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">You haven't saved anything yet.</p>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/products">Discover products</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
