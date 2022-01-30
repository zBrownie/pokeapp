import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20rem;
  height: auto;
`;

export const InputLogin = styled.input`
  border: none;
  border-bottom: 0.1rem solid #00000033;
  padding: 4px 8px;
  margin: 0.5rem auto;
  background: #fafafa;
  margin-left: 0.5rem;
`;
export const ButtoLogin = styled.button`
  border: none;
  background: #232323;
  color: #fafafa;
  border-radius: 0.5rem;
  width: 100%;
  padding: 4px 8px;
  margin-top: 2rem;
  transition: 0.5s;
  cursor: pointer;
  max-width: 15rem;
  :hover {
    opacity: 0.4;
    transform: scale(1.05);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
