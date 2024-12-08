import { Box, Page, PageContent } from 'grommet';
import { AppHeader } from '../AppHeader/AppHeader';
import { Home } from '../Home/Home';

export const PageHome = () => {
  return (
    <>
      <AppHeader />
      <Box fill background="light-3">
        <Page kind="wide">
          <PageContent pad="medium">
            <Home />
          </PageContent>
        </Page>
      </Box>
    </>
  );
};
