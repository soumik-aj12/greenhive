"use client";
import React, { useState } from "react";
import AuthCard from "../AuthCard";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./login-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { emailSignIn } from "@/server/actions/email-signin";
import { cn } from "@/lib/utils";
const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { execute, result, status } = useAction(emailSignIn, {
    onSuccess(data) {
      console.log(data);
    },
  });
  const [error, setError] = useState("");
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    execute(values);
  };
  return (
    <AuthCard
      cardTitle="Welcome back! Login"
      backButtonHref="/auth/register"
      backButtonLabel="Create a new account"
      showSocials
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="email"
                      {...field}
                      placeholder="janedoe@gmail.com"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="password"
                      {...field}
                      placeholder="Enter your password"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button size="sm" variant="link" asChild>
                <Link href="/auth/reset">Forgot Password</Link>
              </Button>
            </div>
          </div>
          <Button
            variant="default"
            className={cn(
              "w-full",
              status === "executing" ? "animate-pulse" : ""
            )}
          >
            Login
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
};

export default LoginForm;
