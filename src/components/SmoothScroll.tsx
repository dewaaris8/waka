"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Inisialisasi Lenis dengan parameter konfigurasi luxury premium
    const lenis = new Lenis({
      duration: 1.2, // Durasi inertia rem scroll (makin besar makin lambat berhenti)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fungsi kurva kemulusan
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0, // Kecepatan scroll responsif roda mouse
      touchMultiplier: 1.5, // Sensitivitas scroll pada perangkat layar sentuh
    });

    // Mengintegrasikan sistem requestAnimationFrame agar sinkron dengan frame rate monitor
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Bersihkan instance ketika halaman di-unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
