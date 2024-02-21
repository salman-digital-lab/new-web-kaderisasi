import { Loader2 } from "lucide-react";

export type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "transparant-primary"
    | "transparant-secondary";
  outlined?: boolean;
  loading?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({
  className,
  disabled,
  children,
  variant = "primary",
  outlined = false,
  loading = false,
  ...buttonProps
}: ButtonProps) {
  const TYPE_STYLE = {
    primary: "bg-primary hover:bg-primary-600 disabled:hover:bg-primary",
    secondary: "bg-secondary hover:bg-secondary-600",
    "transparant-primary":
      "bg-transparant border border-gray-500 hover:bg-primary-600 disabled:hover:bg-transparant",
    "transparant-secondary":
      "bg-transparant hover:bg-secondary-600 disabled:hover:bg-transparant",
  };

  const outlinedStyle = outlined ? "border-2 border-solid border-white" : "";

  return (
    <button
      className={
        "px-9 py-2 text-white font-bold rounded-lg " +
        TYPE_STYLE[variant] +
        " " +
        outlinedStyle +
        " disabled:bg-slate-400 disabled:hover:bg-slate-400 " +
        className
      }
      disabled={disabled || loading}
      {...buttonProps}
    >
      {loading ? <Loader2 className="animate-spin m-auto"/> : children}
    </button>
  );
}
