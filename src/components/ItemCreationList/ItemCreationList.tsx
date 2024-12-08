import { Box, Grid } from 'grommet';
import { ItemCreationCard } from '../ItemCreationCard/ItemCreationCard';
import { Item } from '../../data/types';

type ItemCreationListProps = {
  readonly item: Item;
};

export const ItemCreationList = ({ item }: ItemCreationListProps) => {
  if (item.creates.length === 0) {
    return <Box pad="medium">This item does not create anything</Box>;
  }

  return (
    <Grid rows="small" columns={{ count: 'fit', size: 'medium' }} gap="small" alignSelf="center">
      {item.creates.map((i) => (
        <ItemCreationCard
          key={[i.source, i.target].join(':')}
          itemImageUrl={item.imageUrl}
          itemName={item.displayName}
          sourceName={i.source}
          targetName={i.target}
        />
      ))}
    </Grid>
  );
};
