import { Grid } from 'grommet';
import { Item } from '../../data/types';
import { ItemCombinationCard } from '../ItemCombinationCard/ItemCombinationCard';

interface ItemCombinationListProps {
  readonly item: Item;
}

export const ItemCombinationList = ({ item }: ItemCombinationListProps) => {
  if (item.combinations.length === 0) {
    return <div>No combinations</div>;
  }

  return (
    <Grid rows="small" columns={{ count: 'fit', size: 'medium' }} gap="small">
      {item.combinations.map((i) => (
        <ItemCombinationCard key={[i.source, i.target].join(':')} sourceName={i.source} targetName={i.target} />
      ))}
    </Grid>
  );
};
