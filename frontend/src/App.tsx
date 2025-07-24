import { useForm } from "react-hook-form";

import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

import "./styles.scss";

function App() {
  const { control } = useForm();

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

        <form className="hero__form">
          <Input
            control={control}
            name="credit_value"
            label="Valor do crédito"
            placeholder="R$20,000"
          />

          <Select
            control={control}
            name="payment_term"
            label="Prazo de pagamento"
            options={[{ label: "", value: "" }]}
          />
        </form>
      </div>
    </section>
  );
}

export default App;
