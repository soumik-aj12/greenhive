'use server'

import { LoginSchema } from "@/app/components/Auth/Login/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";

const action = createSafeActionClient();

export const emailSignIn = action(LoginSchema, async({email, password, code}:any)=>{
    const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email)
    });

    if(existingUser?.email !== email){
    return {error: true, message:"Email doesn't exist!"};
    }

    return {error: false, message:"Successfully logged in!"};
    
})