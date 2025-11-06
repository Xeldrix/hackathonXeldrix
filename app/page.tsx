"use client";

import React from "react";
import WatsonChat from "./src/components/WatsonChat";
import { Navbar } from "../src/components/Home/Navbar";
import { HeroSection } from "../src/components/Home/HeroSection";
import { ProductHighlights } from "../src/components/Home/ProductHighlights";
import { AboutSection } from "../src/components/Home/AboutSection";
import { Footer } from "../src/components/Home/Footer";

const Page: React.FC = () => {
  return (
    <main className="bg-primary min-h-screen font-sans text-center">
      <Navbar />
      <HeroSection />
      <ProductHighlights />
      <AboutSection />
      <WatsonChat />
      <Footer />
    </main>
  );
};

export default Page;
