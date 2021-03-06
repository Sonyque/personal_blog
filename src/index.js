import {h, render} from 'preact';
import App from './pages/App';

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}

var defaultEl = document.getElementById('default');
defaultEl.innerHTML = '';

render(<App />, document.body);
