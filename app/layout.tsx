
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import RegisterModal from "@/components/modal/RegisterModal";
import ToasterProvider from "./hooks/providers/ToasterProvider";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Book anything, anytime, anywhere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font.clasName">
        <Navbar />
        <ToasterProvider/>
       <RegisterModal/>
        {children}
      </body>
    </html>
  );
}
