import { Avatar, Box } from 'grommet';
import React, { FC } from 'react';

const imageUrl = 'https://hints.littlealchemy2.com/img/content-pack/myths-and-monsters/icon.png';

export const MythsIcon: FC = () => (
  <Box direction="row" gap="xxsmall">
    <Avatar src={imageUrl} />
  </Box>
);
