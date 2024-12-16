import { Box, Image } from 'grommet';
import { mythsImageUrl } from '../../constants';

type ItemImageProps = {
  readonly imageUrl: string;
  readonly myths: boolean;
};

export const ItemImage = ({ imageUrl, myths }: ItemImageProps) => {
  return (
    <Box height="xxsmall" width="xxsmall" background="image-bg" round="xsmall">
      <Box pad="xxsmall">
        <Image fit="cover" src={imageUrl} alt="" />
      </Box>
      {myths && (
        <Box height="16px" width="16px" style={{ position: 'relative', top: '-40px' }}>
          <Image src={mythsImageUrl} />
        </Box>
      )}
    </Box>
  );
};
