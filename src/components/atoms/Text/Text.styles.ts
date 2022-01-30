import styled from 'styled-components';
import { COLORS } from 'utils';

export interface ITextStyle {
  color?: string;
  weight?: string;
}

export const TextCustom = styled.p<ITextStyle>`
  color: ${({ color }) => color || COLORS.black};
  font-weight: ${({ weight }) => weight || '400'};
`;

export const TitleCustom = styled.h1<ITextStyle>`
  color: ${({ color }) => color || COLORS.black};
  font-weight: ${({ weight }) => weight || '700'};
`;
