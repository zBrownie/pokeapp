import React from 'react';
import { Loading } from '..';

import { Container } from './LoadingPage.styles';

const LoadingPage: React.FC = () => {
  return (
    <Container>
      <Loading />
    </Container>
  );
};

export default LoadingPage;
