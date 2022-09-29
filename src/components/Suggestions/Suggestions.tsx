import React, { memo } from "react";
import "./Suggestions.postcss";

import { useGetDataListQuery } from "../../features/data-api/data-api-slice";

import { ISuggestionItem } from "../../types.ts";

import classNames from "classnames";
import { Suggestion } from "./Suggestion/Suggestion";
import { SuggestionsEmpty } from "./SugestionsEmpty/SuggestionsEmpty";

const getSuggestions = (data: ISuggestionItem[]) => {
  if (data.length) {
    const suggestionsList = data.map(
      ({
        id,
        title,
        category,
        comments = [],
        description,
        status,
        upvotes,
      }: ISuggestionItem) => {
        return (
          <li key={id} className="suggestions__item">
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
      }
    );
    return <ul className="suggestions__list">{suggestionsList}</ul>;
  } else {
    return <SuggestionsEmpty />;
  }
};

export const Suggestions = memo(function Suggestions() {
  const { data = [], isLoading } = useGetDataListQuery("");

  const isSuggestionsEmpty: boolean = !data.length && !isLoading;

  const suggestionsClasses = classNames("suggestions", {
    "suggestions--onload": isLoading,
    "suggestions--empty": isSuggestionsEmpty,
  });

  return (
    <main className={suggestionsClasses}>
      {isLoading ? <h2>...Loading</h2> : getSuggestions(data)}
    </main>
  );
});
