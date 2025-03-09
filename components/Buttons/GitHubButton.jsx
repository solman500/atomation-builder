import React from "react";
import { FaGithub } from "react-icons/fa";
const GitHubButton = ({ text }) => {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-1.5 border border-input py-2 rounded-lg text-sm font-medium cursor-pointer "
    >
      <FaGithub className="text-[20px]  " />
      {text}
    </button>
  );
};

export default GitHubButton;
