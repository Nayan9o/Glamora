import { useState } from "react";
import { User, MapPin, Settings, Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  const [tab, setTab] = useState<"details" | "addresses" | "settings">("details");

  return (
    <div className="container animate-fade-in py-10 md:py-14">
      <header className="mb-10 flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-primary text-2xl font-serif text-primary-foreground shadow-soft">
          T
        </div>
        <div>
          <h1 className="font-serif text-3xl">Hello, Taniya</h1>
          <p className="text-sm text-muted-foreground">Member since 2026 · Glamora  ✨</p>
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <aside className="space-y-1 rounded-2xl bg-card p-3 shadow-card md:h-fit">
          {[
            { id: "details", label: "Profile", icon: User },
            { id: "addresses", label: "Addresses", icon: MapPin },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as typeof tab)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-smooth ${
                tab === t.id ? "bg-blush font-medium text-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </aside>

        <section className="rounded-2xl bg-card p-6 shadow-card md:p-8">
          {tab === "details" && (
            <div className="space-y-5">
              <h2 className="font-serif text-2xl">Profile Details</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Full name</Label>
                  <Input defaultValue="Taniya Laxane" className="mt-1.5" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input defaultValue="taniya@glamora.co" className="mt-1.5" />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input defaultValue="+91 555 0142" className="mt-1.5" />
                </div>
                <div>
                  <Label>Birthday</Label>
                  <Input type="date" defaultValue="2004-04-19" className="mt-1.5" />
                </div>
              </div>
              <Button className="rounded-full">Save changes</Button>
            </div>
          )}

          {tab === "addresses" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl">Saved Addresses</h2>
                <Button size="sm" variant="outline" className="rounded-full">
                  <Plus className="mr-1.5 h-4 w-4" /> Add new
                </Button>
              </div>
              {[
                { label: "Home", line: "9 Malgi Nagar, Apt 4B", city: "Nagpur, 440034 ", default: true },
                { label: "Work", line: "Mahalaxmi aprtment, Floor 1", city: "Nagpur, 440034" },
              ].map((a, i) => (
                <div key={i} className="flex items-start justify-between gap-4 rounded-xl border border-border p-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{a.label}</p>
                      {a.default && <span className="rounded-full bg-blush px-2 py-0.5 text-[10px] font-medium text-primary">Default</span>}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{a.line}</p>
                    <p className="text-sm text-muted-foreground">{a.city}</p>
                  </div>
                  <button className="text-muted-foreground hover:text-primary">
                    <Pencil className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {tab === "settings" && (
            <div className="space-y-5">
              <h2 className="font-serif text-2xl">Settings</h2>
              {[
                { t: "Email notifications", d: "Order updates and special offers" },
                { t: "SMS alerts", d: "Shipping notifications via text" },
                { t: "Personalized recommendations", d: "Use my activity to suggest products" },
                { t: "Beauty newsletter", d: "Tips, trends and editorials" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between gap-4 rounded-xl border border-border p-5">
                  <div>
                    <p className="font-medium">{s.t}</p>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                  <Switch defaultChecked={i < 2} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profile;
