import type { Metadata } from "next";
import { SOURCE_SANS_3 } from "./fonts";
import "./globals.css";

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
