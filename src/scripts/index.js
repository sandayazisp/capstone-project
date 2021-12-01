/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* for async await transpile */
import 'regenerator-runtime';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/skip-content';
import './component/app-bar';
import './component/content-footer';
import '../styles/main.css';
import App from './views/app';

const main = document.querySelector('main');
main.setAttribute('id', 'mainContent');

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
