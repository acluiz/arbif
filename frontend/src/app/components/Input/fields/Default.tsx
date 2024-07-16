import { InputProps } from "../types";

export const Default = ({ name, placeholder }: InputProps) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="h-12 mt-2 px-3 py-4 bg-transparent text-neutral_lighter placeholder-neutral_light border rounded border-neutral_lighter focus:outline-none focus:border-primary"
    />
  );
};
