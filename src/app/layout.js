import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NVAEIL",
  description: "VerianCS portafolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights></SpeedInsights>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
