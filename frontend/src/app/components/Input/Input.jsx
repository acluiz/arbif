export const Input = ({ name, label, placeholder, classname }) => {
  return (
    <fieldset className={`flex flex-col ${classname}`}>
      <label
        htmlFor="credit_value"
        className="text-sm text text-neutral_lighter font-medium"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="h-12 mt-2 px-3 py-4 bg-transparent text-neutral_lighter border rounded border-neutral_lighter focus:outline-none focus:border-primary"
      />
    </fieldset>
  );
};
