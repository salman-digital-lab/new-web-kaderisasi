type InputProps = {
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  classes?: string;
}

export default function Input({
  id, type, placeholder, required, classes
}: InputProps ) {

  return (
    <input id={id} type={type} placeholder={placeholder} required={required} className={classes} />
  )
}