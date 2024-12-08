import { Box, Page, PageContent } from 'grommet';
import { Suspense } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { Item } from '../Item/Item';

export const PageItem = () => {
  return (
    <Box fill>
      <AppHeader />
      <Page background="light-3" kind="wide" flex direction="column" fill align="center" height="100%">
        <PageContent pad="medium">
          <Suspense fallback="Loading...">
            <Item />
          </Suspense>
        </PageContent>
      </Page>
    </Box>
  );
};
