"use client";

import React from "react";

export default function TeamTab() {
  const team = [
    {
      role: "Architect",
      name: "I Ketut Siandana",
      firm: "Founder of Sian’D’Sain",
      desc: "A highly respected Balinese Architect and director of Bali’s highly original chains of Eco Resorts known for environmental awareness. The concept of WakaGangga’s Redevelopment including Waka Residences is based on visual aesthetics of Balinese architecture simplified to enhance the site's natural beauty.",
      quote:
        "“Siandana understands the need for Bali to retain its special magic and yet at the same time to move forward. His work succeeds in introducing traditional Balinese aesthetics to modern style.” — HIP Hotels",
    },
    {
      role: "Interior Design",
      name: "Carlo Pessina",
      firm: "Owner of CARLO Furnishings",
      desc: "An Italian designer based in Bali for longer than 30 years. CARLO typifies an innovative fusion of natural materials, incisive design and uncompromising quality. Today, CARLO's furniture and high-end credentials are found throughout the world in Aman Resorts, Grand Hyatts, Four Seasons, and prestigious superyachts.",
      quote: null,
    },
    {
      role: "Landscape Architect",
      name: "John Pettigrew",
      firm: "Founder of Design In Nature",
      desc: "Originating from Ireland with three decades of Asian expertise creating award-winning memorable landscapes. His impressive premium portfolio covers Four Seasons Resort Jimbaran Bay, Como Shambala Estate at Begawan Giri, Hotel The Oberoi Bali & Lombok, Bvlgari Resort Bali, and the iconic Green School Bali.",
      quote: null,
    },
    {
      role: "The Developer",
      name: "PT Mahesa Pahala Jani",
      firm: "Subsidiary of The Waka Group",
      desc: "Involved in the planning, architectural framework, construction, and structural management of numerous tier-one resort assets for over two decades. Successfully completed premium operations include Hotel The Oberoi Bali, Hotel The Oberoi Lombok, WakaGangga Resort, and Waka Sailing infrastructure.",
      quote:
        "Legal Services for the Waka Gangga Residences are provided comprehensively by the Limcharoen law firm office in Bali (www.limcharoen.com).",
    },
    {
      role: "Estate Management",
      name: "Jones Lang LaSalle (JLL)",
      firm: "Global Asset Professional Firm",
      desc: "A world leader in commercial property and premium asset management operating across 750 cities worldwide. JLL functions as the largest international real estate services institution in Indonesia with strict compliance to high hospitality yields.",
      quote: null,
    },
  ];

  return (
    <div className="space-y-20 text-left">
      <div className="max-w-2xl border-b border-neutral-200/60 pb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-700 font-mono font-bold block mb-2">
          The Specialists
        </span>
        <h2 className="text-3xl font-serif font-light text-neutral-900">
          The Master Development Team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white p-6 border border-neutral-200/50 rounded-xs shadow-3xs flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-[#2c4039] bg-[#1e352f]/5 px-2.5 py-1 rounded-full inline-block">
                {member.role}
              </span>
              <div className="space-y-0.5">
                <h4 className="font-serif text-xl font-light text-neutral-900">
                  {member.name}
                </h4>
                <p className="text-[11px] font-mono text-neutral-400">
                  {member.firm}
                </p>
              </div>
              <p className="text-xs text-neutral-500 font-light leading-relaxed pt-2 border-t border-neutral-100">
                {member.desc}
              </p>
            </div>
            {member.quote && (
              <p className="text-[11px] text-amber-800 font-light bg-amber-50/40 p-3 rounded-2xs border border-amber-100/30 leading-normal italic">
                {member.quote}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
