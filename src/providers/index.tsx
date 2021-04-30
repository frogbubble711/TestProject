import React, { PropsWithChildren } from 'react';
import RouterProvider from './router.provider';
import StoreProvider from './store.provider';

const Providers: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <StoreProvider>
      <RouterProvider>{children}</RouterProvider>
    </StoreProvider>
  );
};

export default Providers;
