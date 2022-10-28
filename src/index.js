import React from 'react';
import ReactDOM from 'react-dom/client';
// with react-dom we pretty much just use createRoot.render
// there are seperated because there are also react for mobile, VR and so on (react-dom is for browser)
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';   
import App from './containers/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <div>
      <App/>
    </div>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
