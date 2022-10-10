import { Box, Image } from 'grommet';
import { FC } from 'react';

type ItemImageProps = {
  readonly imageUrl: string;
};

export const ItemImage: FC<ItemImageProps> = ({ imageUrl }) => {
  return (
    <Box height="xxsmall" width="xxsmall" background="image-bg" round="xsmall">
      <Box pad="xxsmall">
        <Image fit="cover" src={imageUrl} />
      </Box>
    </Box>
  );
};
