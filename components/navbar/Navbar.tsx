'use client'
import { Container } from "../Container";
import { Logo } from "./Logo";
import Search from "./Search";
import { UserMenu } from "./UserMenu";

export const Navbar = () => {
  return (
    <div>
      <div className="fixed w-full z-20 shadow-sm border-b-[1px] py-4">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
