import { Box, Card } from 'grommet';
import Skeleton from 'react-loading-skeleton';

export const ItemCombinationGlimmerCard = () => {
  return (
    <Card background="white" pad="small" width="medium">
      <Box direction="row" pad="medium">
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <Skeleton circle width={48} height={48} />
            <Box pad="xsmall">
              <Skeleton />
            </Box>
          </Box>
        </Box>
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <Skeleton circle width={48} height={48} />
            <Box pad="xsmall">
              <Skeleton />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
