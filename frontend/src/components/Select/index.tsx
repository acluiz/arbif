import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";

import "./styles.scss";

type OptionProps = { label: string; value: string };

type SelectProps = {
  id?: string;
  label: string;
  name: string;
  options: OptionProps[];
  control: Control;
  rules?: RegisterOptions;
};

export const Select = ({
  control,
  name,
  label,
  rules,
  options,
}: SelectProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue=""
      render={({
        field: { ref, value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <fieldset className={`select ${error && "select--error"}`}>
          <label htmlFor={name} className="select__label">
            {label}
          </label>

          <select
            id={name}
            value={value ?? ""}
            className={`select__input ${value && ["select__input--filled"]}`}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          >
            <option value="" disabled>
              Escolha uma opção:
            </option>

            {options.map(({ label, value }: OptionProps) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </fieldset>
      )}
    />
  );
};
