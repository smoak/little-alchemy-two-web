import { Box, Button, Header, Heading } from 'grommet';
import { Home } from 'grommet-icons';
import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { itemDisplayName } from '../../data/item';

export const AppHeader: FC = () => {
  const navigate = useNavigate();
  const { name } = useParams<'name'>();
  const homeButtonClickCallback = () => {
    navigate('/');
  };

  const itemName = name ? itemDisplayName(name) : undefined;
  const headingText = itemName ?? 'Little Alchemy 2';

  return (
    <Header background="brand" pad="small">
      <Button icon={<Home />} hoverIndicator onClick={homeButtonClickCallback} />
      <Box fill align="center" justify="start">
        <Heading level="3" margin="none">
          {headingText}
        </Heading>
      </Box>
    </Header>
  );
};
