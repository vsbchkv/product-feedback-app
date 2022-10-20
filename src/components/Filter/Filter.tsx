import React, { useState } from "react";

import "./Filter.postcss";
import { Button } from "../common/Button/Button";
import { SvgIcon } from "../common/SvgIcon/SvgIcon";
import { Select } from "../common/Select/Select";

import { useGetDataListQuery } from "../../features/data-api/data-api-slice";

export const Filter = () => {
  const { data = [], isLoading } = useGetDataListQuery("");

  const [sortParam, setSortParam] = useState("");

  const sortingParams = ["upvotes", "comments"];
  const optionsNames = () => {
    const options: string[] = [];
    sortingParams.forEach((param) => {
      options.push(`most ${param}`);
      options.push(`less ${param}`);
    });

    return options;
  };

  console.log(data);

  return (
    <div className="filter">
      <div className="filter__counter">
        <SvgIcon name="Lightbulb" />
        {data.length && <span>{data.length}</span>}
        Suggestions
      </div>
      <div className="filter__sorting">
        {" "}
        <Select
          options={optionsNames()}
          title="Sort by :"
          onItemSelect={setSortParam}
        />
      </div>
      <Button styleVariant="extra">
        <SvgIcon name="Plus" />
        Add feedback
      </Button>
    </div>
  );
};
