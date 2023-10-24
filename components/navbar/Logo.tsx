"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from '@/public/image/logo.png'
export const Logo = () => {
  const router = useRouter();

  return (
    <div>
      <Image
        height={100}
        width={100}
        className="hidden md:block cursor-pointer"
        src={logo}
        alt="Logo"
        onClick={() => router.push("/")}
      />
    </div>
  );
};
export default Logo
