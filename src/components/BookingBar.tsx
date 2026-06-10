"use client";

import React from "react";

export default function BookingBar() {
  return (
    <section className="max-w-5xl mx-auto px-4 -mt-12 relative z-40">
      <div className="bg-waka-dark text-white p-6 md:p-8 rounded-sm shadow-2xl border border-white/10 transition-colors duration-500">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-[11px] tracking-widest uppercase font-semibold text-gray-200">
          <div className="space-y-2">
            <label className="block">Check-in *</label>
            <input
              type="date"
              className="w-full bg-white/10 border border-white/15 text-white p-3 rounded-sm focus:outline-none focus:border-white transition-all text-xs"
            />
          </div>
          <div className="space-y-2">
            <label className="block">Check-out *</label>
            <input
              type="date"
              className="w-full bg-white/10 border border-white/15 text-white p-3 rounded-sm focus:outline-none focus:border-white transition-all text-xs"
            />
          </div>
          <div className="space-y-2">
            <label className="block">Adults</label>
            <input
              type="number"
              defaultValue={2}
              min={1}
              className="w-full bg-white/10 border border-white/15 text-white p-3 rounded-sm focus:outline-none focus:border-white transition-all text-xs"
            />
          </div>
          <div className="space-y-2">
            <label className="block">Children</label>
            <input
              type="number"
              defaultValue={0}
              min={0}
              className="w-full bg-white/10 border border-white/15 text-white p-3 rounded-sm focus:outline-none focus:border-white transition-all text-xs"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-transparent border-2 border-white/40 hover:border-white px-16 py-3.5 text-xs uppercase tracking-[0.25em] transition-all font-bold hover:bg-white/10 active:scale-95 shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
