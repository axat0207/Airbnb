"use client";
import Image from "next/image";
import avatar from "@/public/image/placeholder.jpg";

interface Avatarprops {
  src?: string | null | undefined;
}
export const Avatar: React.FC<Avatarprops> = ({ src }) => {
  return (
    <div>
      <Image
        height={30}
        width={30}
        src={src || "/image/placeholder.jpg"}
        alt="Avatar image"
        className="rounded-full"
      />
    </div>
  );
};
export default Avatar;
