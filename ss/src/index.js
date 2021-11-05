import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Sample';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<div>
  {/* <h1>this is using render</h1> */}
  <HashRouter>
    <RecoilRoot>
    <Home />
    </RecoilRoot>
  </HashRouter>,
</div>,document.getElementById('root'))
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
