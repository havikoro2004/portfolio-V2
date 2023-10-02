import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <GoogleReCaptchaProvider
    reCaptchaKey="6LdmgD0oAAAAAJMuFNz6jl5O3mpy1iNSXWX31aDJ"
    scriptProps={{
      async: false, // optional, default to false,
      defer: false, // optional, default to false
      appendTo: 'head', // optional, default to "head", can be "head" or "body",
      nonce: undefined // optional, default undefined
    }}
  >
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </GoogleReCaptchaProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
