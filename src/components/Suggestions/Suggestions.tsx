import React, { memo } from 'react';
import './Suggestions.postcss';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useGetDataListQuery } from '../../features/data-api/data-api-slice';

import classNames from 'classnames';
import { Suggestion } from './Suggestion/Suggestion';

interface ISuggestionItem {
  id: number;
  title: string;
  category: string;
  comments: [];
  description: string;
  status: string;
  upvotes: number;
}

export const Suggestions = memo(function Suggestions() {
  const { data = [], isLoading } = useGetDataListQuery('productRequests');
  console.log(data);

  const suggestionsClasses = classNames('suggestions', {
    'suggestions--onload': isLoading,
  });

  const list = data.map((
    {
      id,
      title,
      category,
      comments = [],
      description,
      status,
      upvotes
    }: ISuggestionItem) => {
    return (
      <li
        key={id}
        className='suggestions__item'>
        <Suggestion
          title={title}
          description={description}
          category={category}
          status={status}
          upvotes={upvotes}
          commentsCount={comments.length}
        />
      </li>
    );
  });

  return (
    <section className={suggestionsClasses}>
      {
        data.length ?
          <ul className='suggestions__list'>
            {list}
          </ul>
          : <h2>...Loading</h2>
      }
    </section>
  );
});

