"use client";

import Button, { ButtonProps } from "@/components/common/Button";
import { useFormStatus } from "react-dom";

export default function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus();

  return <Button loading={pending} {...props} />;
}
