import { Avatar, Box } from 'grommet';

const imageUrl = 'https://hints.littlealchemy2.com/img/content-pack/myths-and-monsters/icon.png';

export const MythsIcon = () => (
  <Box direction="row" gap="xxsmall">
    <Avatar src={imageUrl} />
  </Box>
);
