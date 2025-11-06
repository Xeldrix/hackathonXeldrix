"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

export const ProductHighlights: React.FC = () => {
  const productos = [
    { id: 1, nombre: "Tenis Urbanos", imagen: "/shoes1.jpg", precio: "$899" },
    { id: 2, nombre: "Botines de Cuero", imagen: "/shoes2.jpg", precio: "$1299" },
    { id: 3, nombre: "Sandalias Verano", imagen: "/shoes3.jpg", precio: "$699" },
  ];

  return (
    <section id="productos" className="py-20 bg-primary text-gray-800">
      <h3 className="text-4xl font-bold text-center mb-12 text-secondary">
        Productos Destacados
      </h3>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {productos.map((p, i) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden shadow-xl border-2 border-accent rounded-3xl">
              <img src={p.imagen} alt={p.nombre} className="w-full h-64 object-cover" />
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">{p.nombre}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-contrast">{p.precio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
