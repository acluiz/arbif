import Image from "next/image";

import { LIBRE_BASKERVILLE } from "@/app/fonts";

import { Container, Input } from "@/app/components";

export const Hero = () => {
  return (
    <section className="w-full h-screen pt-32 bg-neutral_darker">
      <Container>
        <div className="w-1/2 flex justify-center">
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

        <div className="w-1/2 relative flex justify-center">
          <div className="max-w-475 px-6 py-8">
            <h2
              className={`${LIBRE_BASKERVILLE.className} text-2xl text-primary font-bold`}
            >
              Quanto você precisa?
            </h2>

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

            <p className="mt-6 text-sm font-normal text-neutral_light">
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
