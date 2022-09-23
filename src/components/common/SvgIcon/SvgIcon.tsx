import React from 'react';

import { ReactComponent as Angle } from '../../../assets/icons/Angle.svg';

const icons = {
  Angle: <Angle />
};

interface ISvgIcon {
  name: keyof typeof icons;
}

export const SvgIcon = ({name}: ISvgIcon) => {
  return (
    icons[name]
  );
};
