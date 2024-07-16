"use client";

import { Default } from "./Default";
import { Currency } from "./Currency";
import { Select } from "./Select";

import { FieldProps } from "../types";

export const Input = ({
  name,
  label,
  placeholder,
  errorMessage,
  type = "default",
  options = [],
  classname,
}: FieldProps) => {
  const INPUT_FIELDS: any = {
    default: <Default name={name} placeholder={placeholder} />,
    currency: <Currency name={name} placeholder={placeholder} />,
    select: <Select name={name} options={options} />,
  };

  return (
    <>
      <fieldset className={`flex flex-col ${classname}`}>
        <label
          htmlFor={name}
          className="text-sm text text-neutral_lighter font-medium"
        >
          {label}
        </label>

        {INPUT_FIELDS[type]}

        <p className="mt-2 text-sm font-medium text-red-500">{errorMessage}</p>
      </fieldset>
    </>
  );
};
