export const Container = ({ children }) => {
  return (
    <div className="h-full max-w-screen-xl my-0 mx-auto px-7 relative flex">
      {children}
    </div>
  );
};
