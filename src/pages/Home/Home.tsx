import { HomeOrganism } from 'components/organism';
import UsuariosOrgnism from 'components/organism/UsuariosOrgnism/UsuariosOrgnism';
import useApp from 'hooks/useApp';
import React, { useCallback, useEffect, useState } from 'react';
import Loading from 'react-loading';
import { GetByName } from 'services/poke';
import { GetAllUsers } from 'services/services';
import { ResponsePokeByName, User } from 'utils/types';
import MainTemplate from '../../components/template/MainTemplate/MainTemplate';

const Home: React.FC = () => {
  const { showAlert, toggleLoading } = useApp();
  const [pokeFind, setPokeFind] = React.useState<
    ResponsePokeByName | undefined
  >();
  const [listaUsuarios, setListaUsuarios] = useState<User[] | undefined>();

  const handleSerachPoke = async (name: string) => {
    toggleLoading(true);
    try {
      const response = await GetByName(name);
      if (response.status !== 200) throw new Error('Erro');

      setPokeFind(response.data);

      toggleLoading();
    } catch (error) {
      toggleLoading();
      console.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      toggleLoading(true);
      try {
        const response = await GetAllUsers();
        console.log(response);
        if (response.status !== 200) throw new Error(response.data.message);

        setListaUsuarios(response.data.users);
        toggleLoading();
      } catch (error) {
        toggleLoading();
        showAlert({
          title: 'Error',
          message: 'Não foi possivel obter usuarios',
        });
      }
    };
    getData();
  }, []);
  return (
    <MainTemplate>
      <HomeOrganism handleSerachPoke={handleSerachPoke} pokeFind={pokeFind} />
      <UsuariosOrgnism listUsuarios={listaUsuarios} />
    </MainTemplate>
  );
};

export default Home;
