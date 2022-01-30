import { Text } from 'components/atoms';
import React from 'react';
import { Result } from 'utils/types';

import { Lista, ListaItem, PaginationContainer } from './ListaPoke.styles';
export interface IListaPoke {
  listPokes: Result[];
}
const ListaPoke: React.FC<IListaPoke> = ({ listPokes }) => {
  return (
    <>
      <Lista>
        {listPokes?.map(el => (
          <ListaItem>
            <Text>{el.name}</Text>
          </ListaItem>
        ))}
      </Lista>
      <PaginationContainer>#Pagination#</PaginationContainer>
    </>
  );
};

export default ListaPoke;
