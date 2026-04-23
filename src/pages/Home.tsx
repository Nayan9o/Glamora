import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Truck, Shield, Gift } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Home = () => {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="container grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-medium text-primary shadow-soft">
              <Sparkles className="h-3.5 w-3.5" /> New Spring Edit
            </span>
            <h1 className="font-serif text-5xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              Glow Like <em className="text-primary not-italic">Never</em> Before
            </h1>
            <p className="max-w-md text-base text-muted-foreground md:text-lg">
              Discover thoughtfully curated beauty essentials — from velvet lipsticks to dewy serums — crafted to make you radiate.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/products">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden />
            <img
              src={heroImg}
              alt="Glamora luxury beauty products"
              width={1600}
              height={1024}
              className="relative w-full rounded-[2rem] object-cover shadow-glow"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="container grid grid-cols-2 gap-6 py-6 md:grid-cols-4">
          {[
            { icon: Truck, label: "Free shipping over ₹50" },
            { icon: Shield, label: "Cruelty-free & vegan" },
            { icon: Gift, label: "Free samples in every order" },
            { icon: Sparkles, label: "Trusted by 100k beauties" },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <f.icon className="h-5 w-5 text-primary" />
              <span className="text-foreground/80">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories preview */}
      <section className="container py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Shop by category</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">Find your beauty ritual</h2>
          </div>
          <Link to="/categories" className="hidden text-sm font-medium text-primary hover:underline md:block">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {categories.slice(0, 6).map((c) => (
            <Link
              key={c.name}
              to={`/products?category=${encodeURIComponent(c.name)}`}
              className="group flex flex-col items-center gap-3"
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-blush shadow-card transition-smooth group-hover:shadow-glow">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
              </div>
              <span className="text-sm font-medium">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Promo banners */}
      <section className="container grid gap-6 md:grid-cols-2">
        {[
          { img: promo1, eyebrow: "Limited", title: "Bloom Edit", desc: "Up to 30% off select florals", link: "/products?category=Fragrance" },
          { img: promo2, eyebrow: "Bestsellers", title: "The Daily Glow", desc: "Cult-favorite essentials", link: "/products" },
        ].map((b, i) => (
          <Link key={i} to={b.link} className="group relative h-64 overflow-hidden rounded-3xl shadow-card md:h-80">
            <img src={b.img} alt={b.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-center gap-3 p-8 md:p-12">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{b.eyebrow}</span>
              <h3 className="font-serif text-3xl md:text-4xl">{b.title}</h3>
              <p className="max-w-xs text-sm text-foreground/80">{b.desc}</p>
              <span className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary">
                Shop now <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Featured products */}
      <section className="container py-16 md:py-24">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Most loved</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Featured products</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-6">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* CTA banner */}
      <section className="container pb-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-primary px-8 py-16 text-center text-primary-foreground shadow-glow md:px-16">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl md:text-5xl">
            Beauty that feels as good as it looks.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/90">
            Join the Glamora Club for early access, exclusive offers, and birthday surprises.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-8">
            <Link to="/profile">Join the Club</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
