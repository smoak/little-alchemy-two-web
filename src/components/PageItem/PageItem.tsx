import { Box, Page, PageContent } from 'grommet';
import { Suspense } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { Item } from '../Item/Item';

export const PageItem = () => {
  return (
    <>
      <AppHeader />
      <Box background="light-3" flex>
        <Page background="light-3" kind="wide">
          <PageContent pad="medium">
            <Suspense fallback="Loading...">
              <Item />
            </Suspense>
          </PageContent>
        </Page>
      </Box>
    </>
  );
};
