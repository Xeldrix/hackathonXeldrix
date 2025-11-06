"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

interface KpiCardProps {
  title: string;
  value: number | string;
  goal: string;
  unit?: string;
  status?: "good" | "warning" | "critical";
}

export const KpiCard: React.FC<KpiCardProps> = ({ title, value, goal, unit, status = "good" }) => {
  const statusColor =
    status === "good"
      ? "text-green-500"
      : status === "warning"
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-secondary">{title}</CardTitle>
        <CardDescription className="text-gray-500">Meta: {goal}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className={`text-2xl font-bold ${statusColor}`}>
          {value}
          {unit && <span className="text-sm ml-1">{unit}</span>}
        </p>
      </CardContent>
    </Card>
  );
};
