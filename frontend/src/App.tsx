import { Softlead } from "@/steps/Softlead";

import "./styles.scss";

function App() {
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

        <div className="hero__form">
          <Softlead />
        </div>
      </div>
    </section>
  );
}

export default App;
