"use client";

import React, { useEffect, useState } from "react";
import WatsonChat from "./src/components/WatsonChat";
import { Navbar } from "../src/components/Home/Navbar";
import { HeroSection } from "../src/components/Home/HeroSection";
import { ProductHighlights } from "../src/components/Home/ProductHighlights";
import { AboutSection } from "../src/components/Home/AboutSection";
import { Footer } from "../src/components/Home/Footer";

export default function Page() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("/api/ip")
      .then((res) => res.json())
      .then((data) => {
        console.log("Tu IP es:", data.ip);
        setIp(data.ip);
      });
  }, []);

  return (
    <main className="bg-primary min-h-screen font-sans text-center">
      {/* Puedes mostrar la IP si quieres */}
      {/* <div className="text-white p-4">Tu IP: {ip}</div> */}

      <Navbar />
      <HeroSection />
      <ProductHighlights />
      <AboutSection />
      <WatsonChat />
      <Footer />
    </main>
  );
}
