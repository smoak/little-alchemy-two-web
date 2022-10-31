import { Box, Card } from 'grommet';
import Skeleton from 'react-loading-skeleton';

export const ItemCreationGlimmerCard = () => {
  return (
    <Card background="white" pad="xsmall" height="small" width="large">
      <Box direction="row" pad="xsmall">
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <Skeleton circle width={48} height={48} />
            <Box pad="xsmall">
              <Skeleton />
            </Box>
          </Box>
        </Box>
        <Box pad="small">
          <Box align="center" justify="center" height="small" width="small">
            <Skeleton />
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
      <Box direction="column" pad="xsmall">
        <Box pad="small" direction="row" justify="center" align="center">
          <Skeleton circle width={48} height={48} />
          <Box pad="xsmall">
            <Skeleton height={20} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
