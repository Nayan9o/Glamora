import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-soft">
      <div className="container grid gap-10 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-2xl font-semibold">Glamora</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Glow like never before. Premium beauty essentials, thoughtfully curated.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full bg-card text-foreground/70 shadow-soft transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/categories" className="hover:text-primary">Categories</Link></li>
            <li><Link to="/products" className="hover:text-primary">All Products</Link></li>
            <li><Link to="/products?sort=new" className="hover:text-primary">New Arrivals</Link></li>
            <li><Link to="/products?sort=best" className="hover:text-primary">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Help</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/orders" className="hover:text-primary">Order Tracking</Link></li>
            <li><Link to="/profile" className="hover:text-primary">My Account</Link></li>
            <li><a href="#" className="hover:text-primary">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-primary">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h4>
          <p className="mt-4 text-sm text-muted-foreground">Get 10% off your first order.</p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 rounded-full border border-border bg-card px-4 py-2 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-smooth hover:bg-primary/90">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Glamora. Crafted with love.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
