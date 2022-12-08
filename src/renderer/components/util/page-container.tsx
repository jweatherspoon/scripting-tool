import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import React, { Suspense } from 'react';
import { PageProps } from '../../models/view-info';

export const PageContainer: React.FC<PageProps> = ({ view }: PageProps) => {
  const Page = React.lazy(() => import(`../pages/${view.key}`));
  return (
    <Box>
      <AppBar title={view.title} />
      <Box>
        <Suspense fallback={<div>loading</div>}>
          <Page />
        </Suspense>
      </Box>
    </Box>
  );
};
