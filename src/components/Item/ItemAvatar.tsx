import { Avatar, Box, Image } from 'grommet';
import { Item } from '../../data/types';
import { mythsImageUrl } from '../../constants';

type ItemAvatarProps = {
  readonly item: Item;
};
export const ItemAvatar = ({ item }: ItemAvatarProps) => {
  if (item.myths) {
    return (
      <Box height="xsmall" width="xsmall" direction="row">
        <Avatar src={item.imageUrl} />
        <Box height="16px" width="16px">
          <Image src={mythsImageUrl} />
        </Box>
      </Box>
    );
  }

  return (
    <Box align="center" height="xxsmall" width="xxsmall">
      <Image src={item.imageUrl} />
    </Box>
  );
};
