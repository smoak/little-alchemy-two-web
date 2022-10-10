import { Box, Card, Image } from 'grommet';
import { FC } from 'react';
import { ItemLink } from '../ItemLink/ItemLink';

type ItemCombinationCardProps = {
  readonly source: string;
  readonly target: string;
  readonly sourceImageUrl: string;
  readonly targetImageUrl: string;
};

export const ItemCombinationCard: FC<ItemCombinationCardProps> = ({
  source,
  sourceImageUrl,
  target,
  targetImageUrl,
}) => {
  return (
    <Card background="white" pad="small" width="medium">
      <Box direction="row" pad="medium">
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <Box height="xxsmall" width="xxsmall">
              <Image fit="cover" src={sourceImageUrl} />
            </Box>
            <Box pad="xsmall">
              <ItemLink itemName={source}>{source}</ItemLink>
            </Box>
          </Box>
        </Box>
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <Box height="xxsmall" width="xxsmall">
              <Image fit="cover" src={targetImageUrl} />
            </Box>
            <Box pad="xsmall">
              <ItemLink itemName={target}>{target}</ItemLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
