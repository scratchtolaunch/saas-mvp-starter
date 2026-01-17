import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = ({ children, loading, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white text-sm
                 hover:bg-indigo-700 transition
                 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
