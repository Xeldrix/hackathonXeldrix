"use client";

import React from "react";
import { KpiCard } from "./KpiCard";

export const KpiGrid: React.FC = () => {
  const kpis = [
    { title: "Exactitud del Inventario", value: 96, goal: "≥95%", status: "good", unit: "%" },
    { title: "Rotación de Inventario", value: 3.8, goal: "≥4 anual", status: "warning" },
    { title: "Días de Inventario", value: 58, goal: "≤60 días", status: "good" },
    { title: "Ventas Perdidas por Faltante", value: 2.5, goal: "≤3%", status: "good", unit: "%" },
    { title: "Nivel de Servicio Logístico", value: 94, goal: "≥95%", status: "warning", unit: "%" },
    { title: "Integridad de Datos", value: 95, goal: "≥94%", status: "good", unit: "%" },
    { title: "Nivel de Automatización", value: 72, goal: "≥70%", status: "good", unit: "%" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpis.map((kpi, idx) => (
        <KpiCard
          key={idx}
          title={kpi.title}
          value={kpi.value}
          goal={kpi.goal}
          status={kpi.status as "good" | "warning" | "critical"}
          unit={kpi.unit}
        />
      ))}
    </div>
  );
};
