import "./globals.css";
<<<<<<< Updated upstream
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Website",
  description: "Portofolio Aldi dan Syauqi",
=======
import type { Metadata } from "next";   
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Website Portofolio",
>>>>>>> Stashed changes
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< Updated upstream
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-6xl flex-1 w-full">
          {children}
        </main>
=======
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <Footer />
>>>>>>> Stashed changes
      </body>
    </html>
  );
}