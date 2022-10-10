import { Box, Page, PageContent } from 'grommet';
import { FC } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { Home } from '../Home/Home';

export const PageHome: FC = () => {
  return (
    <>
      <AppHeader />
      <Box fill>
        <Page kind="wide">
          <PageContent pad="medium">
            <Home />
          </PageContent>
        </Page>
      </Box>
    </>
  );
};
