import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "template page",
  },
  description: "this is description area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <header>
          <Nav />
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
