"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DayItineraryTab() {
  // Data lini masa perjalanan (WakaSailing Itinerary Terbaru)
  const itineraryItems = [
    {
      time: "08:15",
      title: "Depart from Benoa Harbour",
      desc: "Set sail with the luxury WakaSailing Catamaran. Enjoy onboard hospitality with welcome drinks, pastries, soft drinks, tea, coffee, and sliced fruits while relaxing on the outdoor deck.",
    },
    {
      time: "10:45",
      title: "Arrive at Nusa Lembongan Island",
      desc: "Experience a 'wet landing' on the white sandy beach of Jungut Batu Beach. Transfer via fast boat directly to the private WakaBeachClub.",
    },
    {
      time: "11:00",
      title: "Ocean Recreation Activities",
      desc: "Time for snorkeling to explore the coral reef, swimming in clear blue ocean, sea kayaking, or practicing stand up paddle boarding.",
    },
    {
      time: "13:00",
      title: "Buffet Lunch at WakaBeachClub",
      desc: "Indulge in a beachfront BBQ buffet lunch accompanied by a glass of local wine or beer, soft drinks, mineral water, and Bali coffee.",
    },
    {
      time: "14:15",
      title: "Village Tour Excursion",
      desc: "Discover the island's unique culture and landscapes with a guided village tour using local traditional vehicles.",
    },
    {
      time: "15:15",
      title: "Depart from Nusa Lembongan Island",
      desc: "Board the catamaran for a tranquil sail back to Bali. Relax with a complimentary sunset cocktail served with cheese and crackers.",
    },
    {
      time: "17:30 - 18:00",
      title: "Arrive at Benoa Harbour",
      desc: "Safe arrival back at the marina. Disembark and meet your driver for your return transfer to the hotel.",
    },
  ];

  // Data kebijakan & detail operasional terbaru
  const policies = [
    {
      title: "Inclusions",
      content: (
        <div className="space-y-3 pt-1">
          <div>
            <span className="font-semibold text-neutral-700 block mb-1">
              Land & Sea Transfers:
            </span>
            Return transport from hotel to Waka Marina, welcome drink, and
            return fast boat transfers to WakaBeachClub.
          </div>
          <div>
            <span className="font-semibold text-neutral-700 block mb-1">
              Onboard Hospitality:
            </span>
            Welcome drink, pastries, soft drinks, tea & coffee, fresh sliced
            fruits, cold towels, sunset cocktail with cheese & crackers,
            alongside 5 dedicated crew members and 2 trolls fishing gear.
          </div>
          <div>
            <span className="font-semibold text-neutral-700 block mb-1">
              WakaBeachClub Access & Activities:
            </span>
            Main pool (12m x 5.5m), children's pool, tree house, loungers,
            daybeds, towels, snorkeling equipment, sea kayak, stand up paddle
            board, and a guided village tour via local traditional vehicles.
          </div>
          <div>
            <span className="font-semibold text-neutral-700 block mb-1">
              Insurance:
            </span>
            All passengers are fully covered by a Group Personal Accident
            insurance policy.
          </div>
        </div>
      ),
    },
    {
      title: "Pick Up Time",
      content: (
        <ul className="space-y-1 text-xs">
          <li className="flex justify-between border-b border-neutral-200/40 pb-1">
            <span className="font-medium text-neutral-700">
              Ubud & Tabanan Area
            </span>{" "}
            <span className="font-mono text-neutral-500">06:30 – 06:45 am</span>
          </li>
          <li className="flex justify-between border-b border-neutral-200/40 pb-1">
            <span className="font-medium text-neutral-700">
              Canggu & Uluwatu Area
            </span>{" "}
            <span className="font-mono text-neutral-500">07:00 – 07:15 am</span>
          </li>
          <li className="flex justify-between border-b border-neutral-200/40 pb-1">
            <span className="font-medium text-neutral-700">
              Kuta, Legian, Seminyak, Tuban, Jimbaran
            </span>{" "}
            <span className="font-mono text-neutral-500">07:30 am</span>
          </li>
          <li className="flex justify-between pt-1">
            <span className="font-medium text-neutral-700">
              Sanur, Tanjung Benoa & Nusa Dua Area
            </span>{" "}
            <span className="font-mono text-neutral-500">07:30 am</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Dress Code & Safety",
      content:
        "We recommend wearing light tropical clothes, swimwear, sun shade, and applying UV sunscreen. Please wear sandals or flip-flops as getting off the boat on Lembongan Island is a 'wet landing' on the beach. It is highly advised to wear limited and/or no jewelry.",
    },
    {
      title: "Children Policy",
      content:
        "Children below 5 years old travel completely free of charge. Children between 5 to 12 years old receive a 50% discount. Teens aged 12 years and above are subject to the full adult fare.",
    },
    {
      title: "Cancellation Policy",
      content:
        "Cancellations made 3 days prior to the trip will incur a 25% charge. Cancellations made 1 day prior will be charged 50%. Last-minute cancellations on the same day or no-shows will be charged 100% of the total amount.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white p-6 md:p-10 lg:p-12 border border-neutral-200/70 rounded-xs shadow-2xs">
      {/* SISI KIRI: DAY ITINERARY TIMELINE */}
      <div className="lg:col-span-6 space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#2c4e65] font-bold block">
            The Cruise Journey
          </span>
          <h4 className="text-3xl font-serif font-light text-neutral-900 leading-tight">
            Day Trip{" "}
            <span className="italic font-normal text-[#2c4e65]">Itinerary</span>
          </h4>

          {/* Rate & Intro Text Block */}
          <div className="pt-4 pb-2 border-b border-neutral-100 space-y-3">
            <div className="inline-block bg-neutral-900 text-white font-mono text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-2xs">
              USD 140 NET / Person
            </div>
            <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
              The luxury WakaSailing Catamaran, carrying just 35 passengers,
              offers an exhilarating outing from Bali to the neighboring Nusa
              Lembongan island. Enjoy the underwater beauty of the coral reef, a
              premium BBQ buffet lunch at the WakaBeachClub, alongside balmy
              weather and soothing sea breezes.
            </p>
          </div>
        </div>

        {/* Lini Masa Vertikal */}
        <div className="relative border-l border-neutral-200 pl-6 space-y-8 mt-4 ml-2">
          {itineraryItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              key={index}
              className="relative group"
            >
              {/* Titik Indikator Timeline */}
              <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-300 border border-white group-hover:bg-[#2c4e65] group-hover:scale-125 transition-all duration-300" />

              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-[#2c4e65] font-semibold block">
                  {item.time}
                </span>
                <h5 className="font-serif text-base text-neutral-800 font-light group-hover:text-neutral-950 transition-colors">
                  {item.title}
                </h5>
                <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SISI KANAN: POLICY & INCLUSIONS CARDS */}
      <div className="lg:col-span-6 space-y-6 text-left border-l-0 lg:border-l border-neutral-100 pl-0 lg:pl-10 pt-8 lg:pt-0">
        <div className="space-y-1 mb-2">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#2c4e65] font-bold block">
            Essential Information
          </span>
          <h4 className="text-3xl font-serif font-light text-neutral-900 leading-tight">
            Voyage{" "}
            <span className="italic font-normal text-[#2c4e65]">Details</span>
          </h4>
        </div>

        {/* List Grid Kebijakan */}
        <div className="space-y-5">
          {policies.map((policy, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              key={index}
              className="p-5 border border-neutral-100 hover:border-neutral-200 bg-neutral-50/40 hover:bg-neutral-50 rounded-2xs transition-all duration-300"
            >
              <h6 className="text-[11px] font-mono tracking-wider text-[#2c4e65] uppercase font-bold mb-2">
                {policy.title}
              </h6>
              <div className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                {policy.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
