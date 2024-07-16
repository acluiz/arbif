import { SelectProps } from "../types";

export const Select = ({ name, options }: SelectProps) => {
  return (
    <select
      name={name}
      className="h-12 mt-2 px-3 py-3 bg-transparent text-neutral_lighter border rounded border-neutral_lighter focus:outline-none focus:border-primary"
    >
      {options.map(({ label, value }) => (
        <option value={value} className="text-neutral_darker">
          {label}
        </option>
      ))}
    </select>
  );
};
