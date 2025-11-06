"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center bg-[url('/hero-shoes.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          Pasos que inspiran
        </h2>
        <p className="text-xl mb-8 text-gray-200">
          Conquista el 2025 con estilo y comodidad
        </p>
        <Button
          asChild
          className="bg-secondary hover:bg-accent text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          <a href="#productos">Ver colección</a>
        </Button>
      </motion.div>
    </section>
  );
};
