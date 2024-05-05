import { Button, Input } from "@/app/components";

export const Softlead = () => {
  return (
    <>
      <form className="mt-10">
        <Input name="cnpj" label="CNPJ" placeholder="XX.XXX.XXX/0001-XX" />

        <Input
          name="full_name"
          label="Seu nome completo"
          placeholder="Lorem Ipsum"
          classname="mt-4"
        />

        <Input
          name="cpf"
          label="CPF"
          placeholder="XXX.XXX.XXX-XX"
          classname="mt-4"
        />

        <Input
          name="email"
          label="E-mail"
          placeholder="example@email.com"
          classname="mt-4"
        />

        <Input
          name="phone"
          label="Celular"
          placeholder="DDD + 9XXXX-YYYY"
          classname="mt-4"
        />

        <Input
          name="annual_revenue"
          label="Faturamento anual"
          placeholder="R$50.000.000,00"
          classname="mt-4"
        />
      </form>

      <Button classname="mt-16 py-3 px-12">Simular</Button>
    </>
  );
};
