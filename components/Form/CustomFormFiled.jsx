"use client ";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

const CustomFormFiled = ({
  control,
  name,
  label,
  type = "text",
  placeholder,
  ...rest
}) => {
  return (
    <FormField
    control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...field}
              type={type}
              placeholder={placeholder}
              {...rest}
              className="text-sm font-normal placeholder:font[300]  border rounded-lg  focus-visible:ring-0 focus-visible:ring-offset-0 bg-muted/50" 
            />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    ></FormField>
  );
};

export default CustomFormFiled;
