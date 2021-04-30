import React, { Suspense } from 'react';
import Routes from './Routes';
import Providers from './providers';
import './App.scss';

function App() {
  return (
    <Providers>
      <Suspense fallback={'Loading...'}>
        <Routes />
      </Suspense>
    </Providers>
  );
}

export default App;
