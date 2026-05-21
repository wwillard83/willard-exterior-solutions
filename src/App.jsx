import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Droplets,
  Building2,
  Truck,
  Home,
  Sparkles,
  CheckCircle,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Commercial", href: "#commercial" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  [Home, "House Washing", "Safe soft washing for siding, trim, gutters, and exterior surfaces."],
  [Droplets, "Driveway & Concrete Cleaning", "Remove dirt, algae, grime, and stains from concrete surfaces."],
  [Building2, "Commercial Property Cleaning", "Storefronts, sidewalks, dumpster pads, common areas, and more."],
  [Truck, "Fleet Washing", "Routine cleaning for patrol units, vans, work trucks, and company vehicles."],
  [Sparkles, "Soft Washing", "Low-pressure cleaning designed for delicate exterior surfaces."],
  [CalendarDays, "Recurring Maintenance", "Weekly, biweekly, monthly, quarterly, and annual service plans."],
];

export default function WillardExteriorSolutionsWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-white pb-20 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" onClick={closeMenu} className="flex min-w-0 items-center gap-3">
            <img
              src="/logo.png"
              alt="Willard Exterior Solutions logo"
              className="h-12 w-auto object-contain sm:h-14 md:h-16"
            />
            <div className="min-w-0">
              <p className="truncate text-base font-bold tracking-wide sm:text-lg">Willard Exterior Solutions</p>
              <p className="text-xs text-slate-300 sm:text-sm">Professional Exterior Cleaning</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-blue-300">
                {link.label}
              </a>
            ))}
            <a
              href="tel:4794384993"
              className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-lg transition hover:bg-blue-500"
            >
              Call Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-xl border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-slate-200 transition hover:bg-white/10 hover:text-blue-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <a
        href="tel:4794384993"
        className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl bg-blue-600 py-4 text-center text-lg font-bold text-white shadow-2xl transition hover:bg-blue-500 md:hidden"
      >
        📞 Call 479-438-4993
      </a>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.35),_transparent_35%),linear-gradient(to_bottom,_rgba(15,23,42,0.4),_rgba(2,6,23,1))]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-28 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <p className="mb-4 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-200 sm:text-sm">
                Serving Fort Smith, Greenwood & Surrounding Areas
              </p>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Professional Pressure Washing & Exterior Cleaning
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Residential and commercial exterior cleaning built on reliability, professionalism, and clean results.
                From driveways and siding to fleet and property maintenance, we help your property look its best.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-blue-600 px-6 py-3 text-center font-bold shadow-xl transition hover:bg-blue-500"
                >
                  Get a Free Quote
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-center font-bold transition hover:bg-white/10"
                >
                  View Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl sm:p-6"
            >
              <img
                src="/hero.png"
                alt="Willard Exterior Solutions exterior cleaning hero"
                className="aspect-[16/10] w-full rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl md:mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Our Services</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Exterior cleaning for homes, businesses, and fleets.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-lg">
                  <Icon className="mb-5 h-9 w-9 text-blue-300" />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="commercial" className="scroll-mt-24 bg-slate-900/70 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Commercial Contracts</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Keep your property inspection-ready year round.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                We offer recurring cleaning programs for businesses, property managers, fleets, apartments,
                government facilities, and commercial properties.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-6 sm:p-8">
              {[
                "Weekly, biweekly, monthly, or quarterly service",
                "Fleet and patrol unit washing",
                "Sidewalks, entrances, drive-thrus, and storefronts",
                "Professional communication and reliable scheduling",
                "Proof of insurance available upon request",
              ].map((item) => (
                <div key={item} className="mb-4 flex gap-3 text-slate-200 last:mb-0">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-blue-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:gap-10">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Built on professionalism, integrity, and results.</h2>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Willard Exterior Solutions LLC is locally owned and focused on dependable exterior cleaning for
                residential and commercial customers. Our goal is simple: show up professionally, communicate clearly,
                and leave every property looking better than when we arrived.
              </p>
            </div>
            <div className="rounded-3xl border border-blue-400/20 bg-blue-600/10 p-6 sm:p-8">
              <h3 className="text-2xl font-bold">Why choose us?</h3>
              <div className="mt-6 space-y-4 text-slate-200">
                <p>• Locally owned and operated</p>
                <p>• Residential and commercial service</p>
                <p>• Professional equipment and cleaning methods</p>
                <p>• Recurring maintenance plans available</p>
                <p>• Free quotes and clear communication</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-slate-900 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Request a Quote</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Ready for a cleaner property?</h2>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
                Call, email, or send a quote request and we’ll get back with you as soon as possible.
              </p>
              <div className="mt-8 space-y-4 text-slate-200">
                <a href="tel:4794384993" className="flex items-center gap-3 transition hover:text-blue-300">
                  <Phone className="h-5 w-5 text-blue-300" /> 479-438-4993
                </a>
                <a href="mailto:wwillard@willardexteriorsolutions.com" className="flex items-center gap-3 transition hover:text-blue-300">
                  <Mail className="h-5 w-5 text-blue-300" /> wwillard@willardexteriorsolutions.com
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-300" /> Fort Smith, Greenwood & surrounding areas
                </p>
              </div>
            </div>

            <form
              action="https://formsubmit.co/wwillard@willardexteriorsolutions.com"
              method="POST"
              className="rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-xl"
            >
              <input type="hidden" name="_subject" value="New quote request from Willard Exterior Solutions website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-4">
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Name
                  <input
                    required
                    name="name"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="Your phone number"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Email
                  <input
                    name="email"
                    type="email"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="Your email"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Service Needed
                  <select
                    name="service"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-400"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-slate-950">Select a service</option>
                    <option className="bg-slate-950">House Washing</option>
                    <option className="bg-slate-950">Driveway & Concrete Cleaning</option>
                    <option className="bg-slate-950">Commercial Property Cleaning</option>
                    <option className="bg-slate-950">Fleet Washing</option>
                    <option className="bg-slate-950">Recurring Maintenance</option>
                    <option className="bg-slate-950">Other</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Message
                  <textarea
                    required
                    name="message"
                    className="min-h-32 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="Tell us about the property, surfaces, location, and preferred timing."
                  />
                </label>

                <button type="submit" className="rounded-2xl bg-blue-600 px-6 py-3 font-bold transition hover:bg-blue-500">
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        <p>© 2026 Willard Exterior Solutions LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
