import React from 'react';
import './Suggestion.postcss';

import { Card } from '../../common/Card/Card';

interface ISuggestion {
  title: string;
  category: string;
  commentsCount: number;
  description: string;
  status: string;
  upvotes: number;
}

export const Suggestion = (
  {
    title,
    description,
    category,
    upvotes,
    commentsCount = 0
  }: ISuggestion) => {

  return (
    <Card
      styleVariant='suggestion'>
      <h3 className='title suggestion__title'>{title}</h3>
      <p className='suggestion__desc'>{description}</p>
      <div className='tag suggestion__category'>{category}</div>
      <div className='suggestion__upvotes'>{upvotes}</div>
      {commentsCount && <div className='suggestion__comments'>comm {commentsCount}</div>}
    </Card>
  );
};

