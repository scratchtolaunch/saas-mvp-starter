import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500
                   focus:border-indigo-500"
      />
    </div>
  );
};
