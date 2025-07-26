const TOTAL_STEPS = 2;

import "./styles.scss";

export const Heading = ({
  title,
  number,
}: {
  title: string;
  number: number;
}) => {
  return (
    <div className="heading">
      <h2 className="heading__title">{title}</h2>

      <div className="heading__steps">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i).map((num) => (
          <span
            key={`step-${num}`}
            className={`heading__step ${
              num === number && "heading__step--active"
            }`}
          >
            {num + 1}
          </span>
        ))}
      </div>
    </div>
  );
};
