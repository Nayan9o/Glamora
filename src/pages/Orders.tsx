import { Package, Truck, MapPin, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";

interface OrderStep { label: string; icon: typeof Package; date: string; }

const steps: OrderStep[] = [
  { label: "Processing", icon: Package, date: "Apr 18" },
  { label: "Shipped", icon: Truck, date: "Apr 19" },
  { label: "Out for Delivery", icon: MapPin, date: "Apr 22" },
  { label: "Delivered", icon: CheckCircle2, date: "Apr 23" },
];

const orders = [
  {
    id: "GLM-1042",
    placed: "Apr 18, 2026",
    currentStep: 2,
    total: 132,
    items: [products[0], products[3], products[4]],
  },
  {
    id: "GLM-1031",
    placed: "Apr 02, 2026",
    currentStep: 3,
    total: 78,
    items: [products[2], products[8]],
  },
];

const Orders = () => {
  return (
    <div className="container animate-fade-in py-10 md:py-14">
      <h1 className="font-serif text-3xl md:text-4xl">Order Tracking</h1>
      <p className="mt-1 text-sm text-muted-foreground">Follow your beauty deliveries in real-time.</p>

      <div className="mt-8 space-y-8">
        {orders.map((o) => (
          <article key={o.id} className="overflow-hidden rounded-2xl bg-card shadow-card">
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-blush/50 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Order</p>
                <p className="font-serif text-lg">#{o.id}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Placed</p>
                <p className="text-sm font-medium">{o.placed}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Total</p>
                <p className="text-sm font-semibold">₹{o.total}</p>
              </div>
            </header>

            <div className="p-6">
              {/* Timeline */}
              <ol className="relative grid gap-6 sm:grid-cols-4 sm:gap-2">
                {steps.map((s, i) => {
                  const done = i <= o.currentStep;
                  const active = i === o.currentStep;
                  return (
                    <li key={s.label} className="relative flex items-start gap-3 sm:flex-col sm:items-center sm:text-center">
                      {i < steps.length - 1 && (
                        <span
                          className={`absolute left-4 top-9 h-full w-0.5 sm:left-1/2 sm:top-4 sm:h-0.5 sm:w-full sm:-translate-x-0 ${
                            i < o.currentStep ? "bg-primary" : "bg-border"
                          }`}
                          aria-hidden
                        />
                      )}
                      <span
                        className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full transition-smooth ${
                          done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        } ${active ? "ring-4 ring-primary/20" : ""}`}
                      >
                        <s.icon className="h-4 w-4" />
                      </span>
                      <div className="sm:mt-2">
                        <p className={`text-sm font-medium ${done ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</p>
                        {done && <p className="text-xs text-muted-foreground">{s.date}</p>}
                      </div>
                    </li>
                  );
                })}
              </ol>

              {/* Items */}
              <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-5">
                {o.items.map((it) => (
                  <div key={it.id} className="flex items-center gap-3 rounded-xl bg-muted/40 p-2 pr-4">
                    <div className="h-12 w-12 overflow-hidden rounded-lg bg-blush">
                      <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
                    </div>
                    <p className="text-xs font-medium">{it.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Orders;
