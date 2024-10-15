import { auth } from "@/server/auth";
import { Leaf, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import UserImage from "./UserImage";
import MobileHeader from "./MobileHeader";
const Header = async () => {
  const user = await auth();
  return (
    <header>
      <ul className="flex justify-between m-7 px-5">
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
            <Link href="/contact">Contact</Link>
          </div>
        </li>
        <li className="hidden md:flex items-center gap-5">
          <div>
            <ShoppingCart />
          </div>
          <div>
            {user ? (
              <UserImage expires={user.expires} user={user.user} />
            ) : (
              <User />
            )}
          </div>
        </li>
        <MobileHeader />
      </ul>
    </header>
  );
};

export default Header;
