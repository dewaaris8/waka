"use client";

import React from "react";

export default function ResidenceTab() {
  return (
    <div className="space-y-16 text-left max-w-3xl mx-auto py-4">
      {/* 1. HERO IMAGE & TITLE SECTION */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-amber-600 block">
            The Heritage Investment
          </span>
          <h3 className="font-serif text-3xl font-light text-neutral-900 tracking-wide uppercase">
            Waka Residences
          </h3>
        </div>

        <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden shadow-sm rounded-xs">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
            alt="Waka Residences Premium Exterior Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
        </div>

        {/* EDITORIAL BLOCKQUOTE */}
        <p className="italic text-base font-serif text-neutral-800 bg-gradient-to-r from-[#3e80a2]/5 to-transparent p-4 border-l-2 border-amber-600">
          &ldquo;Investment in real estate has spread rapidly to Tabanan, famed
          for its dramatic black sand beaches and stunning rice fields.&rdquo;
        </p>
      </div>

      {/* 2. MAIN DESCRIPTION SECTION */}
      <div className="space-y-4 border-t border-neutral-100 pt-8">
        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
          OVERVIEW
        </span>
        <div className="space-y-4 text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
          <p>
            Beside the newly renovated boutique resort of WakaGangga, Waka
            Residences defines Waka style in a series of privately owned
            residences designed to provide the investor with a property that
            whispers with style in one of the most sought after areas of Bali.
          </p>
          <p>
            Laid out over brilliantly green terraced rice fields, which slope
            towards a dramatic black sand surf beach, WakaGangga combines
            stylish architecture with natural beauty and resort-style services.
          </p>
        </div>
      </div>

      {/* 3. INSPIRED COLLECTION & ESTATE DETAIL */}
      <div className="space-y-4 border-t border-neutral-100 pt-8">
        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
          THE ARCHITECTURE &amp; ESTATE FEATURES
        </span>

        <div className="bg-neutral-50/50 border border-neutral-100 p-5 space-y-4 rounded-xs">
          <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
            Created in a unique blend of the rustic and the contemporary by
            Bali’s leading designers, Waka Residences is an inspired collection
            of privately owned villas surrounded by Bali as the gods created it.
            Waka Residences features eleven spectacularly located,
            architecturally inspired villas in a fully managed estate with
            unrestricted ownership.
          </p>

          {/* MICRO METRICS FOR SCANNABILITY */}
          <div className="w-full h-[1px] bg-neutral-200/50 my-2" />
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <h5 className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                Estate Scale
              </h5>
              <p className="font-serif text-base font-light text-neutral-800">
                11 Spectacular Villas
              </p>
            </div>
            <div>
              <h5 className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                Ownership Framework
              </h5>
              <p className="font-serif text-base font-light text-neutral-800">
                Fully Unrestricted
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. ENVIRONMENT & VISTA SECTION */}
      <div className="space-y-4 border-t border-neutral-100 pt-8">
        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium block">
          NATURAL SURROUNDINGS
        </span>
        <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
          Each residence embraces the beauty of the surrounding area; dramatic
          black sand beaches, verdant rice fields stretching endlessly towards
          majestic volcanic mountains. Natural terracing ensures each residence
          enjoys endless vistas of spectacular beauty.
        </p>
      </div>

      {/* FOOTNOTE NOTIFICATION */}
      <p className="text-[10px] text-neutral-400 italic font-light pt-4 border-t border-neutral-100 leading-relaxed">
        * Management framework, rental pool structures, and technical estate
        villa services are operated under premium Waka style guidelines.
      </p>
    </div>
  );
}
