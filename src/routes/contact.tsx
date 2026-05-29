import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Maison Velour" },
      { name: "description", content: "Get in touch with our Paris atelier for orders, commissions and enquiries." },
      { property: "og:title", content: "Contact · Maison Velour" },
      { property: "og:description", content: "Get in touch with our Paris atelier." },
    ],
  }),
  component: Contact,
});

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-cocoa focus:ring-2 focus:ring-cocoa/10";
const label = "text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground";

function Contact() {
  return (
    <SiteLayout>
      <section className="bg-cream pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">Get in touch</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight sm:text-6xl">
            Come visit us, or <em className="italic">write.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <div className="space-y-8">
          {[
            { i: MapPin, t: "Atelier", v: "14 Rue Saint-Honoré, 75001 Paris" },
            { i: Phone, t: "Phone", v: "+33 1 42 60 18 04" },
            { i: Mail, t: "Email", v: "hello@maisonvelour.com" },
            { i: Clock, t: "Hours", v: "Tue – Sat, 10am – 7pm" },
          ].map(({ i: Icon, t, v }) => (
            <div key={t} className="flex items-start gap-5 border-b border-border pb-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-secondary">
                <Icon className="h-5 w-5 text-cocoa" />
              </div>
              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">{t}</h3>
                <p className="mt-1 font-display text-xl">{v}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            (e.target as HTMLFormElement).reset();
            toast.success("Thank you — we'll be in touch within 24 hours.");
          }}
          className="rounded-3xl border border-border bg-cream p-8 sm:p-10"
        >
          <h2 className="font-display text-3xl">Send a note</h2>
          <div className="mt-8 space-y-5">
            <label className="block"><span className={label}>Your name</span><input required className={`${field} mt-2`} /></label>
            <label className="block"><span className={label}>Email</span><input required type="email" className={`${field} mt-2`} /></label>
            <label className="block"><span className={label}>Subject</span><input required className={`${field} mt-2`} /></label>
            <label className="block"><span className={label}>Message</span><textarea required rows={5} className={`${field} mt-2 resize-none`} /></label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-cocoa py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground transition hover:opacity-90"
            >
              Send message
            </button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}
