import { Box, Page, PageContent } from 'grommet';
import { FC } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { Item } from '../Item/Item';

export const PageItem: FC = () => {
  return (
    <>
      <AppHeader />
      <Box background="light-3">
        <Page background="light-3" kind="wide" fill>
          <PageContent pad="medium">
            <Item />
          </PageContent>
        </Page>
      </Box>
    </>
  );
};
