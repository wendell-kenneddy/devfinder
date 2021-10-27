import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './hooks/user';
import { GlobalStyle } from './theme/GlobalStyle';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
