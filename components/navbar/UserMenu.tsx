"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState } from "react";
import MenuItem from "../MenuItem";
import useRegisterModal from "@/app/hooks/useregisterModal";
import useLoginModal from "@/app/hooks/loginModal";
import { User } from "@prisma/client";
import { safeUser } from "@/app/types";
import { signOut } from "next-auth/react";
interface userMenuProps {
  currentUser: safeUser | null;
}

export const UserMenu: React.FC<userMenuProps> = ({ currentUser }) => {
  console.log(currentUser+ " currentuser")
  const [isOpen, setisOpen] = useState(false);
  const toggleModal = (val: boolean) => {
    setisOpen(!val);
  };
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div
            onClick={() => {
              console.log("button clicked");
            }}
            className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 cursor-pointer"
          >
            {currentUser?.name && "Airbnb Your Home"}
          </div>
          <div
            onClick={() => toggleModal(isOpen)}
            className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          >
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar src= {currentUser?.image}  />
            </div>
          </div>
        </div>
        <div>
          {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden top-12 right-12 text-sm">
              <div className="flex flex-col cursor-pointer">
                {currentUser ? (
                  <>
                    <MenuItem onClick={() => ""} label="My Trips" />
                    <MenuItem onClick={() => ""} label="My Favroites" />
                    <MenuItem onClick={() => ""} label="My Reservation" />
                    <MenuItem onClick={() => ""} label="My Properties" />
                    <MenuItem onClick={() => ""} label="Airbnb my home" />
                    <MenuItem onClick={() => signOut()} label="Logout" />
                  </>
                ) : (
                  <>
                    <MenuItem onClick={loginModal.onOpen} label="login" />
                    <MenuItem onClick={registerModal.onOpen} label="SignUp" />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserMenu;
