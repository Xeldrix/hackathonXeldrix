"use client";

import React from "react";
import { Navbar } from "../../src/components/Home/Navbar";
import { DashboardHeader } from "../../src/components/dashboard/DashboardHeader";
import { KpiGrid } from "../../src/components/dashboard/KpiGrid";
import { Card } from "../../src/components/ui/card";

const DashboardPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-primary font-sans pt-16">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <DashboardHeader />

        {/* KPI Cards */}
        <KpiGrid />

        {/* Panel de Alertas */}
        <Card className="mt-8 rounded-2xl shadow-md bg-contrast/20">
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Alertas Recientes
          </h3>
          <ul className="list-disc list-inside text-foreground">
            <li>
              Inventario de la sucursal CDMX por debajo del 80% del objetivo.
            </li>
            <li>Rotación de Inventario de Calzado Deportivo &lt; 4 anual.</li>
            <li>Ventas perdidas por faltante en sucursal Monterrey &gt; 3%.</li>
          </ul>
        </Card>
      </div>
    </main>
  );
};

export default DashboardPage;
