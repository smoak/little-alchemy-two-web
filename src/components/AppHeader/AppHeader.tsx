import { Box, Button, Header, Heading } from 'grommet';
import { Home } from 'grommet-icons';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

export const AppHeader: FC = () => {
  const history = useHistory();
  const homeButtonClickCallback = () => {
    history.push('/');
  };

  return (
    <Header background="brand" pad="small">
      <Button icon={<Home />} hoverIndicator onClick={homeButtonClickCallback} />
      <Box fill align="center" justify="start">
        <Heading level="3" margin="none">
          Little Alchemy 2
        </Heading>
      </Box>
    </Header>
  );
};
