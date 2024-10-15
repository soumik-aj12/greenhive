"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

const UserImage = ({ user }: Session) => {
  console.log(user);

  return (
    <div className="flex items-center gap-5">
      <Avatar>
        <AvatarImage
          src={user?.image!}
          alt="User Image"
          className="h-10 w-10"
        />
        <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <LogOut onClick={() => signOut()} className="cursor-pointer" />
    </div>
  );
};

export default UserImage;
