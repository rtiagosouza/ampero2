import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Hotone Ampero II - Pedal Multi Efeitos',
  description: 'Pedal Profissional de Multi-Efeitos e Modelador de Amplificador com tecnologia de modelagem poderosa',
  openGraph: {
    title: 'Hotone Ampero II - Pedal Multi Efeitos',
    description: 'Pedal Profissional de Multi-Efeitos e Modelador de Amplificador com tecnologia de modelagem poderosa',
    images: [
      {
        url: 'https://ampero2.vercel.app/images/hotone-ampero2.jpg', // URL completa da imagem
        width: 1200,
        height: 630,
        alt: 'Hotone Ampero II',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
