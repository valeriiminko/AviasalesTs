import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {store} from './redux/store/store';
import { Provider } from 'react-redux'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Filter from './components/Filter/Filter';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Routes> */}
        {/* <Route path='/' element={<App />}>
          <Route path='/filters' element={<Filter isActive={isActive} setActive={setActive}/>}/>
        </Route>
      </Routes> */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

