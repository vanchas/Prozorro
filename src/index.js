import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './fonts/Fonts/Fonts/Roboto-Regular.ttf';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import PWAPrompt from 'react-ios-pwa-prompt';
import InstallPWA from './pwa';

const root = document.getElementById("root");

if (root.hasChildNodes()) {
  ReactDOM.hydrate(
    // <React.StrictMode>
    <BrowserRouter>
      <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
      <InstallPWA />

      <App />
    </BrowserRouter>,
    // </React.StrictMode>,
    root);
} else {
  ReactDOM.render(
    // <React.StrictMode>
    <BrowserRouter>
      <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
      <InstallPWA />

      <App />
    </BrowserRouter>,
    // </React.StrictMode>,
    root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
