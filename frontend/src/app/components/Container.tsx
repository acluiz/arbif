import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full max-w-6xl mt-auto mb-0 mx-auto px-6 relative flex flex-col lg:flex-row">
      {children}
    </div>
  );
};
