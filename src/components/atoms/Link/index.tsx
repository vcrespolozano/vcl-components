import React from "react";
import "./Link.scss";

export interface LinkProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  title?: string;
}

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({
  href,
  onClick,
  className,
  target = "_self",
  rel,
  title,
  children,
}) => {
  return (
    <a
      href={href || "#"}
      onClick={onClick}
      className={`link ${className || ""}`}
      target={target}
      rel={rel || ""}
      title={title || ""}
    >
      {children}
    </a>
  );
};
