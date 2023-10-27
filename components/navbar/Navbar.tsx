'use client'
import { User } from "@prisma/client";
import { Container } from "../Container";
import { Logo } from "./Logo";
import Search from "./Search";
import { UserMenu } from "./UserMenu";
import { safeUser } from "@/app/types";


interface Navbarprops{
  currentUser?: safeUser | null
}

export const Navbar:React.FC<Navbarprops> = ({currentUser}) => {
   // console.log(currentUser)
  return (
    <div>
      <div className="fixed w-full z-20 shadow-sm border-b-[1px] py-4">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
