"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import GoogleSignInButton from "./google-signIn";
import { PasswordInput } from "./password-input";
import { SignInSchema } from "@/lib/validators";

export default function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    console.log("submitted..");
  };

  const {
    formState: { isDirty, isValid },
  } = form;

  return (
    <div className="box-border py-12 lg:pt-16 ">
      <Card className="mx-auto max-w-sm lg:max-w-md ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-md flex flex-col gap-4"
          >
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  {/* email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="vy@gmail.com" {...field} />
                        </FormControl>
                        <div className="h-1">
                          <FormMessage className="text-xs" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  {/* password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center">
                          <FormLabel>Password</FormLabel>
                          <Link
                            href="#"
                            className="ml-auto inline-block text-sm underline text-[#0069c2]"
                          >
                            Forgot your password?
                          </Link>
                        </div>
                        <FormControl>
                          <div className="flex w-full">
                            <PasswordInput
                              placeholder="*************"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <div className="h-1">
                          <FormMessage className="text-xs" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <div className="mx-auto my-1 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                  or
                </div>
                <GoogleSignInButton>Continue with Google</GoogleSignInButton>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?
                <Link href="/sign-up" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </form>
        </Form>
      </Card>
    </div>
  );
}
