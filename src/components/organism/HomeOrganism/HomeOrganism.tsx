import React from 'react';
import { ResponsePokeByName, Result } from 'utils/types';

import { Container } from './HomeOrganism.styles';

export interface IHomeOrganism {
  listPokes?: Result[];
  handleSerachPoke: (name: string) => void;
  pokeFind: ResponsePokeByName | undefined;
}
const HomeOrganism: React.FC<IHomeOrganism> = ({
  handleSerachPoke,
  pokeFind,
}) => {
  const [pokeName, setPokeName] = React.useState<string>('');
  return (
    <Container>
      <div>
        <input
          type="text"
          value={pokeName}
          onChange={e => setPokeName(e.target.value)}
        />
        <button
          onClick={() => {
            handleSerachPoke(pokeName);
            setPokeName('');
          }}
        >
          Buscar
        </button>
      </div>
      {pokeFind && (
        <div>
          {pokeFind?.name}
          <div>
            <img src={pokeFind?.sprites?.front_default} alt="" />
            {/* <img src={pokeFind?.sprites?.front_shiny} alt="" /> */}
          </div>
        </div>
      )}
    </Container>
  );
};

export default HomeOrganism;
