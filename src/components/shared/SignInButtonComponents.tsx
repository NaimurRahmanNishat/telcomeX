"use client";
import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";

const SignInButtonComponents = () => {
  return (
    <div>
      <SignInButton mode="modal">
        <Button className="cursor-pointer">Login</Button>
      </SignInButton>
    </div>
  );
};

export default SignInButtonComponents;
