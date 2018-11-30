import React from 'react';
import ReactDOM from 'react-dom';
import { createProvider } from './maze';
import App from './App';
import AnotherComponent from './AnotherComponent';
import './index.css';

const AppProvider = createProvider({
  users: new Array(3).fill(0).map((_, index) => ({
    id: index + 1,
    name: `Vlad ${index + 1}`
  })),
  githubUsers: []
});

ReactDOM.render(
  <AppProvider>
    <App style={{ marginBottom: '2rem' }} />
    <AnotherComponent />
  </AppProvider>,
  document.getElementById('root')
);
