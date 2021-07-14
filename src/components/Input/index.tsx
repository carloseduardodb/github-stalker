import React, { InputHTMLAttributes } from "react";

type errorProps = {
  active: Boolean;
  message: string;
};

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: errorProps;
}

const Input: React.FC<inputProps> = ({ error, ...rest }) => {
  return (
    <div className="bg-white px-3 py-1.5 flex rounded-lg w-full items-center">
      <input className="w-full text-lg focus:outline-none" {...rest} />
      {error.active && (
        <p className="text-red-700 min-w-max px-4 py-0.5 text-xs">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
