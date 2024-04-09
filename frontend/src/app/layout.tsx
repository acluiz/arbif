import type { Metadata } from "next";
import { Source_Sans_3, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const SOURCE_SANS_3 = Source_Sans_3({ subsets: ["latin"], display: 'swap', weight: ['400', '500'] });
const LIBRE_BASKERVILLE = Libre_Baskerville({ subsets: ["latin"], display: 'swap', weight: [ '700'] });

export const metadata: Metadata = {
  title: "Arbif",
  description: "Facilidade e transparência para sua empresa crescer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SOURCE_SANS_3.className}>{children}</body>
    </html>
  );
}
