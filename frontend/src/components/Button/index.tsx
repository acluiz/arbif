import type { ReactNode } from "react";

import "./styles.scss";

type ButtonProps = {
  id: string;
  customClass?: string;
  type: "submit" | "reset" | "button";
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({
  id,
  type = "button",
  children,
  customClass,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      className={`button ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
