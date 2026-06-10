"use client";

import React from "react";

export default function MarketingTab() {
  const partners = [
    {
      city: "Jakarta Partner",
      office: "Indonesia Stock Exchange Building",
      details: [
        "Tower 2, 19th Floor",
        "Jl. Jendral Sudirman Kav. 52-53",
        "Jakarta 12190",
      ],
      tel: "(+62)21-2922 3888",
      fax: "(+62)21-515 3232",
      contactName: "Ekka",
      contactPhone: "(+62)816-1753 5265",
      email: "residential.indo@ap.jll.com",
    },
    {
      city: "Bali Partner",
      office: "Nakula Square",
      details: ["Jl. Nakula Square", "Legian Kaja", "Kuta – Bali 80361"],
      tel: "(+62)361-747 2882",
      fax: "(+62)361-894 7036",
      contactName: "Dan Miller",
      contactPhone: "(+62) 818 562 000",
      email: "dan.miller@ap.jll.com",
      web: "www.joneslanglasalle.co.id",
    },
    {
      city: "Waka Hotels and Resorts",
      office: "Headquarters Office",
      details: ["Jl. Imam Bonjol no. 467", "Denpasar", "Bali, Indonesia"],
      tel: "(+62)361-484085",
      email: "info@wakahotelsandresorts.com",
    },
  ];

  return (
    <div className="space-y-16 text-left">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-700 font-mono font-bold block">
          Portfolio Inquiries
        </span>
        <h2 className="text-3xl font-serif font-light text-neutral-900">
          Global Marketing Partners
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white border border-neutral-200/60 rounded-xs p-8 shadow-3xs space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#1e352f] group-hover:h-full transition-all duration-500" />

            <div className="space-y-1">
              <span className="text-[9px] font-mono tracking-wider uppercase text-neutral-400 block">
                Location Node
              </span>
              <h4 className="font-serif text-xl font-light text-neutral-900">
                {partner.city}
              </h4>
            </div>

            <div className="space-y-3 text-xs text-neutral-500 font-light leading-relaxed">
              <p className="font-medium text-neutral-800">{partner.office}</p>
              <div className="space-y-0.5">
                {partner.details.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-4 space-y-2 text-xs font-light">
              <p>
                <span className="font-mono text-neutral-400 text-[10px] uppercase tracking-wider block">
                  Tel:
                </span>{" "}
                {partner.tel}
              </p>
              {"fax" in partner && (
                <p>
                  <span className="font-mono text-neutral-400 text-[10px] uppercase tracking-wider block">
                    Fax:
                  </span>{" "}
                  {partner.fax}
                </p>
              )}

              {"contactName" in partner && (
                <p>
                  <span className="font-mono text-neutral-400 text-[10px] uppercase tracking-wider block">
                    Direct Contact:
                  </span>
                  <span className="font-medium text-neutral-900">
                    {partner.contactName}
                  </span>{" "}
                  ({partner.contactPhone})
                </p>
              )}

              <p>
                <span className="font-mono text-neutral-400 text-[10px] uppercase tracking-wider block">
                  Email:
                </span>
                <a
                  href={`mailto:${partner.email}`}
                  className="text-amber-800 hover:underline"
                >
                  {partner.email}
                </a>
              </p>

              {"web" in partner && (
                <p>
                  <span className="font-mono text-neutral-400 text-[10px] uppercase tracking-wider block">
                    Web:
                  </span>
                  <a
                    href={`https://${partner.web}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:underline"
                  >
                    {partner.web}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
