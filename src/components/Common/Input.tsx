import { InputHTMLAttributes, forwardRef } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  label: string;
  id: string;
}

const Input = ({ id, formatPrice, label, register, required, errors }: InputProps) => {
  return (
    <div className="relative w-full">
      {formatPrice && <span className="absolute left-2 top-5 text-neutral-700">￦</span>}
      <input
        {...register(id, { required })}
        className={`w-full rounded-md bg-white p-4 pt-6 font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70 
        ${formatPrice ? 'pl-9' : 'pl-4'}
        ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
      />
      <label
        className={`absolute top-5 z-10 origin-[0] -translate-y-3 transform text-base duration-150
      ${formatPrice ? 'left-9' : 'left-4'}
      peer-placeholder-shown:translate-y-0
      peer-placeholder-shown:scale-100
      peer-focus:-translate-y-4
      peer-focus:scale-75
      ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default forwardRef(Input);
