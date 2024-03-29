import graphql from 'babel-plugin-relay/macro';
import { Box, Card, Text } from 'grommet';
import { FC } from 'react';
import { useFragment } from 'react-relay';
import { itemDisplayName } from '../../data/item';
import { ItemImage } from '../ItemImage/ItemImage';
import { ItemLink } from '../ItemLink/ItemLink';
import { ItemCreationCardComponent_itemCombination$key } from './__generated__/ItemCreationCardComponent_itemCombination.graphql';

const fragment = graphql`
  fragment ItemCreationCardComponent_itemCombination on ItemCombination {
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

type ItemCreationCardProps = {
  readonly itemCombination: ItemCreationCardComponent_itemCombination$key;
  readonly itemImageUrl: string;
  readonly itemName: string;
};

export const ItemCreationCard: FC<ItemCreationCardProps> = ({ itemCombination, itemImageUrl, itemName }) => {
  const { source, target } = useFragment(fragment, itemCombination);
  const sourceName = itemDisplayName(source.name);
  const targetName = itemDisplayName(target.name);

  return (
    <Card background="white" pad="xsmall" height="small" width="large">
      <Box direction="row" pad="xsmall">
        <Box pad="small">
          <Box align="center" height="small" width="small">
            <ItemImage imageUrl={source.imageUrl} />
            <Box pad="xsmall">
              <ItemLink itemName={source.name}>{sourceName}</ItemLink>
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
            <ItemImage imageUrl={itemImageUrl} />
            <Box pad="xsmall">
              <ItemLink itemName={itemName}>{itemDisplayName(itemName)}</ItemLink>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction="column" pad="xsmall">
        <Box pad="small" direction="row" justify="center" align="center">
          <Box pad="xsmall">
            <Text size="xlarge">=</Text>
          </Box>
          <ItemImage imageUrl={target.imageUrl} />
          <Box pad="xsmall">
            <ItemLink itemName={target.name}>{targetName}</ItemLink>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
