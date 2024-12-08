import { Box, Card } from 'grommet';
import { ItemImage } from '../ItemImage/ItemImage';
import { ItemLink } from '../ItemLink/ItemLink';
import { useAsync } from 'react-use';
import { findById } from '../../data/repos/item';
import { ItemCombinationGlimmerCard } from './ItemCombinationGlimmerCard';

type ItemCombinationCardProps = {
  readonly sourceName: string;
  readonly targetName: string;
};

export const ItemCombinationCard = ({ sourceName, targetName }: ItemCombinationCardProps) => {
  const state = useAsync(async () => {
    const source = await findById(sourceName);
    const target = await findById(targetName);

    return { source, target };
  }, [sourceName, targetName]);

  if (state.loading || !state.value) {
    return <ItemCombinationGlimmerCard />;
  }

  const { source, target } = state.value;

  return (
    <Card background="white" pad="small" width="medium">
      <Box direction="row" pad="medium">
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <ItemImage imageUrl={source.imageUrl} />
            <Box pad="xsmall">
              <ItemLink itemName={sourceName}>{source.displayName}</ItemLink>
            </Box>
          </Box>
        </Box>
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <ItemImage imageUrl={target.imageUrl} />
            <Box pad="xsmall">
              <ItemLink itemName={targetName}>{target.displayName}</ItemLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
