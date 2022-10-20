import React, { AriaAttributes, FC, SVGProps } from "react";

import "./SvgIcon.postcss";

import { ReactComponent as Angle } from "../../../assets/icons/Angle.svg";
import { ReactComponent as Comment } from "../../../assets/icons/Comment.svg";
import { ReactComponent as EmptyPage } from "../../../assets/icons/EmptyPage.svg";
import { ReactComponent as Plus } from "../../../assets/icons/Plus.svg";
import { ReactComponent as Lightbulb } from "../../../assets/icons/Lightbulb.svg";
import { ReactComponent as Checkmark } from "../../../assets/icons/Checkmark.svg";

const icons = {
  Angle: Angle,
  Comment: Comment,
  EmptyPage: EmptyPage,
  Plus: Plus,
  Lightbulb: Lightbulb,
  Checkmark: Checkmark,
};

interface ISvgIcon {
  name: keyof typeof icons;
  attrs?: SVGProps<SVGSVGElement> | AriaAttributes; // TODO: check it
}

export const SvgIcon: FC<ISvgIcon> = ({ name, ...attrs }: ISvgIcon) => {
  const Icon = icons[name];

  return <Icon className="svg-icon" aria-hidden="true" {...attrs} />;
};
