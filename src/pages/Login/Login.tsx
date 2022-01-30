import MainTemplate from 'components/template/MainTemplate/MainTemplate';
import React from 'react';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <MainTemplate>
      <input type="text" />
      <input type="text" />
      <button>Entrar</button>
    </MainTemplate>
  );
};

export default Login;
