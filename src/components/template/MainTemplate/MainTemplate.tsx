import { Text } from 'components/atoms';
import React from 'react';
import { COLORS } from 'utils';

import { Container, AppbarTemplate } from './MainTemplate.styles';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <AppbarTemplate>
        <Text color={COLORS.white} isTitle weight="600">
          Poke
        </Text>
      </AppbarTemplate>
      {children}
    </Container>
  );
};

export default MainTemplate;
