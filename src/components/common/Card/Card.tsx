import React from "react";
import classNames from "classnames";

import "./Card.postcss";

interface ICardProps {
  children: JSX.Element[] | React.ReactNode;
  styleVariant?: "suggestion";
}

export const Card = ({ children, styleVariant }: ICardProps) => {
  const cardClasses = classNames("card", {
    suggestion: styleVariant === "suggestion",
  });

  return <article className={cardClasses}>{children}</article>;
};
