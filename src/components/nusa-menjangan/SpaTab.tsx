import React from "react";

export default function SpaPage() {
  const spaData = {
    title: "Spa",
    tagline: "Traditional Balinese & Aromatherapy Massages",
    description:
      "The art of massage has long played an important part in Indonesian health care. NusaBay Menjangan offers traditional Balinese and aromatherapy massages in a dedicated spa building near the swimming pool. The perfect antidote to aching muscles from long trips or a day exploring the national park. Allow trained specialists to relax and reenergize your body in preparation for your next adventure.",
    mainImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",

    sections: [
      {
        title: "Classic Massages",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800",
        items: [
          {
            name: "Traditional Balinese",
            price: "IDR 305.000",
            duration: "60 minutes",
            text: "This traditional therapy combines gentle stretching, kneading, stroking and acupressure techniques to relieve tension, knotted muscles and calm the mind. It can also help to improve blood flow, achy joints, lymphatic, muscle strains and nervous system. In fact, sports injuries are often treated with a Balinese massage.",
          },
          {
            name: "Aromatherapy Massage",
            price: "IDR 320.000",
            duration: "60 minutes",
            text: "The ancient art of aromatherapy combines the therapeutic benefits, of touch and smell, individualized just for you. Essential oils of plants and flowers are selected and used during the gentle Balinese massage strokes to reduce stress, and increase energy. Revitalize, relax or rebalancing the body and mind.",
          },
          {
            name: "Deep Tissue Massage",
            price: "IDR 265.000",
            duration: "60 minutes",
            text: "This is a therapeutic massage with added focus on trigger points and problem areas. Helps loosen tight muscles and areas of tension to ease pain and promote healing. This massage is designed to address sports related conditions or problems related to chronic stress or other physical issues.",
          },
          {
            name: "Warm Stone Massage",
            price: "IDR 320.000",
            duration: "75 minutes",
            text: "A pampering, soothing warm stone massage guaranteed to make you feel completely relaxed and appreciated. These heated stones loosen tensed muscles allowing for a deep penetrating massage to eliminate stress and provide a complete sense of spiritual well being for the whole body.",
          },
          {
            name: "Back Massage",
            price: "IDR 200.000",
            duration: "30 minutes",
            text: "Experience the healing power of our special therapy to relax your shoulders, muscles, ease stress and back pain with our traditional thumb pressure techniques.",
          },
        ],
      },
      {
        title: "Body Treatments",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800",
        intro:
          "Choose from our most popular scrubs: Sea Salt & Honey, Balinese Robusta Coffee, Lembongan Island Seaweed",
        items: [
          {
            name: "Indonesian Mandi Lulur",
            price: "IDR 350.000",
            duration: "2 hours",
            text: "Originally a bridal ritual from the royal palaces in Java, this beauty and care treatment starts with a gentle massage, followed by a body wrap consisting of a paste of flour, turmeric and jasmine. Once the paste has dried, it is carefully rubbed off, cleaning and refreshing your skin. A mask of yoghurt is then applied. Yoghurt has a cooling effect and restores the natural PH to your skin and moisturizes it. After a quick shower, a light of body lotion will be applied to leave your skin glowing.",
          },
          {
            name: "Bali Boreh Wrap",
            price: "IDR 350.000",
            duration: "2 hours",
            text: "This is a treatment that is traditionally applied to protect you from colds and strengthens your immune system. The treatment starts with soft massage strokes, followed by a body wrap of herb mixture consisting of ginger, nutmeg and flour. It will leave a warming effect on your skin. Once the paste has dried, it is carefully rubbed off, cleaning and refreshing your skin. After a quick shower, a light body lotion will be applied to leave your skin radiant.",
          },
          {
            name: "Body Scrub",
            price: "IDR 350.000",
            duration: "2 hours",
            text: "A body scrub is a whole-body exfoliation treatment. Slightly abrasive products – usually salts and seeds – are massaged or brushed over and into your body, often mixed in oils which smooth and soften your skin at the same time. A body scrub will actually help to remove all the dead skin cells off your body and expose a supple layer of younger skin, making you feel fresh and rejuvenated. A body scrub is also good to prepare your skin for an even tan, fight cellulite, open and cleanse pores, nourish and moisturize you skin as well as increase the blood circulation.",
          },
        ],
      },
      {
        title: "Pure Natural Facial",
        image:
          "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800",
        items: [
          {
            name: "Pure Natural Facial",
            price: "IDR 275.000",
            duration: "60 minutes",
            text: "Rich your skin with our indulgent facial treatments using high-quality natural skin care products. All facials begin with a deep cleansing followed by a gentle exfoliation to reveal smooth, glowing skin. A face, neck and shoulder massage is certain to ease your mind and spirit. A customized mask followed by a nutrient-rich moisturizer, will hydrate, protect and help to restore the natural balance of your skin. A great way to revitalize your skin and spirit – by Biokos product and leaves you feeling renewed…",
          },
        ],
      },
      {
        title: "Hair & Beauty Treatments",
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800",
        intro:
          "Feel the delightful treatments with our traditional nail care combines skin exfoliation, cuticle stimulation, an aromatherapy hand or foot soak and nails are polished for perfection with your choice of polish.",
        items: [
          {
            name: "Creambath",
            price: "IDR 245.000",
            duration: "60 minutes",
            text: "A vital treat for your hair and scalp that also lifts the spirit! Your scalp is massaged with your choice of Avocado, Ginseng or Aloe Vera cream to stimulate circulation and release tension. Steaming follows to hydrate and preserve suppleness. Your therapist slowly massages your shoulders and upper arms before finally applying natural hair tonic, washing and towel/blow-drying. This treatment will leave your hair radiant and improves the elasticity of your hair.",
          },
          {
            name: "Manicure",
            price: "IDR 200.000",
            duration: "60 minutes",
            text: "Nails are soaked in warm water, then shaped and filed. Cuticles are cleaned and trimmed afterwards. Receive a shooting lotion treatment with massage and nails are finished with your choice of polish.",
          },
          {
            name: "Pedicure",
            price: "IDR 210.000",
            duration: "60 minutes",
            text: "Soak your feet in a warm spa bath. Nails are shaped and filed. Cuticles are cleaned and trimmed. Afterwards feet are lightly buffed and scrubbed then rinsed and lotion will be applied on legs. Nails will be finished with polish of your choice.",
          },
          {
            name: "Gentleman’s Manicure & Pedicure",
            price: "IDR 180.000 - 185.000",
            duration: "45 - 55 minutes",
            text: "Manicure 45 minutes IDR 180.000 / Pedicure 55 minutes IDR 185.000. Nails and cuticles are expertly shaped before hands or feet and massaged with our smooth lotion. Nails are then buffed for a clean finish.",
          },
          {
            name: "Foot Reflexology",
            price: "IDR 180.000",
            duration: "30 minutes",
            text: "Our therapist will stimulate points on your feet corresponding to areas of the body as dictated by the ancient art of Reflexology. Reflexology helps balance the body and allows healing energy to flow.",
          },
        ],
      },
      {
        title: "Spa Indulgence Packages",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
        items: [
          {
            name: "Sunrise",
            price: "IDR 530.000",
            duration: "180 minutes",
            text: "Indonesian Mandi Lulur ( 120 minutes ) / Pure Nature Facial ( 30 minutes ) / Manicure ( 30 minutes )",
          },
          {
            name: "Jatiluwih",
            price: "IDR 560.000",
            duration: "180 minutes",
            text: "Indonesian Mandi Lulur ( 120 minutes ) / Pure Nature Facial ( 30 minutes ) / Hair Creambath ( 30 minutes )",
          },
          {
            name: "Menjangan",
            price: "IDR 530.000",
            duration: "180 minutes",
            text: "Bali Boreh Wrap ( 120 minutes ) / Pure Nature Facial ( 30 minutes ) / Manicure ( 30 minutes )",
          },
          {
            name: "Jalak Bali",
            price: "IDR 560.000",
            duration: "180 minutes",
            text: "Indonesian Mandi Lulur ( 120 minutes ) / Hair Creambath ( 30 minutes ) / Pedicure ( 30 minutes )",
          },
        ],
      },
    ],

    etiquette: [
      {
        title: "Appointments",
        text: "Advance reservations for scheduled services are recommended but not necessary. We will always do our best to accommodate you.",
      },
      {
        title: "Spa Check-In",
        text: "Please arrive at least 10-15 minutes prior to your scheduled treatment time in order to change and take some time to relax and get prepared to enjoy your treatment.",
      },
      {
        title: "Cancellation Policy",
        text: "As a courtesy to all, we ask that a minimum 3-hours notice be given if you need to cancel or reschedule your appointment(s). [Please keep in mind that arriving late for a service may require the spa to shorten the length of the treatment, with full charges applied, so as not to inconvenience other guests. We will however, make every effort to provide the full service.]",
      },
      {
        title: "What to Wear",
        text: "Please dress with comfort in mind. Robes, slippers, towels and sarongs are provided for your use when receiving a treatment. We recommend that you do not bring valuables, as we cannot be responsible for these if they are misplaced.",
      },
      {
        title: "Quiet Please … Treatments in Session",
        text: "Please turn off (or put on silent mode) cell phones and other electronic devices, and please keep your voice down. Our guests expect and deserve a quiet and relaxing atmosphere while they receive their spa services.",
      },
      {
        title: "Please Advise Us",
        text: "We ask that you let our staff know about any health issues such as whether or not you are pregnant, recovering from recent surgery or have existing medical concerns such as hypertension, heart disease or athletic injuries.",
      },
      {
        title: "Minimum Age",
        text: "The Spa is appropriate for children 16 years and older. For the comfort of other guests, we request that children do not accompany you on your spa visit.",
      },
      {
        title: "Gratuities",
        text: "Gratuities are given at your discretion. 10% Service Charge is applied to all services which is equally distributed to all employees.",
      },
      {
        title: "Packages",
        text: "We will be glad to customize a spa day for you and your partner. Please ask one of our staff and we will put together a half day of indulging treatments to relax, rejuvenate and inspire you.",
      },
    ],
  };

  return (
    <div className="w-full bg-zinc-50 text-zinc-900 font-sans antialiased selection:bg-zinc-200">
      {/* 1. Hero Cover Header */}
      <div className="relative w-full h-[60vh] bg-zinc-900 overflow-hidden">
        <img
          src={spaData.mainImage}
          alt={spaData.title}
          className="w-full h-full object-cover opacity-60 grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full max-w-6xl mx-auto px-4 pb-10 z-10">
          <span className="text-xs font-semibold tracking-[0.3em] text-zinc-300 uppercase block mb-2">
            Sanctuary of NusaBay
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white uppercase mb-4">
            {spaData.title}
          </h1>
          <p className="text-xs md:text-sm font-medium text-zinc-200 tracking-widest uppercase italic max-w-2xl border-l border-zinc-400 pl-3">
            {spaData.tagline}
          </p>
        </div>
      </div>

      {/* Intro Description */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-zinc-600 leading-relaxed font-light text-base max-w-4xl border-b border-zinc-200 pb-12">
          {spaData.description}
        </p>
      </div>

      {/* 2. Loop Dynamic Kategori dengan Layout Visual Side-by-Side */}
      <div className="max-w-6xl mx-auto px-4 space-y-24 pb-20">
        {spaData.sections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row gap-12 items-start ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Kolom Visual (Sticky Gambar Per Kategori) */}
              <div className="w-full lg:w-[40%] lg:sticky lg:top-8 group">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-sm shadow-md border border-zinc-200 bg-zinc-200 relative">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h2 className="text-xl font-normal tracking-widest uppercase text-zinc-900 mt-6 border-b border-zinc-900 pb-2 inline-block">
                  {section.title}
                </h2>
                {section.intro && (
                  <p className="text-xs italic text-zinc-500 mt-3 font-light leading-relaxed">
                    {section.intro}
                  </p>
                )}
              </div>

              {/* Kolom List Menu Perawatan */}
              <div className="w-full lg:w-[60%] space-y-6">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white border border-zinc-200/60 rounded-sm shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-baseline mb-3 flex-wrap gap-2 border-b border-dashed border-zinc-200 pb-2">
                        <h3 className="font-medium text-base text-zinc-950 tracking-wide">
                          {item.name}
                        </h3>
                        <span className="text-xs font-mono text-zinc-500 tracking-wider bg-zinc-100 px-2 py-0.5 rounded-sm">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                    <div className="text-right mt-4 pt-2 font-mono text-sm font-semibold text-zinc-900">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Spa Etiquette Grid Panel */}
      {/* 3. Spa Etiquette Grid Panel (Tanpa Background Gelap) */}
      <div className="text-zinc-900 py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-zinc-400 uppercase block mb-2">
              Guest Information
            </span>
            <h2 className="text-2xl font-light tracking-widest uppercase text-zinc-900">
              Spa Etiquette
            </h2>
            <div className="w-12 h-[1px] bg-zinc-400 mx-auto mt-4"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {spaData.etiquette.map((item, index) => (
              <div
                key={index}
                className="text-xs space-y-2 p-5 rounded-sm border border-zinc-100 bg-zinc-50/30 hover:border-zinc-300 transition-colors duration-300"
              >
                <h3 className="font-medium text-zinc-900 tracking-widest uppercase text-[11px] border-b border-zinc-200 pb-1.5">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
