"use client";
import Image from "next/image";
import avatar from '@/public/image/placeholder.jpg'
export const Avatar = () => {
  return (
    <div>
      <Image
        height={30}
        width={30}
        src={avatar}
        alt="Avatar image"
        className="rounded-full"
      />
    </div>
  );
};
export default Avatar;
