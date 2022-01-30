import { Text } from 'components/atoms';
import React from 'react';
import { User } from 'utils/types';

import { Container } from './UsuariosOrgnism.styles';
export interface IUsuariosOrgnism {
  listUsuarios: User[] | undefined;
}
const UsuariosOrgnism: React.FC<IUsuariosOrgnism> = ({ listUsuarios = [] }) => {
  return (
    <Container>
      {listUsuarios?.map(el => (
        <div>
          <Text>{el.name}</Text>
          <ul>
            {el.pokemons?.map(p => (
              <li>{p.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
};

export default UsuariosOrgnism;
