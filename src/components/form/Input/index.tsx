'use client';

import { useState } from 'react';

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
  const [passwordVisible, setPasswordVisible] = useState(false);

  const passwordViewToggle = () => {
    setPasswordVisible((currentState) => !currentState);
  }

  return (
    <>
      <label htmlFor={name} className={labelClasses}>{label}</label>
      {type === 'password'
        ? <div className="relative">
            <input id={name} type={passwordVisible ? 'text' : 'password'} placeholder={placeholder} required={required} className={inputClasses} />
            <button onClick={passwordViewToggle} title={passwordVisible ? 'Hide password' : 'Show password'} className={`absolute right-4 bottom-3 md:bottom-6 lg:bottom-5 cursor-pointer hover:opacity-50 active:opacity-60 ${passwordVisible ? 'opacity-80' : 'opacity-30'}`}>
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.3431 13.6569 6 12 6C10.3431 6 9 7.3431 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        : <input id={name} type={type} placeholder={placeholder} required={required} className={inputClasses} />}
    </>
  )
}