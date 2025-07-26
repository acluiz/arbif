import { useForm } from "react-hook-form";

import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Step } from "@/components/Step";

import { PAYMENT_TERMS } from "./constants";

import "./styles.scss";

export const Softlead = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <>
      <Step.Heading title="Quanto você precisa?" number={0} />

      <form className="softlead__form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          type="text"
          id="credit_value"
          name="credit_value"
          label="Valor do crédito"
          placeholder="R$20,000"
        />

        <Select
          control={control}
          name="payment_term"
          label="Prazo de pagamento"
          options={PAYMENT_TERMS}
        />

        <p className="softlead__terms">
          O Banco Arbif é uma entidade fictícia, criada com o objetivo de
          praticar conceitos de desenvolvimento de software. Nenhuma informação
          aqui transmitida possui validade legal, tampouco reflete a real
          disponibilidade de crédito no mercado financeiro.
        </p>
      </form>

      <Step.Actions
        actions={[
          {
            id: "softlead-continue-button",
            type: "submit",
            text: "Continuar",
          },
        ]}
      />
    </>
  );
};
