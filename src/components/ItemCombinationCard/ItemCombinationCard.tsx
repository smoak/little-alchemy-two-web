import graphql from 'babel-plugin-relay/macro';
import { Box, Card } from 'grommet';
import { FC } from 'react';
import { useFragment } from 'react-relay';
import { ItemImage } from '../ItemImage/ItemImage';
import { ItemLink } from '../ItemLink/ItemLink';
import { ItemCombinationCardComponent_itemCombination$key } from './__generated__/ItemCombinationCardComponent_itemCombination.graphql';

const fragment = graphql`
  fragment ItemCombinationCardComponent_itemCombination on ItemCombination {
    source {
      id
      name
      imageUrl
      myths
    }
    target {
      id
      name
      imageUrl
      myths
    }
  }
`;

type ItemCombinationCardProps = {
  readonly itemCombination: ItemCombinationCardComponent_itemCombination$key;
};

export const ItemCombinationCard: FC<ItemCombinationCardProps> = ({ itemCombination }) => {
  const { source, target } = useFragment(fragment, itemCombination);

  return (
    <Card background="white" pad="small" width="medium">
      <Box direction="row" pad="medium">
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <ItemImage imageUrl={source.imageUrl} />
            <Box pad="xsmall">
              <ItemLink itemName={source.name}>{source.name}</ItemLink>
            </Box>
          </Box>
        </Box>
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <ItemImage imageUrl={target.imageUrl} />
            <Box pad="xsmall">
              <ItemLink itemName={target.name}>{target.name}</ItemLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
