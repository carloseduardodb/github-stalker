import React from "react";
import { ButtonHTMLAttributes } from "react";
import { HTMLAttributes } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: buttonProps) => {
  return (
    <button
      className="bg-p-yellow px-5 py-1.5 flex items-center justify-center 
                  flex-row gap-x-2 w-full font-bold uppercase rounded-lg text-lg
                "
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
