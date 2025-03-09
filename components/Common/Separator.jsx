import React from "react";

const Separator = () => {
  return (
    <div className="flex items-center">
      <div className="w-full h-[.125rem] bg-input"></div>
      <div className="px-[1.25rem] font-medium  text-muted-foreground">Or</div>
      <div className="w-full h-[.125rem] bg-input"></div>
    </div>
  );
};

export default Separator;
