"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleButton from "../Buttons/GoogleButton copy";
import GitHubButton from "../Buttons/GitHubButton";
import Separator from "../Common/Separator";
import { Form } from "../ui/form";
import CustomFormFiled from "../Form/CustomFormFiled";
import { signupSchema } from "@/schema/validationSchema";


const SignupForm = () => {
  const form = useForm({
    resolver: zodResolver(signupSchema),

    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setErorr] = useState(null);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await form.handleSubmit(data);
      setLoading(false);
    } catch (err) {
      setErorr(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex items-center gap-3.5">
        <GoogleButton text="Sign Up With Google" />
        <GitHubButton text="Sign Up With GitHub" />
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
          <CustomFormFiled  />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
