import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";

import { IMaskInput } from "react-imask";

import "./styles.scss";

type InputMode =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url";

type InputProps = {
  id: string;
  label: string;
  mask: string;
  name: string;
  placeholder: string;
  type: string;
  control: Control;
  mode: InputMode;
  rules: RegisterOptions;
  onBlur: ({ name, value }: { name: string; value: string }) => void;
  onChange: ({ name, value }: { name: string; value: string }) => void;
};

export const Input = ({
  control,
  id,
  name,
  type = "text",
  mode = "text",
  label,
  placeholder,
  rules,
  mask,
  onBlur = () => {},
  onChange = () => {},
}: InputProps) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({
        field: {
          ref,
          value = "",
          onChange: controlledOnChange,
          onBlur: controlledOnBlur,
        },
        fieldState: { error },
      }) => (
        <fieldset
          className={`
                field
                ${value && ["field--filled"]}
                ${error && ["field--error"]}
              `}
        >
          <label htmlFor={id || name} className="field__label">
            {label}
          </label>

          {mask ? (
            <IMaskInput
              inputRef={ref}
              autoComplete="off"
              className="field__input"
              id={id || name}
              type={type}
              mask={mask}
              value={`${value}`}
              inputMode={mode}
              placeholder={placeholder}
              onAccept={(val) => {
                controlledOnChange(val);
                onChange({ name, value });
              }}
              onBlur={() => {
                controlledOnBlur();
                onBlur({ name, value });
              }}
            />
          ) : (
            <input
              ref={ref}
              autoComplete="off"
              className="field__input"
              id={id || name}
              name={name}
              type={type}
              value={value}
              inputMode={mode}
              placeholder={placeholder}
              onChange={(e) => {
                controlledOnChange(e);
                onChange({ name, value });
              }}
              onBlur={() => {
                controlledOnBlur();
                onBlur({ name, value });
              }}
            />
          )}

          {/* <ErrorMessage text={error?.message} isVisible={error} /> */}
        </fieldset>
      )}
    />
  );
};
