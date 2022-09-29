import React from "react";
import "./Suggestion.postcss";

import { Card } from "../../common/Card/Card";
import { SvgIcon } from "../../common/SvgIcon/SvgIcon";

interface ISuggestion {
  title: string;
  category: string;
  commentsCount: number;
  description: string;
  status: string;
  upvotes: number;
}

export const Suggestion = ({
  title,
  description,
  category,
  upvotes,
  commentsCount = 0,
}: ISuggestion) => {
  return (
    <Card styleVariant="suggestion">
      <h2 className="title suggestion__title">{title}</h2>
      <p className="suggestion__desc">{description}</p>
      <div className="tag suggestion__category">{category}</div>
      <div className="suggestion__upvotes">
        <SvgIcon name="Angle" />
        {upvotes}
      </div>
      {!!commentsCount && (
        <div className="suggestion__comments">
          <SvgIcon name="Comment" />
          {commentsCount}
        </div>
      )}
    </Card>
  );
};
