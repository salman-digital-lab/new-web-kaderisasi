type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "transparant-primary"
    | "transparant-secondary";
  outlined?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({
  className,
  variant = "primary",
  outlined = false,
  ...buttonProps
}: ButtonProps) {
  const TYPE_STYLE = {
    primary: "bg-primary hover:bg-primary-600",
    secondary: "bg-secondary hover:bg-secondary-600",
    "transparant-primary": "bg-transparant hover:bg-primary-600",
    "transparant-secondary": "bg-transparant hover:bg-secondary-600",
  };

  const outlinedStyle = outlined ? "border-2 border-solid border-white" : "";

  return (
    <button
      className={`
        px-9 py-2 text-white font-bold rounded-lg
        ${TYPE_STYLE[variant]} 
        ${outlinedStyle}
        ${className}
      `.trim()}
      {...buttonProps}
    />
  );
}
