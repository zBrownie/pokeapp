import { HomeOrganism } from 'components/organism';
import React, { useCallback } from 'react';
import Loading from 'react-loading';
import { GetByName } from 'services/poke';
import { ILoading, ResponsePokeByName } from 'utils/types';
import MainTemplate from '../../components/template/MainTemplate/MainTemplate';

const Home: React.FC = () => {
  const [loadingPage, setLoadingPage] = React.useState<ILoading>('idle');
  const [pokeFind, setPokeFind] = React.useState<
    ResponsePokeByName | undefined
  >();

  const handleSerachPoke = async (name: string) => {
    setLoadingPage('loading');
    try {
      const response = await GetByName(name);
      if (response.status !== 200) throw new Error('Erro');

      setPokeFind(response.data);

      setLoadingPage('idle');
    } catch (error) {
      setLoadingPage('error');
      console.error(error);
    }
  };
  return (
    <MainTemplate>
      {loadingPage === 'loading' && <Loading />}
      {loadingPage === 'idle' && (
        <HomeOrganism handleSerachPoke={handleSerachPoke} pokeFind={pokeFind} />
      )}
      {loadingPage === 'error' && <h1>Erro</h1>}
    </MainTemplate>
  );
};

export default Home;
