import React, {
  AriaAttributes,
  DOMAttributes,
  FC,
  MouseEventHandler,
} from "react";
import classNames from "classnames";

import "./Button.postcss";

interface IButtonProps {
  type?: "button" | "submit" | "reset";
  styleVariant?: "burger" | "primary" | "accent" | "extra" | "danger";
  disabled?: boolean;
  children?: JSX.Element[] | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  attrs?: DOMAttributes<HTMLButtonElement> | AriaAttributes; // TODO: check it
}

export const Button: FC<IButtonProps> = ({
  type = "button",
  styleVariant,
  disabled = false,
  children,
  onClick,
  ...attrs
}: IButtonProps) => {
  const classes = classNames("button", {
    "button--burger": styleVariant === "burger",
    "button--primary": styleVariant === "primary",
    "button--accent": styleVariant === "accent",
    "button--extra": styleVariant === "extra",
    "button--danger": styleVariant === "danger",
  });

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};
