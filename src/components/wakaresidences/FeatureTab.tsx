"use client";

import React from "react";

export default function FeatureTab() {
  return (
    <div className="max-w-5xl mx-auto text-left space-y-16">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#2c4039] font-mono font-bold block">
          Privileges & Services
        </span>
        <h2 className="text-3xl font-serif font-light text-neutral-900">
          Features for Owners
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-white p-8 border border-neutral-200/60 rounded-xs shadow-2xs space-y-4 hover:border-amber-700/20 transition-colors">
          <div className="w-10 h-10 rounded-full bg-[#1e352f]/5 flex items-center justify-center text-[#1e352f] font-serif italic text-lg">
            W
          </div>
          <h4 className="font-serif text-xl font-light text-neutral-900">
            Waka Beach Club Alliance
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
            Owners of Waka Residences enjoy full, unrestricted access to the
            Waka Beach Club. This elite integration ensures beachfront lifestyle
            solutions are seamlessly extended to owners and their designated
            private guests.
          </p>
        </div>

        <div className="bg-white p-8 border border-neutral-200/60 rounded-xs shadow-2xs space-y-4 hover:border-amber-700/20 transition-colors">
          <div className="w-10 h-10 rounded-full bg-[#1e352f]/5 flex items-center justify-center text-[#1e352f] font-serif italic text-lg">
            R
          </div>
          <h4 className="font-serif text-xl font-light text-neutral-900">
            Resort Hospitality Integration
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
            Enjoy absolute utilization of certain common areas, premium
            operational facilities, and high-tier services of the neighboring
            Waka Gangga Resort. Resort-style services provided directly in the
            privacy of your exclusive sanctuary.
          </p>
        </div>
      </div>

      <div className="bg-[#1e352f] text-white p-8 md:p-12 rounded-xs text-center space-y-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200')] bg-cover bg-center" />
        <span className="text-[9px] uppercase tracking-[0.4em] text-amber-200 font-mono block relative z-10">
          Sunset Receptions
        </span>
        <h4 className="font-serif text-2xl font-light tracking-wide max-w-xl mx-auto relative z-10">
          “The perfect premium venue to relax, entertain and enjoy the famous
          Balinese sunsets.”
        </h4>
      </div>
    </div>
  );
}
