export const Stepper = ({ activeStepIndex }: { activeStepIndex: number }) => {
  const activeClass = "bg-primary text-neutral_dark";
  const nonActiveClass = "bg-neutral_dark text-neutral_lightest";

  return (
    <div className="flex gap-x-2">
      <div
        className={`
          w-6 h-6 rounded-full text-center font-medium 
          ${activeStepIndex === 1 ? activeClass : nonActiveClass}
        `}
      >
        1
      </div>
      <div
        className={`
          w-6 h-6 rounded-full text-center font-medium 
          ${activeStepIndex === 2 ? activeClass : nonActiveClass}
        `}
      >
        2
      </div>
    </div>
  );
};
