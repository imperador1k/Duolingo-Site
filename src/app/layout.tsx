import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "MyDuolingo - Aprender idiomas grátis de forma divertida",
  description: "A melhor forma de aprender um idioma grátis. MyDuolingo é divertido, eficaz e baseado em ciência. Começa já a tua jornada!",
  keywords: ["aprender idiomas", "grátis", "espanhol", "inglês", "francês", "alemão", "italiano", "duolingo clone"],
  icons: "/duolingo_icon_2.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${nunito.variable} font-sans antialiased text-[#3c3c3c] bg-white`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
