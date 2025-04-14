import React from "react";
import "./Card.scss";
import { Text } from "@components/atoms/Text";
import { Button } from "@components/atoms/Button";

export interface CardProps {
  title?: string;
  description?: string;
  shadow?: boolean;
  rounded?: boolean;
  buttonOnClick?: () => void;
  buttonLabel?: string;
  buttonPosition?: "left" | "right" | "center";
  blurred?: boolean;
  borderLess?: boolean;
  align?: "left" | "right" | "center";
  className?: string;
  neonBorder?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  rounded,
  shadow,
  title,
  description,
  buttonOnClick,
  buttonPosition = "left",
  buttonLabel,
  blurred,
  borderLess,
  align = "left",
  neonBorder = false,
  className,
  children,
  onClick,
}) => {
  return (
    <div
      className={`card ${rounded ? "rounded" : ""} ${shadow ? "shadow" : ""} ${
        blurred ? "blurred" : ""
      } ${borderLess ? "borderLess" : ""} ${neonBorder ? "neonBorder" : ""} ${
        className || ""
      }`}
      onClick={onClick}
    >
      {title && (
        <Text
          value={title}
          kind="PARAGRAPH"
          weight="weight_medium"
          size="size_title"
          align={`align_${align}`}
          className="card__title"
        />
      )}
      {description && (
        <Text
          value={description}
          kind="PARAGRAPH"
          weight="weight_medium"
          size="size_normal"
          align={`align_${align}`}
          className="card__description"
        />
      )}
      {children}
      {buttonOnClick && buttonLabel && (
        <div className={`card__button_container align-${buttonPosition}`}>
          <Button label={buttonLabel} onClick={buttonOnClick} />
        </div>
      )}
    </div>
  );
};
