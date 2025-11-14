import { NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "ips.json");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("k");
  const mostrar = searchParams.get("mostrar");

  // Leer archivo JSON o inicializar si no existe
  let contenido: Record<string, string> = {};

  try {
    const file = await readFile(filePath, "utf8");
    contenido = JSON.parse(file || "{}");
  } catch {
    contenido = {};
  }

  // Mostrar IP registrada
  if (mostrar && key) {
    return NextResponse.json({
      key,
      ip: contenido[key] || "No encontrada",
    });
  }

  // Registrar IP
  if (key) {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]
      || request.headers.get("x-real-ip")
      || "Desconocida";

    contenido[key] = ip;

    await writeFile(filePath, JSON.stringify(contenido, null, 2));

    return NextResponse.json({
      msg: "IP registrada",
      key,
      ip,
    });
  }

  return NextResponse.json({ error: "Faltan parámetros" }, { status: 400 });
}
