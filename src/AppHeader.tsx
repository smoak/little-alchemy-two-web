import { Box, Button, Header, Heading } from 'grommet';
import { Home } from 'grommet-icons';
import React, { FC } from 'react';

export const AppHeader: FC = () => (
  <Header background="brand">
    <Button icon={<Home />} hoverIndicator />
    <Box fill align="center" justify="start">
      <Heading level="3" margin="none">
        Little Alchemy 2
      </Heading>
    </Box>
  </Header>
);
