"use client";

import React from "react";

interface FooterProps {
  // Props baru untuk kustomisasi penuh judul dan warna
  title?: string;
  subtitle?: string;
  backgroundColor?: string; // Menerima kode warna Tailwind (cth: "bg-[#556b2f]") atau HEX kustom

  // Props opsional tambahan untuk utilitas teks dinamis
  phoneNumber?: string;
  phoneDisplay?: string;
  copyrightName?: string;
}

export default function Footer({
  title = "Waka Hotels & Resorts",
  subtitle,
  backgroundColor = "bg-[#4a1525]", // Default ke Deep Maroon jika tidak diisi
  phoneNumber = "+62361705555",
  phoneDisplay = "+62 361 705 555",
  copyrightName = "Waka Hotels & Resorts",
}: FooterProps) {
  return (
    <footer
      className={`relative text-white/80 pt-16 pb-12 px-6 transition-all duration-500 overflow-hidden ${backgroundColor}`}
      
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10">
        {/* 1. BRAND IDENTITY LOGO (Dinamis Berdasarkan Prop Judul) */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl md:text-3xl font-serif tracking-[0.18em] text-white font-normal leading-tight uppercase">
            {title}
          </h2>
          {subtitle && (
            <span className="text-[8px] md:text-[9px] block font-sans tracking-[0.35em] font-light text-white/60 uppercase max-w-md mx-auto leading-relaxed">
              {subtitle}
            </span>
          )}
        </div>

        {/* 2. HORIZONTAL INLINE LINKS & SOCIAL MEDIA SECTION */}
        <div className="w-full space-y-4">
          <hr className="border-white/15 w-full" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-y-6 px-2">
            {/* Navigasi Sejajar Garis (Sisi Kiri) */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-white/70">
              {[
                "About Us",
                "Philosophy",
                "Management",
                "Contact Us",
                "Sitemap",
                "Press Releases",
                "Blog",
                "Careers",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Ikon Media Sosial Sejajar Garis (Sisi Kanan) */}
            <div className="flex items-center space-x-5 text-white/60">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <hr className="border-white/15 w-full" />
        </div>

        {/* 3. BASE CONTENT ROW: Kontak Utama & Hak Cipta */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-widest text-white/50 space-y-4 sm:space-y-0 px-2 font-light">
          {/* Sisi Kiri: Tautan Nomor Reservasi */}
          <div className="flex flex-col items-center sm:items-start space-y-1">
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40 block">
              Make Request
            </span>
            <a
              href={`tel:${phoneNumber}`}
              className="text-white hover:text-white/90 font-medium tracking-wide underline decoration-white/20 underline-offset-4 transition-colors"
            >
              {phoneDisplay}
            </a>
          </div>

          {/* Sisi Kanan: Status Kepemilikan Hak Cipta */}
          <div className="text-center sm:text-right space-y-1">
            <p className="text-white/60 font-medium">© {copyrightName}</p>
            <p className="text-[9px] text-white/30">
              2026 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
