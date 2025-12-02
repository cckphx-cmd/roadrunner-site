import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
export const metadata: Metadata = {
  title: "Roadrunner Tree Grant – Saguaro District",
  description: "Greenway Terrace neighborhood tree grant info and eligibility.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <main className="mx-auto max-w-5xl p-6">{children}</main>
      </body>
    </html>
  );
}
