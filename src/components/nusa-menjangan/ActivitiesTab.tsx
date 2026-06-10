"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ActivitiesTab() {
  const [activeActivity, setActiveActivity] = useState("snorkeling-diving");
  const [activeSubTab, setActiveSubTab] = useState("overview");

  // DATA MURNI 100% SESUAI TEKS YANG ANDA BERIKAN TANPA EDITING KALIMAT
  // DATA YANG SUDAH DIPERBARUI & DITAMBAHKAN SESUAI KONTEN ASLI ANDA
  const activitiesData = [
    {
      id: "snorkeling-diving",
      title: "Snorkeling & Scuba Diving",
      tagline: "SNORKELLING and DIVING by Blue Corner Dive 5* PADI",
      description:
        "Enjoy the underwater beauty of nature at Menjangan Island, coral reefs encircle the island with stunning 60 meters deep drop off. Rock formations form large and small caves that are habitat for coral reefs, soft corals, large groupers, and moray eels.",
      image: "img/nusaBay/diving2.jpg",
      rates: [
        {
          label: "Snorkeling Trip to Menjangan Island (2 Sites) - One Person",
          value: "IDR 1.300.000 / Person",
        },
        {
          label:
            "Snorkeling Trip to Menjangan Island (2 Sites) - min. 2 Persons",
          value: "IDR 750.000 / Person",
        },
        {
          label: "Snorkeling Trip to Menjangan Island (2 Sites) - extra charge",
          value: "IDR 500.000 / Private Boat",
        },
        {
          label:
            "Certified Divers: Menjangan Island Dive Trip (Two Dives) - One Person",
          value: "IDR 1.600.000 / Person",
        },
        {
          label: "Certified Divers: Shore Dive (One Dive) - One Person",
          value: "IDR 750.000 / Person",
        },
        {
          label:
            "Non - Certified Divers: Introduction Shore Dive (One Dive) - One Person",
          value: "IDR 950.000 / Person",
        },
        {
          label: "Non - Certified Divers: Night Dive (One Dive) - One Person",
          value: "IDR 850,000 / Person",
        },
        {
          label:
            "Non - Certified Divers: Introduction dive Trip Menjangan (Two Dives) - One Person",
          value: "IDR 1.950.000 / Person",
        },
        {
          label: "Non - Certified Divers: extra charge",
          value: "IDR 500.000 / private boat",
        },
      ],
      itinerary: [
        {
          time: "Intro Shore Dive",
          text: "Start 8.30am at swimming pool till guests understand the underwater breathing technique. Equipment provided by BCD ; wet suit, Balancing Control device and module for diving. Break for 45 minutes. Continue diving in front of the Resort (around one hour – one dive).",
        },
        {
          time: "Night Dive",
          text: "Start around 7pm. Equipment provided by BCD ; wet suit, Balancing Control device, flash light and other diving equipment except dive computer. One time dive in front of the Resort. Duration one hour.",
        },
        {
          time: "Intro Menjangan",
          text: "Start 8.30am at swimming pool till guests understand the underwater breathing technique. Equipment provided by BCD ; wet suit, Balancing Control device, modul and other diving equipment except dive computer. Dive two site around Menjangan Island. Break time, mineral water and cookies will be served. Duration one hour for first dive, one hours break and one hour for second dive and back to Resort.",
        },
        {
          time: "Certified Menjangan",
          text: "Start between 9am to 9.30am. Equipment provided by BCD ; wet suit, Balancing Control device and other diving equipment except dive computer. Dive two site around Menjangan Island. Break time, will be served mineral water and cookies. Duration one hour for first dive, one hours break and one hour for second dive and back to Resort.",
        },
        {
          time: "Certified Shore",
          text: "Start at 11am subject to weather conditions. Equipment provided by BCD ; wet suit, Balancing Control device and other diving equipment except dive computer. One time dive in front of the Resort Duration one hour (Maximum 4 additional persons).",
        },
      ],
      specs: [
        "Equipment provided by BCD : wet suit, Balancing Control device, module for diving",
        "Flash light provided for Night Dive",
        "Diving equipment provided EXCEPT dive computer",
        "Break time, mineral water and cookies will be served during island trips",
      ],
    },
    {
      id: "forest-cycling",
      title: "Forest Cycling",
      tagline: "Explore Optional Routes Below",
      description:
        "Pushing the bicycle pedals deep into the jungle will be a unique experience while enjoying the sight and surround of National Park, please choose the optional routes below:",
      image:
        "https://images.unsplash.com/photo-1484178244111-e40a013bb70d5?q=80&w=1200",
      rates: [
        {
          label: "Mangrove Trip (approximately two hours)",
          value: "IDR 300.000 / Person",
        },
        {
          label: "Monsoon Trip (approximately three hours)",
          value: "IDR 350.000 / Person",
        },
        {
          label: "Village Trip (four hours-available only in the morning)",
          value: "IDR 500.000 / Person",
        },
      ],
      itinerary: [
        {
          time: "Mangrove Trip",
          text: "Approximately two hours bike ride through the mangrove ecosystem tracks.",
        },
        {
          time: "Monsoon Trip",
          text: "Approximately three hours bike ride exploring the dry monsoon forest paths.",
        },
        {
          time: "Village Trip",
          text: "Four hours bike ride available only in the morning exploring local villages.",
        },
      ],
      specs: [
        "Bicycles for children for age 6 to 12 years old are available at the resort",
      ],
    },
    {
      id: "bird-watching",
      title: "Bird Watching",
      tagline: "The activity takes place outside the resort area",
      description:
        "NusaBay Menjangan can arrange a Bird Watching Activity for in-house guests. The activity takes place outside the resort area and is recommended to be taken during April to December. Two activity options are available: Half Day and Full Day.",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200",
      rates: [
        {
          label: "1. Half Day Bird Watching Activity (2 persons)",
          value: "IDR 1,500,000 net",
        },
        {
          label: "2. Full Day Bird Watching Activity (2 persons)",
          value: "IDR 3,000,000 net",
        },
        {
          label: "Additional charge (applies for the 3rd and 4th persons)",
          value: "IDR 250,000 net / person",
        },
        {
          label: "Entrance Fee: Foreign guests",
          value: "IDR 200,000 net / person",
        },
        {
          label: "Entrance Fee: Domestic guests",
          value: "IDR 20,000 net / person",
        },
      ],
      itinerary: [
        {
          time: "Half Day",
          text: "07:00 hrs: Boat departure from the resort → 07:20 hrs: Pick-up at Labuan Lalang → Route: Labuan Lalang – Teluk Terima Beach – Tegal Bunder – Sumber Rejo Forest – back to Labuan Lalang → 12:00 hrs: Return to the resort by boat. Duration: Approximately 4 hours.",
        },
        {
          time: "Full Day",
          text: "07:00 hrs: Boat departure from the resort → 07:20 hrs: Pick-up at Labuan Lalang → Route: Labuan Lalang – Teluk Terima Beach – Tegal Bunder – Sumber Rejo Forest – back to Labuan Lalang (Guests may have lunch at a local warung at their own expense) → Continued route: Teluk Terima Forest – Cekik Forest Area – back to Labuan Lalang → 15:45 hrs: Return to the resort by boat. Duration: Approximately 7 to 8 hours.",
        },
      ],
      specs: [
        "English-speaking guide",
        "Land transportation during the activity",
        "Mineral water during the activity",
        "Maximum capacity: 4 persons per trip",
      ],
    },
    {
      id: "nature-trekking",
      title: "Nature Trekking",
      tagline: "Walking through the jungle with resort ranger",
      description:
        "Walking through the jungle with resort ranger is an unforgettable experience during a holiday in the National Park. Three route options are given below:",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200",
      rates: [
        {
          label: "Mangrove Trek (approximately two hours)",
          value: "IDR 270.000 / Person",
        },
        {
          label: "Monsoon Trek (approximately three hours)",
          value: "IDR 350.000 / Person",
        },
        {
          label: "Village Trek (four hours-available only in the morning)",
          value: "IDR 500.000 / Person",
        },
      ],
      itinerary: [
        {
          time: "Mangrove Trek",
          text: "Approximately two hours trek exploring coastal mangrove paths with ranger guide.",
        },
        {
          time: "Monsoon Trek",
          text: "Approximately three hours trek exploring the seasonal dry monsoon forest flora & fauna.",
        },
        {
          time: "Village Trek",
          text: "Four hours trek available only in the morning exploring border villages and communities.",
        },
      ],
      specs: [
        "Resort ranger guide tracking assistant",
        "National Park protection security",
      ],
    },
    {
      id: "sunrise-boat",
      title: "Sunrise Boat Ride",
      tagline: "Most recommended departure time from resort’s pier is 6am",
      description:
        "Enjoying the sunrise across Kotal Bay and watching beginning of a day from a boat near Menjangan Island is a different and exciting experience. The outstandingly beautiful Prapat Agung peninsula behind the resort presents a magnificent view bathed in the morning. *The boat ride program / activity only allow the passenger / guest to see those view from the boat.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      rates: [
        { label: "Group Rate (2 Persons)", value: "IDR 450.000 / Person" },
        { label: "Group Rate (4 Persons)", value: "IDR 250.000 / Person" },
        { label: "Group Rate (6 Persons)", value: "IDR 175.000 / Person" },
      ],
      itinerary: [
        {
          time: "Route 1",
          text: "Menjangan Island Temples, bat cave, Ganeca statue, white sand beach at Ranger House.",
        },
        {
          time: "Route 2",
          text: "Mangrove White sand beach at camp site, Mangrove, Terima Bay and Pearl farming.",
        },
      ],
      specs: [
        "Traditional outrigger / shuttle boat transport",
        "Strictly observation from the boat only (no landing / shore access allowed)",
      ],
    },
    {
      id: "twin-adventure",
      title: "Twin Adventure",
      tagline: "Classic Land Rover & Jungle Trek Combo",
      description:
        "Twin Adventure in West Bali National Park is a combination between walking deep into the jungle and a jeep ride by a classic Land Rover. Advance booking (at least one day before) is required.",
      image:
        "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1200",
      rates: [
        {
          label: "Base Package for one or two persons",
          value: "IDR 1.500.000,-",
        },
        {
          label: "Additional persons charge (Maximum 4 additional persons)",
          value: "IDR 500.000,- / Person",
        },
      ],
      itinerary: [
        {
          time: "07:00 AM",
          text: "Commencing at 7am our resort ranger ready with breakfast box, will accompany you on the trek to Brumbun National Park breeding center for endangered Bali Starling birds. It will take around one hour’s fun walk with viewing of some animals and singing birds.",
        },
        {
          time: "08:00 AM",
          text: "The Bali Starling breeding center at Brumbun is the biggest breeding facilities in West Bali National. Here you’ll see a very large dome shaped cage, about one hundred square meters wide with more than twenty Bali Starling couples inside the breeding cage. In the small bale (gazebo), you’ll take a short break and the resort ranger will serve you a breakfast box in outdoor picnic style.",
        },
        {
          time: "09:30 AM",
          text: "After the rest and breakfast break, you’ll continue walking to the ‘Teluk Kelor’ post, which is about five kilometers away from Brumbun breeding center. Mostly the track is a ‘desert jungle’ where very few animals are found during dry season and you will feel just like in the middle of nowhere.",
        },
        {
          time: "11:00 AM",
          text: "Another five kilometers trek from Teluk Kelor will bring you to Segara Rupek temple. This stretch of trek is visually the most beautiful trek on this activity. The trek will be mostly along the shore where you can see the Mountains of Java Island and on a sunny day you can also spot Tabuhan Island, a small island between Menjangan Island and Java Island.",
        },
        {
          time: "12:00 PM",
          text: "At Segara Rupek Temple, the Resort’s driver will greet you with a smile and cool bottled water and drive you back to Labuhan Lalang harbor to join the 12.15pm boat to Resort.",
        },
      ],
      specs: [
        "Resort ranger guide escort",
        "Breakfast box in outdoor picnic style provided",
        "Classic Land Rover transportation",
        "Cool bottled water provided by driver",
      ],
    },
    {
      id: "dolphin-tour",
      title: "Sunrise Dolphin Tour",
      tagline: "Chasing Wild Pods at Lovina Beach",
      description:
        "Lovina beach, around one hour drive from Labuhan Lalang harbor is one of the famous tourist places in north part of Bali, with a calm sea, blackish chromatic sand and friendly dolphin is one of the favorite attractions in Lovina is the sunrise dolphin watching tour. Hundreds of dolphins can be seen in the morning time around 1 km offshore and watching dolphins jumping out of the ocean is truly breath taking.",
      image:
        "https://images.unsplash.com/photo-1570473541596-2341808b7762?q=80&w=1200",
      rates: [
        {
          label: "Base Package (one or two persons)",
          value: "IDR 1.200,000,-",
        },
        {
          label: "Additional person / person (*maximum 2 additional persons)",
          value: "IDR 200,000,-",
        },
      ],
      itinerary: [
        { time: "04.40 AM", text: "From Resort to Labuhan Lalang" },
        {
          time: "05.00 AM",
          text: "From Labuhan Lalang the guests will be driven by a car to Lovina",
        },
        {
          time: "06.00 AM",
          text: "Arrive at Lovina beach and directly take a boat",
        },
        {
          time: "08.00 AM",
          text: "Finish the Sunrise Dolphin tour and drive back to Labuhan Lalang harbor",
        },
        { time: "09.00 AM", text: "Arrive at Labuhan Lalang harbor" },
        { time: "09.15 AM", text: "Take the boat back to Resort." },
      ],
      specs: [
        "Car transport component from Labuhan Lalang to Lovina",
        "Outrigger sea boat hire at Lovina beach included",
        "Strict dawn scheduling departure",
      ],
    },
    {
      id: "half-day-trips",
      title: "Heritage Half Day Trips",
      tagline: "4 Curated Curiosities & Outposts",
      description:
        "Explore regional North & West Bali cultural landmarks, environmental hatcheries, and sacred temple complexes located just outside the resort borders.",
      image:
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200",
      rates: [
        {
          label: "Option 1: Shine of Nature",
          value: "Atlas Pearl North Bali Farm & Turtle Hatchery",
        },
        {
          label: "Option 2: Holy Nature",
          value: "Jaya Prana & Segara Rupek Temples",
        },
        {
          label: "Option 3: The Hidden West",
          value: "Palasari Village & Kurma Asih Turtle Conservation",
        },
        {
          label: "Option 4: The Nature High",
          value: "Batu Kursi Ridge & Melanting Temple",
        },
      ],
      itinerary: [
        {
          time: "Shine of Nature",
          text: "07.00AM Start from resort to Labuhan Lalang → 07.20AM Heading to Atlas Pearl North Bali Farm → 08.50AM Arrive at Atlas Pearl North Bali Farm → 10.45AM Heading to Turtle Hatchery → 11.15AM Arrive at Turtle Hatchery → 11.45AM Heading to Labuhan Lalang → 12.15PM Boat ride, back to resort.",
        },
        {
          time: "Holy Nature",
          text: "07.00AM Start from resort to Labuhan Lalang → 07.25AM Heading to Jaya Prana temple → 07.45AM Arrive at Jaya Prana temple’s parking area and start hiking to the temple → 09.20AM Finish the Jaya Prana temple tour and heading to Segara Rupek temple → 10.20AM Arrive at Segara Rupek temple → 11.15AM Heading to Labuhan Lalang → 12.15PM Boat ride, back to resort.",
        },
        {
          time: "The Hidden West",
          text: "07.00AM Start from resort to Labuhan Lalang → 07.20AM Heading to Palasari Village → 08.00AM Arrive at Palasari Village → 09.15AM Finish the Palasari village tour and heading to Kurma Asih turtle conservation → 10.00AM Arrive at Kurma Asih turtle conservation → 10.45AM Heading to Labuhan Lalang → 12.15PM Boat ride, back to resort.",
        },
        {
          time: "The Nature High",
          text: "07.00AM Start from resort to Labuhan Lalang → 07.20AM Heading to Batu Kursi Ridge → 07.50AM Arrive at Batu Kursi Ridge parking area and start hiking → 10.30AM Finish the Batu Kursi Ridge tour and heading to Melanting temple → 10.45AM Arrive at Melanting temple → 11.40AM Heading to Labuhan Lalang → 12.15PM Boat ride, back to resort.",
        },
      ],
      specs: [
        "Private resort driver and guide escort",
        "All land & sea operational transfers included",
        "Fixed 07:00 AM departures daily from resort",
      ],
    },
  ];

  const currentActiveData =
    activitiesData.find((a) => a.id === activeActivity) || activitiesData[0];

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-6">
      {/* HEADER META */}
      <div className="space-y-1 border-b border-neutral-200 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#3e80a2] uppercase block">
          Guest Experiences
        </span>
        <h2 className="font-serif text-3xl text-neutral-900 font-light tracking-wide">
          Resort Expeditions & Activities
        </h2>
      </div>

      {/* DUAL COLUMN INTERACTIVE PLATFORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COMPONENT: STYLED NAVIGATION TRACK */}
        <div className="lg:col-span-5 space-y-3 max-h-[72vh] overflow-y-auto pr-2 no-scrollbar">
          {activitiesData.map((act) => (
            <div
              key={act.id}
              onMouseEnter={() => {
                setActiveActivity(act.id);
                setActiveSubTab("overview");
              }}
              onClick={() => {
                setActiveActivity(act.id);
                setActiveSubTab("overview");
              }}
              className={`group cursor-pointer border-l-2 pl-4 py-3 transition-all duration-300 ${
                activeActivity === act.id
                  ? "border-[#3e80a2] bg-neutral-50/90 shadow-2xs"
                  : "border-neutral-100 hover:border-neutral-300"
              }`}
            >
              <span className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase block mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                {act.title}
              </span>
              <h4
                className={`font-serif text-sm tracking-wide transition-colors ${
                  activeActivity === act.id
                    ? "text-[#3e80a2] font-normal"
                    : "text-neutral-700 group-hover:text-neutral-900"
                }`}
              >
                {act.title}
              </h4>
            </div>
          ))}
        </div>

        {/* RIGHT COMPONENT: DYNAMIC DISPLAY CONTROLLER */}
        <div className="lg:col-span-7 space-y-6 lg:sticky lg:top-36">
          {/* IMAGE PORTRAIT BOX */}
          <div className="relative aspect-[16/9] w-full bg-neutral-900 overflow-hidden rounded-2xs shadow-md">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentActiveData.id}
                src={currentActiveData.image}
                alt={currentActiveData.title}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover opacity-90"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-xs px-3 py-1 rounded-3xs border border-white/10 max-w-[90%]">
              <span className="text-[9px] font-mono text-neutral-200 tracking-wider uppercase block truncate">
                {currentActiveData.tagline}
              </span>
            </div>
          </div>

          {/* INTERNAL CONTENT MULTI-TAB CONTROLLER */}
          <div className="space-y-4">
            <div className="flex border-b border-neutral-200 gap-6 text-[11px] font-mono uppercase tracking-wider">
              {["overview", "itinerary", "inclusions"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSubTab(tab)}
                  className={`pb-2 transition-all relative cursor-pointer ${
                    activeSubTab === tab
                      ? "text-[#3e80a2] font-semibold"
                      : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  {tab === "overview" && "Rates & Overview"}
                  {tab === "itinerary" && "Itinerary / Routes"}
                  {tab === "inclusions" && "Equipment & Specs"}
                  {activeSubTab === tab && (
                    <motion.div
                      layoutId="subTabLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3e80a2]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* TAB CONTENT PANELS */}
            <div className="min-h-[220px] bg-neutral-50/60 p-5 border border-neutral-200/50 rounded-2xs">
              <AnimatePresence mode="wait">
                {activeSubTab === "overview" && (
                  <motion.div
                    key="overview-panel"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <p className="text-xs text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                      {currentActiveData.description}
                    </p>
                    <div className="pt-2 grid grid-cols-1 gap-2">
                      {currentActiveData.rates.map((rate, rIdx) => (
                        <div
                          key={rIdx}
                          className="bg-white p-3 border border-neutral-200/40 rounded-3xs flex justify-between items-center font-mono text-[10px] gap-4"
                        >
                          <span className="text-neutral-500 font-sans">
                            {rate.label}
                          </span>
                          <span className="text-neutral-900 font-semibold text-right shrink-0">
                            {rate.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeSubTab === "itinerary" && (
                  <motion.div
                    key="itinerary-panel"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    {currentActiveData.itinerary.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex gap-4 items-start text-xs border-b border-neutral-200/30 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="font-mono text-[10px] bg-[#3e80a2]/10 text-[#3e80a2] px-2.5 py-1 rounded-3xs font-medium shrink-0 whitespace-nowrap">
                          {step.time}
                        </span>
                        <p className="text-neutral-600 font-light leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeSubTab === "inclusions" && (
                  <motion.div
                    key="inclusions-panel"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 gap-2 text-xs font-light text-neutral-600"
                  >
                    {currentActiveData.specs.map((spec, iIdx) => (
                      <div
                        key={iIdx}
                        className="flex items-start gap-2.5 bg-white p-3 border border-neutral-100 rounded-3xs"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3e80a2] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{spec}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
