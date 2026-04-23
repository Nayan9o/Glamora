import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products, Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Products = () => {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("category") as Category | null;
  const initialQ = params.get("q") || "";

  const [selected, setSelected] = useState<Category[]>(initialCat ? [initialCat] : []);
  const [price, setPrice] = useState<[number, number]>([0, 1500]);
  const [q, setQ] = useState(initialQ);

  const toggleCat = (c: Category) => {
    setSelected((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selected.length && !selected.includes(p.category)) return false;
      if (p.price < price[0] || p.price > price[1]) return false;
      if (q && !`${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [selected, price, q]);

  return (
    <div className="container animate-fade-in py-10 md:py-14">
      <header className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl">All Products</h1>
        <p className="mt-2 text-sm text-muted-foreground">{filtered.length} products</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Filters */}
        <aside className="space-y-7 rounded-2xl bg-card p-6 shadow-card lg:sticky lg:top-24 lg:h-fit">
          <div>
            <Label htmlFor="search" className="mb-2 block text-xs font-semibold uppercase tracking-wider">Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="search"
                value={q}
                onChange={(e) => { setQ(e.target.value); setParams({}); }}
                placeholder="Search…"
                className="pl-9"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">Category</h3>
            <div className="space-y-2.5">
              {categories.map((c) => (
                <label key={c.name} className="flex cursor-pointer items-center gap-3 text-sm">
                  <Checkbox checked={selected.includes(c.name)} onCheckedChange={() => toggleCat(c.name)} />
                  {c.name}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">Price</h3>
            <Slider
              value={price}
              min={0}
              max={1500}
              step={50}
              onValueChange={(v) => setPrice([v[0], v[1]] as [number, number])}
            />
            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>₹{price[0]}</span><span>₹{price[1]}</span>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-card p-12 text-center shadow-card">
              <p className="text-muted-foreground">No products match your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
