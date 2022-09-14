import React, { FC, MouseEventHandler, AriaAttributes, DOMAttributes } from 'react';
import classNames from 'classnames';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  styleVariant?: 'primary' | 'secondary';
  disabled?: boolean;
  children?: JSX.Element[] | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  attrs?: DOMAttributes<HTMLButtonElement> | AriaAttributes; // TODO: check it
}

const Button: FC<IButtonProps> = (
  {
    type = 'button',
    className,
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
      'button--primary': styleVariant === 'primary',
      'button--secondary': styleVariant === 'secondary',
    },
    className,
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
