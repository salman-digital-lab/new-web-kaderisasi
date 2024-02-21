"use client";

import { useState } from "react";
import { Eye } from "lucide-react";

import { Input } from "..";
import { InputProps } from "../Input";

type InputPasswordProps = {
  eyeClassname?: string;
} & InputProps;

export default function InputPassword({
  eyeClassname,
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
        className={`absolute right-4 bottom-[.5rem] cursor-pointer hover:opacity-50 active:opacity-60 text-primary-600 ${eyeClassname} ${
          passwordVisible ? "opacity-80" : "opacity-30"
        }`}
      >
        <Eye />
      </button>
    </div>
  );
}
