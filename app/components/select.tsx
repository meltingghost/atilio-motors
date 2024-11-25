import React, { ReactNode } from "react";

interface SelectProps {
  onValueChange: (value: string) => void;
  children: ReactNode;
}

export const Select = ({ onValueChange, children }: SelectProps) => {
  return (
    <div className="relative">
      <select
        className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => onValueChange(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
};

interface SelectItemProps {
  value: string;
  children: ReactNode;
}

export const SelectItem = ({ value, children }: SelectItemProps) => (
  <option value={value}>{children}</option>
);

export const SelectValue: React.FC<{ placeholder?: string }> = ({
  placeholder,
}) => (
  <option value="" disabled>
    {placeholder || "Seleccionar"}
  </option>
);

export const SelectContent: React.FC<{ children: ReactNode }> = ({
  children,
}) => <>{children}</>;
