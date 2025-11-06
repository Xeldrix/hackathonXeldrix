"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary z-50 shadow-md h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-secondary tracking-tight"
        >
          Calzando a México
        </Link>

        {/* Links del menú */}
        <ul className="hidden md:flex gap-8 text-foreground font-medium">
          <li>
            <a href="#productos" className="hover:text-accent transition">
              Productos
            </a>
          </li>
          <li>
            <a href="#nosotros" className="hover:text-accent transition">
              Nosotros
            </a>
          </li>
        </ul>

        {/* Botón de login */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-secondary text-white hover:bg-accent transition px-4 py-2 rounded-xl"
          >
            <Link href="/auth">Iniciar Sesión</Link>
          </Button>
        </div>

        {/* Menú móvil opcional */}
        {/* Aquí puedes agregar un botón de hamburguesa para móviles si quieres */}
      </div>
    </nav>
  );
};
