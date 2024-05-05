import { LIBRE_BASKERVILLE } from "@/app/fonts";

import { Stepper } from "./Stepper";
import { STEPS } from "../steps";

export const Proposal = () => {
  const currentStep = STEPS["simulation"];

  return (
    <div className="py-8 bg-proposal-bg bg-no-repeat bg-contain bg-bottom lg:w-475 lg:px-6">
      <div className="flex justify-between">
        <h2
          className={`${LIBRE_BASKERVILLE.className} text-2xl text-primary font-bold`}
        >
          {currentStep.title}
        </h2>

        <Stepper activeStepIndex={currentStep.number} />
      </div>

      {currentStep.content}
    </div>
  );
};
