import React from "react";
import SignupForm from "@/components/Auth/SignupForm";
import { ModeToggle } from "@/components/ThemeSwitcher";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignupPage = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="fixed top-5 right-5">
        <ModeToggle />
      </div>
      <Card className="w-full rounded-lg shadow border-input md:mt-0  sm:max-w-[32rem] xl:p-0">
        <CardHeader>
          <CardTitle>Create</CardTitle>
          <CardDescription>Create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default SignupPage;
