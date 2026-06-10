"use client";

import React from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=400",
  "https://images.unsplash.com/photo-1505080856163-267d49b30626?q=80&w=400",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400",
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=400",
];

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {IMAGES.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden bg-gray-50 group cursor-pointer aspect-[3/4] relative shadow-sm hover:shadow-lg transition-all rounded-sm border border-gray-100"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${src}')` }}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-5 mt-12 text-xs text-gray-400 font-semibold tracking-wider p-2 border border-gray-100 rounded-full max-w-xs mx-auto">
        <span className="text-waka-dark font-bold cursor-pointer hover:bg-gray-50 px-3 py-1.5 rounded-full transition-colors">
          1
        </span>
        <span className="cursor-pointer hover:text-gray-800 transition px-3 py-1.5">
          2
        </span>
        <span className="cursor-pointer hover:text-gray-800 transition px-3 py-1.5">
          3
        </span>
        <span className="cursor-pointer hover:text-gray-800 transition px-3 py-1.5">
          Next
        </span>
      </div>
    </section>
  );
}
