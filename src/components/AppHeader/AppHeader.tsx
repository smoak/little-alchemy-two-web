import { Box, Button, Header, Heading } from 'grommet';
import { Home } from 'grommet-icons';
import { useNavigate, useParams } from 'react-router-dom';

export const AppHeader = () => {
  const navigate = useNavigate();
  const { name } = useParams<'name'>();
  const homeButtonClickCallback = () => {
    navigate('/');
  };

  const headingText = name ?? 'Little Alchemy 2';

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
