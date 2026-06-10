"use client";

import React, { useState } from "react";

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-neutral-200/70 py-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 focus:outline-none group cursor-pointer"
      >
        <span className="font-serif text-sm tracking-wide text-neutral-800 group-hover:text-[#556b2f] transition-colors duration-300">
          {title}
        </span>
        <span
          className={`text-xs transform transition-transform duration-500 text-neutral-400 ${isOpen ? "rotate-180 text-[#556b2f]" : ""}`}
        >
          {isOpen ? "✕" : "＋"}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="pt-4 pb-2 opacity-90">{children}</div>
      </div>
    </div>
  );
}

interface WeddingsTabProps {
  setLightboxImage: (img: string) => void;
}

export default function WeddingsTab({ setLightboxImage }: WeddingsTabProps) {
  const weddingData = {
    intro:
      "Turn your dream Bali wedding into a timeless celebration at WakaGangga. Whether you envision an intimate ceremony, a grand wedding, or a romantic honeymoon escape, our dedicated team will create a personalized experience that reflects your unique story. From planning and décor to legal arrangements, catering, entertainment, photography, and private villa accommodation, every detail is carefully arranged to ensure a seamless and unforgettable occasion. At WakaGangga, we are committed to bringing your vision to life and creating memories that will last forever.",

    // Core Package
    mainPackage: {
      price: "IDR 132.000.000 nett",
      validity: "Package valid for a period of wedding December 2026",
      note: "Rate inclusive of 21% tax & service charge. Outside catering vendors for specialized dietary requirement will be subject to a corkage fee.",
      inclusions: [
        "Beachfront Amphitheater Venue with curfew until 23:00 hour",
        "Decorations: Ceremony arch, Matching bride bouquet & groom buttonhole",
        "Decorations: Flower petal aisle using local flowers & petals for flower shower",
        "Decorations: Welcome board & Altar table with matching flower arrangement",
        "Decorations: Centerpiece for the reception tables with matching flower arrangement",
        "Standard tables and banquet chairs with cover for up to 50 persons",
        "Wedding reception buffet for up to 50 persons",
        "One (1) hour free flow of 2 options of chilled juice and soft drinks",
        "Two (2) nights stay in a Villa with Pool Garden View for Bride & Groom",
        "One (1) Romantic Candle Lit Dinner for Bride & Groom in the villa",
        "One (1) time 60 minutes spa treatment for Bride & Groom at Waka Spa",
        "Event permit from the local community",
        "Two tiers wedding cake & Waka Gift wedding",
        "English-speaking wedding celebrant",
        "Standard sound system (2 standing speakers + 2 microphones)",
      ],
      customOptions:
        "Other options i.e. Tiffany chairs, Cross back chairs, entertainment, photo/videography, additional fairy lights, bulbs, lanterns, and other additional services can be organized/customized according to your needs with some additional charges.",
    },

    // NEW DATA: Wedding Option Services
    optionServices: {
      title: "Wedding Option Services",
      tagline: "Tailor-made details to elevate your day",
      categories: [
        {
          name: "Venue & Administration",
          items: [
            { label: "Beachfront Amphitheatre Rental Fee", price: "USD 700++" },
            {
              label: "Legal Wedding Document Certification",
              price: "USD 500++",
              desc: "Excludes consulate fee",
            },
            {
              label: "Additional Guest Setup",
              price: "USD 10++/chair",
              desc: "Includes chair, welcome drink, and cold towel",
            },
          ],
        },
        {
          name: "Media & Documentation",
          items: [
            {
              label: "2-Hour Photography",
              price: "USD 650++",
              desc: "30 pages wedding book (25x25cm), 60+ album pictures, CD-ROM with 70+ images. Excludes shipment fee.",
            },
            {
              label: "2-Hour Videography",
              price: "USD 850++",
              desc: "30 minutes edited video, 2x DVD-ROM. Excludes shipment fee.",
            },
          ],
        },
        {
          name: "Entertainment & Hosting",
          items: [
            {
              label: "English-Speaking Master of Ceremony (MC)",
              price: "USD 500++",
            },
            {
              label: "Balinese Traditional Dance",
              price: "USD 120++",
              desc: "Featuring 3 classic dances",
            },
            {
              label: "Balinese Rindik Music",
              price: "USD 100++",
              desc: "60 minutes performance",
            },
            { label: "Kecak Dance Performance", price: "start from USD 300++" },
            { label: "Live Violin Performance", price: "start from USD 220++" },
            {
              label: "Fire Dance Show",
              price: "USD 650++",
              desc: "Performed by 5 professional dancers",
            },
          ],
        },
        {
          name: "Decor & Celebration Touches",
          items: [
            { label: "Hanging Lanterns (50 pieces)", price: "USD 450++" },
            {
              label: "Hanging Lanterns with Bamboo Poles",
              price: "USD 500++",
              desc: "Minimum 30 pieces",
            },
            { label: "Balloon Release (50 pieces)", price: "USD 150++" },
            {
              label: "Dove Release",
              price: "USD 50++",
              desc: "For the newlywed couple",
            },
          ],
        },
      ],
    },

    // BBQ Menus
    bbqMenus: [
      {
        option: "OPTION A",
        title: "Beach Barbeque Indonesian Menu",
        note: "*Minimum 20 persons",
        sections: [
          {
            name: "Salads",
            items: [
              "Lawar Daun Ubi (native salad of cassava leaf with long bean, ground beef)",
              "Lalapan Sayur (dice of tomatoes and cucumber, tomato sambal ulek)",
              "Ayam Dabu-Dabu (shredded chicken with shallot, tomato and soy dressing)",
              "Urap Sayur (mixed vegetable and toasted coconut salad)",
              "Gepang Tongseng (green turnip in coconut oil dressing)",
              "Gado-Gado (Poached vegetables served with warm peanut sauce)",
              "Daun Selada (mixed fresh green lettuce)",
            ],
          },
          {
            name: "Soup & Bread",
            items: [
              "Soup Bendega (traditional seafood soup)",
              "Assorted Bread: French Baguette, 2 kinds of Rolls",
            ],
          },
          {
            name: "From The Grill",
            items: [
              "Pepes Ikan (market fish fillet wrapped in banana leaf)",
              "Udang Bakar (grilled king prawns with Balinese seafood paste)",
              "Ikan Bakar Sambal Matah (marinated tuna and mahi-mahi fish steak)",
              "Ayam Panggang Mebasa Bali (grilled marinated chicken breast)",
              "Sate Ayam (chicken skewer, peanut sauce)",
              "Lulur Panggang (4oz lean mini steaks of beef tenderloin in regional spices)",
            ],
          },
          {
            name: "Dips & Condiments",
            items: [
              "Sambal Matah, Teriyaki Sauce, Sambal Ulek, Sambal Dabu-Dabu, Chili Soy, Peanut Sauce",
            ],
          },
          {
            name: "From The Clay Pot",
            items: [
              "Nasi Putih & Nasi Merah (steamed white and red rice)",
              "Bakmi Goreng (wok fried egg noodle, vegetables)",
              "Tahu Asam-Manis (sweet and sour tofu)",
              "Kare Sayur (mixed vegetables curry, root paste, coconut milk)",
              "Ayam Lada Hitam (stir fried chicken breast with black pepper sauce)",
            ],
          },
          {
            name: "Desserts & Sauce",
            items: [
              "Assorted Tropical Fruits",
              "Nagasari (rice cake banana)",
              "Dadar Gulung (traditional pandan crepes, coconut, palm sugar)",
              "Kolek Pisang (stewed banana in palm sugar) & Bubur Injin (black rice pudding)",
              "Sauces: Vanilla sauce, orange sauce, dragon fruit sauce, palm syrup",
            ],
          },
        ],
      },
      {
        option: "OPTION B",
        title: "Beach Barbeque Continental Menu",
        note: "*Minimum 20 persons",
        sections: [
          {
            name: "Salads & Dressings",
            items: [
              "Assorted Mixed Lettuces (honey mustard vinaigrette)",
              "Carrot and Apple Salad (sesame oil and toast sesame seeds)",
              "Pasta Salad (penne or fusilli with roasted capsicum)",
              "Beetroot salad (poached beetroot, basil leaves, olive oil)",
              "Potato & Tuna Salad (baby potato, grilled tuna flakes, capers)",
              "Antipasto (grilled capsicum, zucchini, onion, smoked ham, basil pesto, feta)",
              "Dressings: Mustard vinaigrette, Cocktail sauce, Italian dressing, Balsamic vinegar",
            ],
          },
          {
            name: "Soup & Bread",
            items: [
              "Fishermen Soup (mixed vegetable and seafood minestrone)",
              "Assorted Bread: French Baguette, bread rolls, multigrain bread",
            ],
          },
          {
            name: "From The Grill Station",
            items: [
              "Prawn Skewers (marinated with herb and red chili)",
              "Calamari (marinated with herb, lemon juice and red chili)",
              "Market Fishes (grilled seabass, Tuna and Mahi-mahi fish fillet)",
              "Beef Tenderloin (marinated in cumin, hot English mustard)",
              "Chicken Medallions (marinated in Japanese teriyaki sauce)",
              "Pork Ribs with BBQ sauce",
            ],
          },
          {
            name: "From The Hot Buffet",
            items: [
              "Baked Potato Wedges (Cajun spice)",
              "Corn on The Cob (chunks of sweet corn in melted butter)",
              "Vegetables Stroganoff (braised carrot, long bean, broccoli with cheese sauce)",
              "Couscous (olive oil, green and red capsicum)",
              "Nasi Putih (white steamed rice)",
            ],
          },
          {
            name: "Desserts & Sauce",
            items: [
              "Assorted Tropical Fruits",
              "Chocolate Brownies (jackfruit)",
              "Apple Tart with brown sugar",
              "Fresh Fruit Tartelette (vanilla syrup) & Pineapple Pie (cinnamon, raisin)",
              "Sauces: Vanilla sauce, orange sauce, dragon fruit sauce, palm syrup",
            ],
          },
        ],
      },
    ],
    canapes: {
      title: "Canape Selections",
      price: "IDR 300,000 / net / dozen",
      categories: [
        {
          name: "Cold Bites",
          items: [
            "Tartlet of Watermelon, feta with toasted walnuts",
            "Vietnamese Fresh Vegetable Rolls, nam prik sauce",
            "Tuna flakes on Toasted Brioche",
            "Mini Italian open face with buffalo mozzarella, basil pesto",
          ],
        },
        {
          name: "Warm Bites",
          items: [
            "Sate Lilit, minced fish skewers",
            "Mushroom Quiche with Bacon Beat",
            "Mini Pizza, mushroom and mozzarella cheese",
            "Mini Vegetable Spring Rolls, sweet soya sauce",
            "Samosa, mint chutney",
          ],
        },
        {
          name: "Sweet Temptation",
          items: [
            "Tropical Fruit Tartlets",
            "Apple Tarts, orange coulis",
            "Pumpkin Cakes, palm syrup",
            "Carrot Cake, dragon fruit sauce",
          ],
        },
      ],
    },

    // Beverages & Policy
    beverages: [
      {
        name: "Two Hours Free Flow Non-Alcoholic",
        price: "IDR 195.000 nett / person",
        extra: "IDR 80.000 nett / extra hour",
        items: ["Iced tea / Iced Lemon tea", "Juices", "Soft drinks"],
      },
      {
        name: "Two Hours Free Flow Non-Alcoholic I",
        price: "IDR 217.000 nett / person",
        extra: "IDR 100.000 nett / extra hour",
        items: [
          "Iced tea / Iced Lemon tea",
          "Juices",
          "Soft drinks",
          "Mocktails",
        ],
      },
      {
        name: "Two Hours Basic Bar",
        price: "IDR 319.000 nett / person",
        extra: "IDR 160.000 nett / extra hour",
        items: [
          "Iced tea / Iced Lemon tea",
          "Juices",
          "Soft drinks",
          "Mocktails",
          "Bintang Beer",
        ],
      },
      {
        name: "Two Hours Basic Bar I",
        price: "IDR 391.500 nett / person",
        extra: "IDR 200.000 nett / extra hour",
        items: [
          "Iced tea / Iced Lemon tea",
          "Juices",
          "Soft drinks",
          "Mocktails",
          "House wine",
        ],
      },
      {
        name: "Two Hours Basic Bar II",
        price: "IDR 478.500 nett / person",
        extra: "IDR 240.000 nett / extra hour",
        items: [
          "Iced tea / Iced Lemon tea",
          "Juices",
          "Soft drinks",
          "Mocktails",
          "Bintang Beer",
          "House wine",
        ],
      },
      {
        name: "Two Hours Standard Bar",
        price: "IDR 507.000 nett / person",
        extra: "IDR 250.000 nett / extra hour",
        items: [
          "Iced tea / Iced Lemon tea",
          "Juices",
          "Soft drinks",
          "Mocktails",
          "Bintang Beer",
          "House wine",
          "4 selections of cocktails",
        ],
      },
    ],
    corkage: [
      { type: "Champagne", fee: "USD 20 net / bottle" },
      { type: "Wine", fee: "USD 15 net / bottle" },
      {
        type: "Spirit (750 ml - 1000 ml)",
        fee: "USD 25 net / bottle (includes mixer: soft drink, tonic, soda, ice)",
      },
    ],

    // Terms & Conditions
    policy: {
      deposit:
        "To guarantee the wedding venue reservation, 30% deposit from total invoice is required. Second payment of 35% from the total invoice is required 2 months prior to the wedding and the balance payment 35% from the total invoice is required 1 month prior to the wedding date.",
      capacity:
        "Maximum capacity of wedding venue is 120 pax, music curfew time 22:30 (10:30 pm).",
      bank: {
        name: "Bank CIMB Niaga Cab Denpasar",
        address: "Jl. Thamrin – Denpasar, Bali",
        idr: "800078155800",
        usd: "800078682240",
        beneficiary: "PT Manik Ning Gangga",
        swift: "BNIAIDJA",
      },
      cc: "Credit card payment to be made through DOKU link provided by WakaGangga (please allow 3 days for payment to reach our bank account).",
    },

    cakes: [
      {
        name: "Small wedding cake (18 cm) ",
        description: "US$ 25.00++",
        image:
          "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=600",
      },
      {
        name: "Medium wedding cake (24 cm) ",
        description: "US$ 35.00++",
        image:
          "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600",
      },
      {
        name: "Large wedding cake (30 cm) ",
        description: "US$ 50.00++",
        image:
          "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600",
      },
    ],
    menus: [
      {
        title: "The Royal Balinese Set",
        type: "Traditional Elegance",
        items: [
          "Sate Lilit Tempeh & Prawn Amuse-Bouche",
          "Be Pasih Mesanten",
          "Ayam Betutu Premium",
          "Bubur Injin",
        ],
      },
      {
        title: "The Gourmet Coastal Shore",
        type: "Modern International",
        items: [
          "Pan-Seared Scallops",
          "Roasted Wild Mushroom Truffle Velouté",
          "Charcoal-Grilled Australian Wagyu",
          "Matcha Tart",
        ],
      },
    ],
    prewedding: {
      title: "The Eternal Pledge Pre-Wedding Master Package",
      tagline: "Impeccable Journey Before The Big Day",
      description:
        "A meticulously curated experience designed for couples to capture their intimate moments...",
      image: "/img/wakaGangga/wedding2.jpg",
      includes: [
        "Full 8-Hour Access to Resort Grounds",
        "Complimentary Air-Conditioned Preparation Day-Villa Hub",
        "Sunset Romantic 4-Course Candlelit Dinner",
        "90-Minutes Signature Balinese Couple Massage",
        "Bespoke High-Tea Refreshment Platter",
      ],
    },

    // NEW DATA: Moments Before Forever Pre-Wedding
    preweddingPackageB: {
      title: "Moments Before Forever",
      tagline: "Exclusive Resort Photoshoot Session",
      price: "IDR 6.000.000 net",
      description:
        "Create timeless memories with our exclusive pre-wedding photoshoot package, offering the serene beauty of our resort as your natural backdrop stage.",
      image: "/img/wakaGangga/wedding3.jpg", // Fallback matching context
      includes: [
        "Cold towel and welcome drinks upon arrival",
        "6 hours day use of an exclusive Garden View Villa with Private Pool",
        "Full photoshoot access to the Private Villa and resort's public spaces",
        "Elegant High Tea set served at Waka Bar & Restaurant",
        "Complimentary free flow cold mineral water and towels during the session",
      ],
      notes: [
        "Advance reservation is required",
        "50% Non-refundable deposit is required to guarantee reservation",
        "Optional services i.e. Photographer, Videographer, Makeup & Hair-do are available with additional charge",
        "Rates are subject to change without prior notice",
      ],
    },
  };

  return (
    <div className="space-y-24 max-w-6xl mx-auto animate-[fadeIn_0.6s_ease-out_forwards]">
      {/* HEADER INTRO */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] tracking-[0.3em] text-[#556b2f] font-mono font-bold uppercase block">
          Planning a wedding in Bali? Celebrate the wedding and reception of
          your dreams at WakaGangga.
        </span>
        <h3 className="font-serif text-3xl font-light tracking-wide text-neutral-900">
          WEDDINGS AT WAKAGANGGA
        </h3>
        <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
          {weddingData.intro}
        </p>
      </div>

      {/* SECTION: MAIN PACKAGE */}
      <div className="border border-neutral-200/70 bg-neutral-50/40 p-6 md:p-8 rounded-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-4 gap-4">
          <div className="space-y-1">
            <span className="text-[9px] font-mono font-semibold tracking-[0.25em] text-[#556b2f] uppercase block">
              Exclusive Offer
            </span>
            <h4 className="font-serif text-2xl lg:text-3xl text-neutral-900 font-light tracking-wide">
              WakaGangga Wedding Package
            </h4>
          </div>
          <div className="text-left md:text-right">
            <p className="font-serif text-2xl text-[#556b2f] font-normal">
              {weddingData.mainPackage.price}
            </p>
            <p className="text-[10px] text-neutral-400 font-mono mt-0.5">
              {weddingData.mainPackage.validity}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2.5 text-xs text-neutral-600 font-light pt-2">
          {weddingData.mainPackage.inclusions.map((inc, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 py-1.5 border-b border-neutral-100/70 last:border-0"
            >
              <span className="text-[#556b2f] font-medium shrink-0">✓</span>
              <span>{inc}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-neutral-200/60 space-y-3">
          <p className="text-[11px] text-neutral-400 italic font-serif leading-relaxed">
            {weddingData.mainPackage.customOptions}
          </p>
          <p className="text-[10px] text-neutral-400 font-mono leading-tight">
            {weddingData.mainPackage.note}
          </p>
        </div>
      </div>

      {/* NEW SECTION: WEDDING OPTION SERVICES (USD) */}
      <div className="space-y-8">
        <div className="border-b border-neutral-200 pb-2">
          <h4 className="font-serif text-xl font-light text-neutral-800">
            {weddingData.optionServices.title}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weddingData.optionServices.categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200/60 p-5 rounded-xs space-y-2"
            >
              <span className="text-[9px] font-mono font-bold tracking-wider text-[#556b2f] uppercase block mb-1">
                {category.name}
              </span>
              <div className="divide-y divide-neutral-100">
                {category.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="py-2.5 flex justify-between items-start gap-4 text-xs"
                  >
                    <div className="space-y-0.5">
                      <span className="text-neutral-800 font-medium block">
                        {item.label}
                      </span>
                      {item.desc && (
                        <p className="text-[11px] text-neutral-400 font-light leading-tight">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <span className="font-mono text-[#556b2f] font-semibold shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: RECEPTION MENUS */}
      <div className="space-y-8 pt-4">
        <div className="border-b border-neutral-200 pb-2">
          <h4 className="font-serif text-xl font-light text-neutral-800">
            Beach Barbeque Reception Menus
          </h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {weddingData.bbqMenus.map((menu, index) => (
            <div
              key={index}
              className="border border-neutral-200/60 bg-white p-6 rounded-xs space-y-4 shadow-2xs"
            >
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-bold tracking-wider text-[#556b2f]">
                  {menu.option}
                </span>
                <h5 className="font-serif text-lg text-neutral-900">
                  {menu.title}
                </h5>
                <span className="text-[10px] text-neutral-400 font-mono block">
                  {menu.note}
                </span>
              </div>
              <div className="space-y-1 pt-2">
                {menu.sections.map((sect, sIdx) => (
                  <Accordion key={sIdx} title={sect.name}>
                    <ul className="space-y-1.5 text-xs text-neutral-600 font-light pl-1">
                      {sect.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="flex items-start gap-2 py-0.5 border-b border-neutral-50 last:border-0"
                        >
                          <span className="w-1 h-1 rounded-full bg-neutral-300 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: CANAPES & BEVERAGES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        <div className="lg:col-span-5 border border-neutral-200/60 bg-white p-6 rounded-xs space-y-4">
          <div className="border-b border-neutral-100 pb-3">
            <span className="text-[9px] font-mono font-bold tracking-wider text-[#556b2f] uppercase block">
              Cocktail Hour
            </span>
            <h4 className="font-serif text-xl text-neutral-900 font-light">
              {weddingData.canapes.title}
            </h4>
            <p className="text-xs text-neutral-500 font-mono mt-0.5">
              {weddingData.canapes.price}
            </p>
          </div>
          <div className="space-y-1">
            {weddingData.canapes.categories.map((cat, cIdx) => (
              <Accordion key={cIdx} title={cat.name}>
                <ul className="space-y-1.5 text-xs text-neutral-600 font-light pl-1">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2 py-0.5">
                      <span className="w-1 h-1 rounded-full bg-[#556b2f]/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 border border-neutral-200/60 bg-neutral-50/50 p-6 rounded-xs space-y-4">
          <div className="border-b border-neutral-200 pb-3">
            <span className="text-[9px] font-mono font-bold tracking-wider text-[#556b2f] uppercase block">
              Beverage Service
            </span>
            <h4 className="font-serif text-xl text-neutral-900 font-light">
              Free Flow Beverage Packages
            </h4>
          </div>
          <div className="space-y-3 max-h-[340px] overflow-y-auto pr-2 no-scrollbar">
            {weddingData.beverages.map((bev, bIdx) => (
              <div
                key={bIdx}
                className="bg-white p-3 border border-neutral-200/40 rounded-2xs flex flex-col sm:flex-row justify-between gap-2"
              >
                <div className="space-y-1">
                  <span className="text-xs font-serif text-neutral-800 font-medium block">
                    {bev.name}
                  </span>
                  <p className="text-[11px] text-neutral-400 font-light">
                    {bev.items.join(", ")}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs font-mono text-[#556b2f] font-semibold block">
                    {bev.price}
                  </span>
                  <span className="text-[9px] font-mono text-neutral-400">
                    {bev.extra}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION: POLICIES, CORKAGE & BANKING */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-200 pt-12">
        <div className="space-y-4">
          <h4 className="font-serif text-lg text-neutral-900">
            Corkage Fees & Venue Rules
          </h4>
          <div className="space-y-3 text-xs text-neutral-600 font-light">
            <p>{weddingData.policy.capacity}</p>
            <div className="bg-neutral-50 p-4 border border-neutral-200/50 rounded-2xs space-y-2">
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">
                Outside Beverage Fee
              </span>
              {weddingData.corkage.map((cork, cIdx) => (
                <div
                  key={cIdx}
                  className="flex justify-between border-b border-neutral-100 last:border-0 pb-1 last:pb-0"
                >
                  <span>{cork.type}</span>
                  <span className="font-mono text-neutral-700 font-medium">
                    {cork.fee}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-lg text-neutral-900">
            Reservation Guarantee & Payments
          </h4>
          <div className="space-y-3 text-xs text-neutral-600 font-light">
            <p>{weddingData.policy.deposit}</p>
            <Accordion title="View Official Wire Bank Account Details">
              <div className="bg-neutral-900 text-neutral-300 font-mono p-4 rounded-2xs text-[11px] space-y-1.5">
                <p>
                  <span className="text-neutral-500">Bank:</span>{" "}
                  {weddingData.policy.bank.name}
                </p>
                <p>
                  <span className="text-neutral-500">Branch:</span>{" "}
                  {weddingData.policy.bank.address}
                </p>
                <p>
                  <span className="text-neutral-500">Acc IDR:</span>{" "}
                  {weddingData.policy.bank.idr}
                </p>
                <p>
                  <span className="text-neutral-500">Acc USD:</span>{" "}
                  {weddingData.policy.bank.usd}
                </p>
                <p>
                  <span className="text-neutral-500">Beneficiary:</span>{" "}
                  {weddingData.policy.bank.beneficiary}
                </p>
                <p>
                  <span className="text-neutral-500">Swift:</span>{" "}
                  {weddingData.policy.bank.swift}
                </p>
              </div>
            </Accordion>
            <p className="text-[11px] text-neutral-400 italic pt-1">
              {weddingData.policy.cc}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: CAKES */}
      <div className="space-y-8 pt-6">
        <div className="border-b border-neutral-200 pb-2">
          <h4 className="font-serif text-xl font-light text-neutral-800">
            Signature Wedding Cakes
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {weddingData.cakes.map((cake, index) => (
            <div
              key={index}
              className="group/cake border border-neutral-200/60 bg-white p-4 rounded-xs shadow-xs"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xs bg-neutral-100 mb-4">
                <img
                  src={cake.image}
                  alt={cake.name}
                  onClick={() => setLightboxImage(cake.image)}
                  className="w-full h-full object-cover cursor-zoom-in"
                />
              </div>
              <h5 className="font-serif text-lg text-neutral-900">
                {cake.name}
              </h5>
              <p className="text-xs text-neutral-500 font-light mt-1.5">
                {cake.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: MENUS */}
      {/* <div className="space-y-8 pt-6">
        <div className="border-b border-neutral-200 pb-2">
          <h4 className="font-serif text-xl font-light text-neutral-800">
            Wedding Dinner Menu Packages
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weddingData.menus.map((menu, mIdx) => (
            <div
              key={mIdx}
              className="bg-neutral-50/60 border border-neutral-200/50 p-6 rounded-xs space-y-4"
            >
              <h5 className="font-serif text-lg text-neutral-900">
                {menu.title}
              </h5>
              <ul className="space-y-2.5">
                {menu.items.map((item, iIdx) => (
                  <li
                    key={iIdx}
                    className="flex items-center gap-2.5 text-xs text-neutral-600 font-light"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#556b2f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}

      {/* SECTION: PREWEDDING PACKAGES (A & B) */}
      <div className="space-y-8 pt-6">
        <div className="border-b border-neutral-200 pb-2">
          <h4 className="font-serif text-xl font-light text-neutral-800">
            Pre-Wedding Shoot & Master Packages
          </h4>
        </div>
        <div className="space-y-12">
          {/* Package 1 (Original) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-neutral-200/50 p-6 rounded-xs">
            <div className="lg:col-span-5 aspect-[4/3] rounded-2xs overflow-hidden bg-neutral-100">
              <img
                src={weddingData.prewedding.image}
                alt="Prewedding Master"
                onClick={() => setLightboxImage(weddingData.prewedding.image)}
                className="w-full h-full object-cover cursor-zoom-in"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono font-semibold tracking-[0.25em] text-[#556b2f] uppercase block">
                  Premium Concept
                </span>
                <h5 className="font-serif text-xl text-neutral-900">
                  {weddingData.prewedding.title}
                </h5>
              </div>
              <p className="text-xs text-neutral-500 font-light">
                {weddingData.prewedding.description}
              </p>
              <Accordion title="View Package Inclusions & Amenities">
                <ul className="space-y-2 text-xs text-neutral-600 font-light pl-1">
                  {weddingData.prewedding.includes.map((inc, incIdx) => (
                    <li
                      key={incIdx}
                      className="flex items-start gap-2 py-1 border-b border-neutral-100 last:border-b-0"
                    >
                      <span className="text-[#556b2f] mt-0.5">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>
          </div>

          {/* NEW Package 2: Moments Before Forever */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-neutral-200/50 p-6 rounded-xs">
            <div className="lg:col-span-5 aspect-[4/3] rounded-2xs overflow-hidden bg-neutral-100">
              <img
                src={weddingData.preweddingPackageB.image}
                alt="Moments Before Forever"
                onClick={() =>
                  setLightboxImage(weddingData.preweddingPackageB.image)
                }
                className="w-full h-full object-cover cursor-zoom-in"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-100 pb-3 gap-2">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-semibold tracking-[0.25em] text-[#556b2f] uppercase block">
                    {weddingData.preweddingPackageB.tagline}
                  </span>
                  <h5 className="font-serif text-xl text-neutral-900">
                    {weddingData.preweddingPackageB.title}
                  </h5>
                </div>
                <span className="font-serif text-lg text-[#556b2f] font-normal shrink-0">
                  {weddingData.preweddingPackageB.price}
                </span>
              </div>
              <p className="text-xs text-neutral-500 font-light">
                {weddingData.preweddingPackageB.description}
              </p>

              <Accordion title="View Photoshoot Inclusions">
                <ul className="space-y-2 text-xs text-neutral-600 font-light pl-1 mb-3">
                  {weddingData.preweddingPackageB.includes.map(
                    (inc, incIdx) => (
                      <li
                        key={incIdx}
                        className="flex items-start gap-2 py-1 border-b border-neutral-100 last:border-b-0"
                      >
                        <span className="text-[#556b2f] mt-0.5">✓</span>
                        <span>{inc}</span>
                      </li>
                    ),
                  )}
                </ul>
                <div className="bg-neutral-50 p-3 border border-neutral-200/40 rounded-2xs space-y-1">
                  <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider block">
                    Terms & Conditions
                  </span>
                  {weddingData.preweddingPackageB.notes.map((note, nIdx) => (
                    <p
                      key={nIdx}
                      className="text-[10px] text-neutral-400 leading-tight"
                    >
                      • {note}
                    </p>
                  ))}
                </div>
              </Accordion>

              <div className="pt-2">
                <button className="text-[10px] uppercase tracking-widest font-mono font-bold bg-[#556b2f] text-white px-4 py-2 rounded-xs hover:bg-neutral-800 transition-colors duration-300 cursor-pointer">
                  Book Session Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
