"use client";
import { useIsClient } from "@/hooks";
import SelectComponent from "react-select";

export type SelectProps = {
  inputStyle?:
    | "default-primary"
    | "default-secondary"
    | "outlined-primary"
    | "outlined-secondary";
} & Parameters<SelectComponent>[0];

export default function Select({
  inputStyle = "default-primary",
  ...props
}: SelectProps) {
  const INPUT_STYLE = {
    "default-primary": {
      outlineFocus: "#4A9CCC",
      outlineWidth: "2px",
      borderColor: undefined,
      border: "none",
    },
    "default-secondary": {
      outlineFocus: "#f87c51",
      outlineWidth: "2px",
      borderColor: undefined,
      border: "none",
    },
    "outlined-primary": {
      outlineFocus: "#2071A2",
      outlineWidth: "1px",
      borderColor: "#2688C2",
      border: undefined,
    },
    "outlined-secondary": {
      outlineFocus: "#ce5226",
      outlineWidth: "1px",
      borderColor: "#f7622e",
      border: undefined,
    },
  };

  const isClient = useIsClient();
  return isClient ? (
    <SelectComponent
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          cursor: "text",
          outline: undefined,
          boxShadow: "none",
          borderColor: INPUT_STYLE[inputStyle].borderColor,
          outlineWidth: state.isFocused
            ? INPUT_STYLE[inputStyle].outlineWidth
            : undefined,
          outlineColor: state.isFocused
            ? INPUT_STYLE[inputStyle].outlineFocus
            : undefined,
          outlineOffset: "0px",
          outlineStyle: state.isFocused ? "solid" : "none",
          border: INPUT_STYLE[inputStyle].border,
          ":hover": {
            borderColor: INPUT_STYLE[inputStyle].borderColor,
          },
        }),
      }}
      {...props}
    />
  ) : undefined;
}
