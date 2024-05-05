import { Button, Input } from "@/app/components";

export const Simulation = () => {
  return (
    <>
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
        * O Banco Arbif é meramente fictício, criado com o objetivo de praticar
        conceitos de desenvolvimento de software. Nenhuma informação aqui
        transmitida possui veracidade legal, assim como não condizem com sua
        disponibilidade de crédito no mercado financeiro.
      </p>

      <Button classname="mt-16 py-3 px-12">Continuar</Button>
    </>
  );
};
