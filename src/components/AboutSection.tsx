import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 px-6 bg-contrast/20 text-center">
      <h3 className="text-4xl font-bold mb-6 text-secondary">Sobre Nosotros</h3>
      <p className="max-w-3xl mx-auto text-foreground text-lg leading-relaxed">
        Con más de 40 años de experiencia, en{" "}
        <strong className="text-secondary font-semibold">
          Zapatería Nacional
        </strong>{" "}
        ofrecemos calzado hecho en México con materiales de primera calidad.
        Cada paso cuenta, y nosotros te acompañamos con estilo, confort y
        tradición.
      </p>
    </section>
  );
};
