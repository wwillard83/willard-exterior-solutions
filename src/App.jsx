import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function WillardExteriorSolutionsWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.35),_transparent_35%),linear-gradient(to_bottom,_rgba(15,23,42,0.65),_rgba(2,6,23,1))]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <img
            src="/logo.png"
            alt="Willard Exterior Solutions logo"
            className="mx-auto mb-8 h-28 w-auto object-contain sm:h-36"
          />

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-300">
            Coming Soon
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Professional Pressure Washing & Exterior Cleaning
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Willard Exterior Solutions LLC will soon be serving Fort Smith, Greenwood, and surrounding Arkansas areas with residential and commercial exterior cleaning services.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:4794384993"
              className="w-full rounded-2xl bg-blue-600 px-8 py-4 text-center text-lg font-bold text-white shadow-xl transition hover:bg-blue-500 sm:w-auto"
            >
              Call 479-438-4993
            </a>

            <a
              href="mailto:wwillard@willardexteriorsolutions.com"
              className="w-full rounded-2xl border border-white/20 px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Email Us
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <Phone className="h-4 w-4 text-blue-300" />
              479-438-4993
            </div>

            <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <Mail className="h-4 w-4 text-blue-300" />
              wwillard@willardexteriorsolutions.com
            </div>

            <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <MapPin className="h-4 w-4 text-blue-300" />
              Fort Smith & Greenwood
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
