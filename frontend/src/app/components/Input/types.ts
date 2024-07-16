export interface OptionProps {
  label: string;
  value: number;
}

export interface SelectProps {
  name: string;
  options: OptionProps[];
}

export interface InputProps {
  name: string;
  placeholder: string;
}

export interface FieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  errorMessage?: string;
  classname?: string;
  options?: OptionProps[];
}
