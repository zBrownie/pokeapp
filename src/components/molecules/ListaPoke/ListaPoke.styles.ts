import styled from 'styled-components';

export const Lista = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2%;
  gap: 0.5rem;
`;

export const ListaItem = styled.li`
  padding: 1rem;
  border: 0.06rem solid #232323;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    opacity: 0.6;
    transform: scale(1.05);
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;
