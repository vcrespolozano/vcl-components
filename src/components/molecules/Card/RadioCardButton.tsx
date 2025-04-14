import React from "react";
import { Card, CardProps } from "./index";

export interface RadioButtonCardProps extends CardProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButtonCard: React.FC<
  React.PropsWithChildren<RadioButtonCardProps>
> = ({ name, value, checked, onChange, ...cardProps }) => {
  const handleClick = () => {
    onChange({
      target: { name, value, checked: true },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Card
      {...cardProps}
      className={`radio-card ${cardProps.className || ""} ${
        checked ? "checked" : ""
      }`}
      onClick={handleClick}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {cardProps.children}
    </Card>
  );
};
