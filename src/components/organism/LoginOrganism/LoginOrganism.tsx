import React from 'react';
import { useForm } from 'react-hook-form';
import {
  LoginContainer,
  Container,
  ButtoLogin,
  InputLogin,
  Row,
} from './LoginOrganism.styles';
import { MdPerson, MdLock } from 'react-icons/md';
import { IRequestLogin } from 'services/services';

export interface ILoginOrganism {
  onSubmit: (data: IRequestLogin) => void;
}
const LoginOrganism: React.FC<ILoginOrganism> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<IRequestLogin>();
  return (
    <Container>
      <LoginContainer onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <MdPerson size="1.3rem" />
          <InputLogin type="text" {...register('name')} />
        </Row>
        <Row>
          <MdLock size="1.3rem" />
          <InputLogin type="password" {...register('password')} />
        </Row>

        <ButtoLogin type="submit">Entrar</ButtoLogin>
      </LoginContainer>
    </Container>
  );
};

export default LoginOrganism;
