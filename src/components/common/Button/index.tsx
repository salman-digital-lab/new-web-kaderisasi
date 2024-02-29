import { Loader2 } from "lucide-react";

export type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "transparant-primary"
    | "transparant-secondary"
    | "outlined-primary"
    | "outlined-secondary";
  loading?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({
  className,
  disabled,
  children,
  variant = "primary",
  loading = false,
  ...buttonProps
}: ButtonProps) {
  const TYPE_STYLE = {
    primary:
      "text-white bg-primary hover:bg-primary-600 disabled:hover:bg-primary",
    secondary: "text-white bg-secondary hover:bg-secondary-600",
    "transparant-primary":
      "text-white border-2 border-solid border-white bg-transparant border border-gray-500 hover:bg-primary-600 disabled:hover:bg-transparant",
    "transparant-secondary":
      "text-white border-2 border-solid border-white bg-transparant hover:bg-secondary-600 disabled:hover:bg-transparant",
    "outlined-primary":
      "text-primary border-2 border-solid border-primary bg-transparant border border-gray-500 hover:bg-primary hover:text-white disabled:hover:bg-transparant",
    "outlined-secondary":
      "text-secondary border-2 border-solid border-secondary bg-transparant hover:bg-secondary hover:text-white disabled:hover:bg-transparant",
  };

  return (
    <button
      className={
        "px-9 py-2 font-bold rounded-lg " +
        TYPE_STYLE[variant] +
        " disabled:bg-slate-400 disabled:hover:bg-slate-400 " +
        className
      }
      disabled={disabled || loading}
      {...buttonProps}
    >
      {loading ? <Loader2 className="animate-spin m-auto" /> : children}
    </button>
  );
}
