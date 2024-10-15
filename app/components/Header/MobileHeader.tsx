"use client";
import { Menu, X } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const MobileHeader = ({user}: any) => {
  console.log(user);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="md:hidden">
        <button onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center p-5 gap-5">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link href="/my-profile" onClick={toggleMenu}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      signOut();
                      toggleMenu();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" onClick={toggleMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" onClick={toggleMenu}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
