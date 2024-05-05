import { ReactNode } from "react";

export const Button = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname: string;
}) => {
  return (
    <button
      className={`bg-primary rounded-lg text-neutral_dark font-semibold ${classname}`}
    >
      {children}
    </button>
  );
};
