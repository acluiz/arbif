import Image from "next/image";

import { LIBRE_BASKERVILLE } from "@/app/fonts";

import { Container, Input } from "@/app/components";

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

        <div className="lg:w-1/2 relative flex lg:justify-end">
          <div className="px-6 py-8 bg-proposal-bg bg-no-repeat bg-contain bg-bottom lg:max-w-475">
            <div className="flex justify-between">
              <h2
                className={`${LIBRE_BASKERVILLE.className} text-2xl text-primary font-bold`}
              >
                Quanto você precisa?
              </h2>

              <div className="flex gap-x-2">
                <div className="w-6 h-6 bg-primary rounded-full text-center text-neutral_dark font-medium">
                  1
                </div>
                <div className="w-6 h-6 bg-neutral_dark rounded-full text-center text-neutral_lightest font-medium">
                  2
                </div>
              </div>
            </div>

            <form className="mt-10">
              <Input
                name="credit_value"
                label="Valor do crédito"
                placeholder="R$ 50.000,00"
              />

              <Input
                name="payment_term"
                label="Prazo de pagamento"
                placeholder="6 meses"
                classname="mt-4"
              />
            </form>

            <p className="mt-6 text-xs font-normal text-neutral_light lg:text-sm">
              * O Banco Arbif é meramente fictício, criado com o objetivo de
              praticar conceitos de desenvolvimento de software. Nenhuma
              informação aqui transmitida possui veracidade legal, assim como
              não condizem com sua disponibilidade de crédito no mercado
              financeiro.
            </p>

            <button className="mt-16 py-3 px-12 bg-primary rounded-lg text-neutral_dark font-semibold">
              Continuar
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
