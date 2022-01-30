import styled from 'styled-components';
import { COLORS } from 'utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeSubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const HomeSubHeaderItem = styled.div`
  padding: 0.4rem;
  margin: 0.3rem;
  border: 0.1rem solid #00000022;
  border-radius: 1rem;
  transition: 1s;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    background: #232323;
    p {
      color: ${COLORS.white};
    }
  }
`;
