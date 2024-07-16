"use client";

import CurrencyInput from "react-currency-input-field";

import { InputProps } from "../types";

export const Currency = ({ name, placeholder }: InputProps) => {
  return (
    <CurrencyInput
      prefix="R$ "
      decimalSeparator=","
      decimalsLimit={2}
      decimalScale={2}
      allowNegativeValue={false}
      name={name}
      placeholder={placeholder}
      className="h-12 mt-2 px-3 py-4 bg-transparent text-neutral_lighter placeholder-neutral_light border rounded border-neutral_lighter focus:outline-none focus:border-primary"
    />
  );
};
