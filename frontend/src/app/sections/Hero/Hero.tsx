import Image from "next/image";

import { LIBRE_BASKERVILLE } from "@/app/fonts";

import { Container } from "@/app/components";
import { Proposal } from "./components/Proposal";

export const Hero = () => {
  return (
    <section className="w-full min-h-screen flex bg-neutral_darker lg:pt-32">
      <Container>
        <div className="flex items-center min-h-screen lg:w-1/2 lg:min-h-0 lg:items-start">
          <div>
            <Image src="/logo.svg" alt="Arbif - Logo" width={220} height={80} />

            <h1 className="max-w-330 mt-10">
              <span className="text-2xl text-neutral_lighter font-normal">
                Facilidade e transparência{" "}
              </span>
              <span
                className={`${LIBRE_BASKERVILLE.className} mt-4 text-4xl font-bold text-primary`}
              >
                para sua empresa crescer
              </span>
            </h1>
          </div>
        </div>

        <div className="lg:w-1/2 flex lg:justify-end">
          <Proposal />
        </div>
      </Container>
    </section>
  );
};
