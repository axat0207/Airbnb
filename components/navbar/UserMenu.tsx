"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState } from "react";
import MenuItem from "../MenuItem";
import useRegisterModal from "@/app/hooks/useregisterModal";

export const UserMenu = () => {
    const [isOpen,setisOpen] = useState(false)
    const toggleModal = (val:boolean)=>{
        setisOpen(!val)
         }
    const registerModal = useRegisterModal();
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
            Your Home
          </div>
          <div onClick={()=>toggleModal(isOpen)} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar/>
            </div>
          </div>
        </div>
        <div>
            {isOpen && <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden top-12 right-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                    <MenuItem onClick={()=>""} label="login"/>
                    <MenuItem onClick={registerModal.onOpen} label="SignUp"/>
                </div>
                
                
                </div>}
        </div>
      </div>
    </>
  );
};

export default UserMenu;
