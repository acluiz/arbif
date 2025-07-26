import { Button } from "@/components/Button";

import "./styles.scss";

export const Actions = ({ actions }) => {
  return (
    <div className="actions">
      {actions.map(({ id, type, text, onClick = () => {} }) => (
        <Button
          id={id}
          key={id}
          type={type}
          customClass="actions__button"
          onClick={onClick}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};
