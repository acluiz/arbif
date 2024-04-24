import Image from "next/image";

import { LIBRE_BASKERVILLE } from "@/app/fonts";

import { Container } from "@/app/components";

export const Hero = () => {
  return (
    <section className="w-full h-screen bg-neutral_darker">
      <Container>
        <div className="w-1/2 flex justify-center items-center">
          <div>
            <Image src="/logo.svg" alt="Arbif - Logo" width={220} height={80} />

            <h1 className="max-w-330 mt-10">
              <span className="text-2xl font-normal">
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

        <div className="w-1/2 relative flex justify-center items-center before:content-[''] before:w-full before:h-4/5 before:bg-neutral_dark before:absolute before:bottom-0 before:rounded-t-full">
          <div className="z-0 p-6">
            <h2
              className={`${LIBRE_BASKERVILLE.className} text-2xl font-bold text-primary`}
            >
              Quanto você precisa?
            </h2>

            <p className="mt-6 text-sm font-normal text-neutral_light">
              * O Banco Arbif é meramente fictício, criado com o objetivo de
              praticar conceitos de desenvolvimento de software. Nenhuma
              informação aqui transmitida possui veracidade legal, assim como
              não condizem com sua disponibilidade de crédito no mercado
              financeiro.
            </p>

            <button className="mt-16 py-3 px-12 bg-primary rounded-lg font-semibold text-neutral_dark">
              Continuar
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
