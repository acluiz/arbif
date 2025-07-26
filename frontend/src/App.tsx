import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

import "./styles.scss";

function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div>
          <img
            width={150}
            height={55}
            src="/images/logo.svg"
            alt="Arbif"
            className="hero__logo"
          />

          <h1 className="hero__title">
            Facilidade e transparência
            <span>para sua empresa crescer</span>
          </h1>
        </div>

        <form className="hero__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="hero__heading">
            <h2 className="hero__stepTitle">Quanto você precisa?</h2>

            <div className="hero__steps">
              <span className="hero__stepNumber">1</span>
              <span className="hero__stepNumber">2</span>
            </div>
          </div>

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
            options={[{ label: "Opção 01", value: "option_1" }]}
          />

          <p className="hero__terms">
            O Banco Arbif é uma entidade fictícia, criada com o objetivo de
            praticar conceitos de desenvolvimento de software. Nenhuma
            informação aqui transmitida possui validade legal, tampouco reflete
            a real disponibilidade de crédito no mercado financeiro.
          </p>

          <Button
            type="submit"
            id="softlead-continue-button"
            customClass="hero__cta"
          >
            Continuar
          </Button>
        </form>
      </div>
    </section>
  );
}

export default App;
