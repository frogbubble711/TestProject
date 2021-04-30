import React, { PropsWithChildren } from 'react';
import RouterProvider from '../providers/router.provider';
import StoreProvider from '../providers/store.provider';

export const createProvidersForTests = () => {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
};
