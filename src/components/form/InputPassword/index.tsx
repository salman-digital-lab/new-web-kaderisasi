"use client";

import { useState } from "react";
import { Eye } from "lucide-react";

import { Input } from "..";
import { InputProps } from "../Input";

type InputPasswordProps = {
  labelClasses?: string;
} & InputProps;

export default function InputPassword({
  id,
  ...otherProps
}: InputPasswordProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const passwordViewToggle = () => {
    setPasswordVisible((currentState) => !currentState);
  };

  return (
    <div className="relative">
      <Input
        type={passwordVisible ? "text" : "password"}
        required
        {...otherProps}
      />
      <button
        type="button"
        onClick={passwordViewToggle}
        title={passwordVisible ? "Hide password" : "Show password"}
        className={`absolute right-4 bottom-1/4 md:bottom-1/3 cursor-pointer hover:opacity-50 active:opacity-60 text-primary-600 ${
          passwordVisible ? "opacity-80" : "opacity-30"
        }`}
      >
        <Eye />
      </button>
    </div>
  );
}
