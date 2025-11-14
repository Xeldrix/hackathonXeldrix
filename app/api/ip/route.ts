import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Obtener IP de Vercel
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "Desconocida";

  console.log("🟦 Nueva visita desde IP:", ip);

  return NextResponse.json({ ip });
}
