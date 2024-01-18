type ButtonProps = {
  variant?: "primary" | "secondary";
  outlined?: boolean;
  typeBorder?: "default" | "card"
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({
  className,
  variant = "primary",
  outlined = false,
  typeBorder = "default",
  ...buttonProps
}: ButtonProps) {
  const TYPE_STYLE = {
    primary: "bg-primary hover:bg-primary-600",
    secondary: "bg-secondary hover:bg-secondary-600",
  };

  const TYPE_BORDER = {
    default: "rounded-lg",
    card: "rounded-b-lg",
  } 

  const outlinedStyle = outlined ? "border-2 border-solid border-white" : "";


  return (
    <button
      className={`
        px-9 py-2 text-white font-bold
        ${TYPE_STYLE[variant]} 
        ${outlinedStyle}
        ${className}
        ${TYPE_BORDER[typeBorder]}
      `.trim()}
      {...buttonProps}
    />
  );
}
