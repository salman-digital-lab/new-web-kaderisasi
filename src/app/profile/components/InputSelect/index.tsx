/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
import React, { ReactNode, HTMLAttributes, Ref } from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value?: string | number | undefined;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, value, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={`
          relative flex items-center text-black h-[25px] pr-[35px] pl-[30px] py-2 rounded-[3px] select-none cursor-pointer focus:bg-primary/10 focus:outline-none
          ${className}`}
        value={value !== undefined ? value.toString() : ''}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemIndicator 
        className="absolute left-0 inline-flex justify-center items-center text-sm w-[25px]"
        >
          <Check />
        </Select.ItemIndicator>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);

interface InputSelectProps {
  data: {
    placeholder?: string;
    kategori: string;
    options: Array<{
      value: string | number;
      display: string;
    }>;
  };
  className?: string;
}

// export default function InputSelect({ data }: { data: { placeholder?: string; kategori: string; options: Array<{ value: string | number; display: string; }> }}) {
// export default function InputSelect({ data }: { data: { placeholder?: string; kategori: string; options: Array<{ value: string | number; display: string; }> }}) {
const InputSelect: React.FC<InputSelectProps> = ({ data, className }) => {
  return (
    <Select.Root>
    <Select.Trigger
      className={`inline-flex justify-between items-center text-black p-2 border-2 border-primary rounded-md focus:outline-none focus:border-primary/30 ${className}`}
      aria-label={data.kategori}
    >
      <Select.Value placeholder={data.placeholder} />
      <Select.Icon>
        <ChevronDown />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden z-10 bg-white border-2 border-gray-500/20 rounded-md shadow-lg">
        <Select.ScrollUpButton className="flex justify-center items-center  h-[25px] bg-white text-black cursor-default">
          <ChevronUp />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-2">
          {data.options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.display}
            </SelectItem>
          ))}
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-black cursor-default">
          <ChevronDown />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
  )
}

export default InputSelect;