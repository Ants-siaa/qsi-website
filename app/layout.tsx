import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QSI Semiconductors",
  description:
    "Engineering Australia's sovereign semiconductor capability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}