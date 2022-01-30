import React from 'react';

import { ITextStyle, TextCustom, TitleCustom } from './Text.styles';

export interface IText extends ITextStyle {
  isTitle?: boolean;
}
const Text: React.FC<IText> = ({
  isTitle = false,
  children,
  color,
  weight,
}) => {
  return isTitle ? (
    <TitleCustom color={color} weight={weight}>
      {children}
    </TitleCustom>
  ) : (
    <TextCustom color={color} weight={weight}>
      {children}
    </TextCustom>
  );
};

export default Text;
