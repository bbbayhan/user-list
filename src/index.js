import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from '../src/reducers';

ReactDOM.render(
  <Router>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>  
  </Router>,
  document.getElementById('root')
);

