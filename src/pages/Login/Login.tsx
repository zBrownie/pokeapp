import LoginOrganism from 'components/organism/LoginOrganism/LoginOrganism';
import MainTemplate from 'components/template/MainTemplate/MainTemplate';
import { useNavigate } from 'react-router-dom';
import { IRequestLogin, Login as HandleLogin } from 'services/services';
import useApp from 'hooks/useApp';
import { FC, useEffect } from 'react';
// import { Container } from './styles';

const Login: FC = () => {
  const navigate = useNavigate();
  const { toggleLoading, showAlert } = useApp();

  const handleLogin = async (data: IRequestLogin) => {
    toggleLoading(true);
    try {
      const response = await HandleLogin(data);
      console.log(response);
      if (response.status !== 200) throw new Error(response.data.message);

      response.data.user.password = '';

      window.localStorage.setItem(
        'user-poke',
        JSON.stringify(response.data.user)
      );

      if (response.data.sucessso) navigate('/agenda');
      toggleLoading();
    } catch (error: any) {
      console.error({ error });
      showAlert({
        buttons: [
          {
            label: 'Fechar',
            onClick: () => {},
          },
        ],
        message: error.response.data.message,
        title: 'Não foi possivel logar.',
      });
      toggleLoading();
    }
  };

  useEffect(() => {
    const redirectUsuario = () => {
      let data = window.localStorage.getItem('user-poke') || '';
      let user = JSON.parse(data);
      console.log(user);
      if (user['_id']) navigate('/agenda');
    };
    redirectUsuario();
  }, [navigate]);
  return (
    <MainTemplate>
      <LoginOrganism onSubmit={handleLogin} />
    </MainTemplate>
  );
};

export default Login;
