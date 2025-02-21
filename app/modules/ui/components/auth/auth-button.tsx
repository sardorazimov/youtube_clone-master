"use client";
import { Button } from "@/components/ui/button";
import { UserCircle2Icon } from "lucide-react";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
        {/*  */}
      </SignedIn>
      <SignedOut>
      <SignInButton mode="modal">
        <Button
          variant={"outline"}
          className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 border-blue-600 rounded-full shadow-sm "
        >
          <span>Sign in</span>
          <UserCircle2Icon />
        </Button>
      </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;
