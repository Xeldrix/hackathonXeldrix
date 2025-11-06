"use client";

import React from "react";
import { Navbar } from "../src/components/Navbar";
import { HeroSection } from "../src/components/HeroSection";
import { ProductHighlights } from "../src/components/ProductHighlights";
import { AboutSection } from "../src/components/AboutSection";
import { Footer } from "../src/components/Footer";

const Page: React.FC = () => {
  return (
    <main className="bg-primary min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <ProductHighlights />
      <AboutSection />
      <Footer />
      
    </main>
  );
};

export default Page;
