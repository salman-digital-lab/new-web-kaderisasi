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
      "text-white bg-lmdi-primary hover:bg-lmdi-primary-darken disabled:hover:bg-lmdi-primary",
    secondary: "text-white bg-lmdi-secondary hover:bg-lmdi-secondary-darken",
    "transparant-primary":
      "text-white border-2 border-solid border-white bg-transparant border border-gray-500 hover:bg-lmdi-primary-darken disabled:hover:bg-transparant",
    "transparant-secondary":
      "text-white border-2 border-solid border-white bg-transparant hover:bg-lmdi-secondary-darken disabled:hover:bg-transparant",
    "outlined-primary":
      "text-lmdi-primary border-2 border-solid border-lmdi-primary bg-transparant border border-gray-500 hover:bg-lmdi-primary hover:text-white disabled:hover:bg-transparant",
    "outlined-secondary":
      "text-lmdi-secondary border-2 border-solid border-lmdi-secondary bg-transparant hover:bg-lmdi-secondary hover:text-white disabled:hover:bg-transparant",
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
