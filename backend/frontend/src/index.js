import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DisplayContextProvider from './context/DisplayContext';
import AuthContextProvider from './context/AuthContext';
import DestinationContextProvider from './context/DestinationContext';
import PackageContextProvider from './context/PackagesContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DisplayContextProvider>
      <AuthContextProvider>
        <DestinationContextProvider>
          <PackageContextProvider>
            <App />
          </PackageContextProvider>
        </DestinationContextProvider>
      </AuthContextProvider>
    </DisplayContextProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
