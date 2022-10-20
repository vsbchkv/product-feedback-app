import React, { KeyboardEvent, useState } from "react";
import classNames from "classnames";

import "./Select.postcss";

import { Button } from "../Button/Button";
import { SvgIcon } from "../SvgIcon/SvgIcon";

interface ISelectProps {
  title?: string;
  options: string[];
  onItemSelect(value: string): void;
}

export const Select = ({ options, onItemSelect, title }: ISelectProps) => {
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onToggleOptions = () => {
    setIsOptionsOpened(!isOptionsOpened);
  };

  const onSelect = (item: string) => {
    setSelectedOption(item);
    onToggleOptions();
    onItemSelect(item);
  };

  const onKeyDown = (item: string) => (e: KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        onSelect(item);
        break;
      default:
        break;
    }
  };

  const selectClasses = classNames("select", {
    "select--opened": isOptionsOpened,
  });

  const optionsList = options.map((item) => {
    return (
      <li
        key={item}
        className="select__option"
        onClick={() => onSelect(item)}
        onKeyDown={onKeyDown(item)}
        role="option"
        aria-selected={selectedOption === item}
        tabIndex={0}
      >
        {item}
        <SvgIcon name="Checkmark" />
      </li>
    );
  });

  return (
    <div className={selectClasses}>
      <Button
        styleVariant="select-head"
        onClick={onToggleOptions}
        aria-haspopup="listbox"
        aria-expanded={isOptionsOpened}
      >
        {title && <span className="select__title">{title}</span>}
        <span className="select__selected">{selectedOption}</span>
        <SvgIcon name="Angle" />
      </Button>
      <ul className="select__optionlist">{optionsList}</ul>
    </div>
  );
};
