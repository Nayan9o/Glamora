import { Link } from "react-router-dom";
import { categories, products } from "@/data/products";

const Categories = () => {
  return (
    <div className="container animate-fade-in py-12 md:py-16">
      <header className="mb-10 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Explore</p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">All Categories</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          From a perfect everyday lip to your evening glow ritual — find it all here.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {categories.map((c) => {
          const count = products.filter((p) => p.category === c.name).length;
          return (
            <Link
              key={c.name}
              to={`/products?category=${encodeURIComponent(c.name)}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow"
            >
              <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                <h3 className="font-serif text-2xl">{c.name}</h3>
                <p className="mt-1 text-xs text-background/80">{count} products</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
