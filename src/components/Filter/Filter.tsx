import React from "react";

import "./Filter.postcss";
import { Button } from "../common/Button/Button";
import { SvgIcon } from "../common/SvgIcon/SvgIcon";

import { useGetDataListQuery } from "../../features/data-api/data-api-slice";

export const Filter = () => {
  const { data = [], isLoading } = useGetDataListQuery("");
  console.log(data);

  return (
    <div className="filter">
      <div className="filter__counter">
        <SvgIcon name="Lightbulb" />
        {data.length}
        Suggestions
      </div>
    </div>
  );
};
