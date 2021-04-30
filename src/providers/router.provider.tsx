import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

const RouterProvider: React.FC = ({ children }) => {
  return <Router history={createBrowserHistory()}>{children}</Router>;
};

export default RouterProvider;
