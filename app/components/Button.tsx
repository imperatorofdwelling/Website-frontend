import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="gap-2.5 self-stretch px-4 py-4 mt-6 w-full text-base font-semibold text-white bg-blue-600 rounded-lg min-h-[56px] default-hover-active">
      {text}
    </button>
  );
};

export default Button;
