import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import RegisterModal from "@/components/modal/RegisterModal";
import ToasterProvider from "./hooks/providers/ToasterProvider";
import LoginModal from "@/components/modal/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Book anything, anytime, anywhere",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currrentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className="font.clasName">
        <Navbar currentUser={currrentUser}/>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  );
}
