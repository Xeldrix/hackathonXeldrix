import React from "react";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-accent">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-extrabold text-secondary tracking-tight">
          Zapatería Nacional
        </h1>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#productos" className="hover:text-secondary transition">Productos</a></li>
          <li><a href="#nosotros" className="hover:text-secondary transition">Nosotros</a></li>
        </ul>
        <Button className="bg-secondary text-white hover:bg-accent transition">
          Iniciar Sesión
        </Button>

      </div>
    </nav>
  );
};

