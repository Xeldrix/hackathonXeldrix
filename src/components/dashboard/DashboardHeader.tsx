"use client";

import React from "react";
import { Badge } from "../ui/badge";

export const DashboardHeader: React.FC = () => (
  <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
    <h1 className="text-3xl font-bold text-secondary">Dashboard Central</h1>
    <Badge variant="secondary">Monitoreo de KPI’s en tiempo real</Badge>
  </header>
);
