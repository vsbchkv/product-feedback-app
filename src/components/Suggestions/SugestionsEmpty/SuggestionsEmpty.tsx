import React from "react";

import "./SuggestionsEmpty.postcss";
import { Button } from "../../common/Button/Button";
import { SvgIcon } from "../../common/SvgIcon/SvgIcon";

export const SuggestionsEmpty = () => {
  return (
    <main className="suggestions-empty card">
      <SvgIcon name="EmptyPage" />
      <h2 className="title suggestions-empty__title">
        There is no feedback yet.
      </h2>
      <p className="suggestions-empty__desc">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button styleVariant="primary">
        <SvgIcon name="Plus" /> Add Feedback
      </Button>
    </main>
  );
};
