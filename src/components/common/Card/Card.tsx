import React from 'react';
import classNames from 'classnames';

import './Card.postcss';

interface ICardProps {
  children: JSX.Element[] | React.ReactNode;
}

const Card = ({ children }: ICardProps) => {

  const cardClasses = classNames('card', {
    // 'header__button--active': menuOpened,
  });

  return (
    <article
      className={cardClasses}
    >
      {children}
    </article>
  );
};

export default Card;


