"use client";

import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, error }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-foreground font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default InputField;
