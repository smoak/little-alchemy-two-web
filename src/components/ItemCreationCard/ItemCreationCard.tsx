import { Box, Card, Text } from 'grommet';
import { ItemImage } from '../ItemImage/ItemImage';
import { ItemLink } from '../ItemLink/ItemLink';
import { useAsync } from 'react-use';
import { findById } from '../../data/repos/item';
import { ItemCreationGlimmerCard } from './ItemCreationGlimmerCard';

type ItemCreationCardProps = {
  readonly itemName: string;
  readonly itemImageUrl: string;
  readonly itemMyths: boolean;
  readonly targetName: string;
  readonly sourceName: string;
};

export const ItemCreationCard = ({
  itemImageUrl,
  itemMyths,
  itemName,
  sourceName,
  targetName,
}: ItemCreationCardProps) => {
  const state = useAsync(async () => {
    const source = await findById(sourceName);
    const target = await findById(targetName);

    return { source, target };
  }, [sourceName, targetName]);

  if (state.error != null) {
    return <div>oops {state.error.message}</div>;
  }

  if (state.loading || !state.value) {
    return <ItemCreationGlimmerCard />;
  }

  const { source, target } = state.value;

  return (
    <Card background="white" pad="small" height="small" width="large">
      <Box direction="row" pad="xsmall">
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <ItemImage imageUrl={source.imageUrl} myths={source.myths} />
            <Box pad="xsmall">
              <ItemLink itemName={sourceName}>{source.displayName}</ItemLink>
            </Box>
          </Box>
        </Box>
        <Box pad="small">
          <Box align="center" justify="center" height="small" width="small">
            <Text size="xlarge">+</Text>
          </Box>
        </Box>
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <ItemImage imageUrl={itemImageUrl} myths={itemMyths} />
            <Box pad="xsmall">
              <ItemLink itemName={itemName}>{itemName}</ItemLink>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction="column" pad="xsmall">
        <Box pad="small" direction="row" justify="center" align="center">
          <Box pad="xsmall">
            <Text size="xlarge">=</Text>
          </Box>
          <ItemImage imageUrl={target.imageUrl} myths={target.myths} />
          <Box pad="xsmall">
            <ItemLink itemName={targetName}>{target.displayName}</ItemLink>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
