export const metadata = {
  title: "Xeldrix Hackathon",
  description: "Proyecto migrado a Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
