import { auth } from "@/server/auth";
import { Leaf, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import UserImage from "./UserImage";
import MobileHeader from "./MobileHeader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import Searchbar from "./Searchbar";
import Cart from "./Cart";
const Header = async () => {
  const user = await auth();
  return (
    <header>
      <ul className="flex justify-between items-center m-7 md:px-5">
        <Link href="/">
          <div className="flex gap-2">
            <Leaf /> GREENHIVE
          </div>
        </Link>
        <li className="hidden md:flex gap-7">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/products">Products</Link>
          </div>
          <div>
            <Link href="/contact-us">Contact</Link>
          </div>
        </li>
        <li className="md:flex items-center gap-5">
          <div className="flex gap-2 items-center">
            <Searchbar />
            <Cart />
            <MobileHeader user={user} />
          </div>
          <div className="hidden md:flex">
            {user ? (
              <UserImage expires={user.expires} user={user.user} />
            ) : (
              <Menubar className="p-0 m-0 border-0 cursor-pointer w-fit">
                <MenubarMenu>
                  <MenubarTrigger>
                    <Button variant="ghost" className="m-0 p-0 focus:border-0">
                      <User />
                    </Button>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem >
                      <Link href="/login">Login</Link>
                    </MenubarItem>
                    <DropdownMenuSeparator />
                    <MenubarItem>
                      <Link href="/register">Register</Link>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
