import React, { HTMLAttributes, Ref, forwardRef } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  outline?: boolean;
  small?: boolean;
  Icon?: IconType;
}

const Button = ({ outline, small, label, Icon, ...props }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      ref={ref}
      className={`relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70
      ${outline ? 'border-black bg-white text-black' : 'border-orange-500 bg-orange-500 text-white'}
      ${small ? 'border-[1px] py-1 text-sm font-light' : 'border-2 py-3 text-base font-semibold'}
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default forwardRef(Button);
