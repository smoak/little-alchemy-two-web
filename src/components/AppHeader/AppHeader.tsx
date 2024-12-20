import { Box, Button, Header, Heading } from 'grommet';
import { Home } from 'grommet-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { displayNameFor } from '../../data/item-fns';

export const AppHeader = () => {
  const navigate = useNavigate();
  const { name } = useParams<'name'>();
  const homeButtonClickCallback = () => {
    navigate('/');
  };

  const headingText = name != null ? displayNameFor(name) : 'Little Alchemy 2';

  return (
    <Header background="brand" pad="small">
      <Button icon={<Home />} hoverIndicator onClick={homeButtonClickCallback} />
      <Box fill align="center" justify="start">
        <Heading level="3" margin="none" color="white">
          {headingText}
        </Heading>
      </Box>
    </Header>
  );
};
