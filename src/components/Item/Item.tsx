import { Box, Tab, Tabs } from 'grommet';
import { ItemCreationList } from '../ItemCreationList/ItemCreationList';
import { useItemParams } from '../Router/hooks';
import { findById } from '../../data/repos/item';
import { useAsync } from 'react-use';
import { ItemCombinationList } from '../ItemCombinationList/ItemCombinationList';

export const Item = () => {
  const { name } = useItemParams();
  const state = useAsync(async () => {
    return findById(name);
  }, [name]);

  if (state.loading || !state.value) {
    return <>No item found</>;
  }
  const item = state.value;

  return (
    <Tabs>
      <Tab title="Combinations">
        <Box pad="small">
          <ItemCombinationList item={item} />
        </Box>
      </Tab>
      <Tab title="Pair with">
        <Box pad="small">
          <ItemCreationList item={item} />
        </Box>
      </Tab>
    </Tabs>
  );
};
