type InputProps = {
  name: string;
  label: string;
  labelClasses?: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  inputClasses?: string;
}

export default function Input({
  name, label, labelClasses, type, placeholder, required, inputClasses
}: InputProps ) {
  return (
    <>
      <label htmlFor={name} className={labelClasses}>{label}</label>
      <input id={name} type={type} placeholder={placeholder} required={required} className={inputClasses} />
    </>
  )
}