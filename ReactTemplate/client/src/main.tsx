import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from './views/root';
import { BrowserRouter } from 'react-router-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

(async () => {
  if (process.env.NODE_ENV === 'production') {
    OfflinePluginRuntime.install();
  }

  const mountNode = document.getElementById('root');
  if (!mountNode) return;


  ReactDOM.render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>,
    mountNode,
  );
})();
