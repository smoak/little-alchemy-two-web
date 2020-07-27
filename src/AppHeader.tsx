import { Button, Header, Heading } from 'grommet';
import { Home } from 'grommet-icons';
import React, { FC } from 'react';

export const AppHeader: FC = () => (
  <Header background="brand">
    <Button icon={<Home />} hoverIndicator />
    <Heading level="3" margin="none">
      Little Alchemy 2
    </Heading>
  </Header>
);
