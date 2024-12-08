import { Box, Image } from 'grommet';

type ItemImageProps = {
  readonly imageUrl: string;
};

export const ItemImage = ({ imageUrl }: ItemImageProps) => {
  return (
    <Box height="xxsmall" width="xxsmall" background="image-bg" round="xsmall">
      <Box pad="xxsmall">
        <Image fit="cover" src={imageUrl} alt="" />
      </Box>
    </Box>
  );
};
