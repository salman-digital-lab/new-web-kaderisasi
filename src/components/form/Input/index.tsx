export type InputProps = {
  inputStyle?:
    | "default-primary"
    | "default-secondary"
    | "outlined-primary"
    | "outlined-secondary";
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  className,
  inputStyle = "default-primary",
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
    <input
      {...otherProps}
      className={
        "py-2 md:py-4 px-4 md:px-8 lg:px-4 w-full rounded-lg text-black focus:outline-none focus:outline-offset-0 " +
        INPUT_STYLE[inputStyle] +
        " " +
        className
      }
    />
  );
}
