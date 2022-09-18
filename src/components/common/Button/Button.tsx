import React, { FC, MouseEventHandler, AriaAttributes, DOMAttributes } from 'react';
import classNames from 'classnames';

import './Button.postcss';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  styleVariant?: 'burger' | 'primary' | 'secondary';
  disabled?: boolean;
  children?: JSX.Element[] | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  attrs?: DOMAttributes<HTMLButtonElement> | AriaAttributes; // TODO: check it
}

const Button: FC<IButtonProps> = (
  {
    type = 'button',
    styleVariant,
    disabled = false,
    children,
    onClick,
    ...attrs

  }: IButtonProps
) => {
  const classes = classNames(
    'button',
    {
      'button--burger': styleVariant === 'burger',
      'button--primary': styleVariant === 'primary',
      'button--secondary': styleVariant === 'secondary',
    },
  );

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

export default Button;
