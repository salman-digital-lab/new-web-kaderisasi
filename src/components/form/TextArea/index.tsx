"use client";

export type InputProps = {
  inputStyle?:
    | "default-primary"
    | "default-secondary"
    | "outlined-primary"
    | "outlined-secondary";
  customErrorMessage?: string;
} & React.ComponentPropsWithoutRef<"textarea">;

export default function TextArea({
  className,
  inputStyle = "default-primary",
  customErrorMessage,
  ...otherProps
}: InputProps) {
  const INPUT_STYLE = {
    "default-primary": "focus:outline-primary-500 focus:outline-2",
    "default-secondary": "focus:outline-secondary-500 focus:outline-2 ",
    "outlined-primary":
      "border border-primary focus:outline-primary-600 focus:outline-1",
    "outlined-secondary":
      "border border-secondary focus:outline-secondary-600 focus:outline-1",
  };

  return (
    <textarea
      {...otherProps}
      className={
        "px-2.5 py-[6px] w-full rounded text-black focus:outline-none focus:outline-offset-0 " +
        INPUT_STYLE[inputStyle] +
        " " +
        " disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:border-slate-200 disabled:text-slate-400 " +
        className
      }
    />
  );
}
