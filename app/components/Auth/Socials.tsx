"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { FcGoogle } from "react-icons/fc";
export default function Socials() {
  return (
    <div>
      <Button
        className="flex gap-3"
        variant="outline"
        onClick={() => signIn("google", { redirect: false, callbackUrl: "/" })}
      >
        <p>Sign in with Google</p>
        <FcGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
}
