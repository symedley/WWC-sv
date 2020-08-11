import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path="/" component={App} />
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(<Router />, document.getElementById('root')
);

