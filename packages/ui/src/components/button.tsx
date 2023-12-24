"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-8xl"
    >
      {children}
    </button>
  );
};
