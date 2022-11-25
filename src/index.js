import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import returnStoreAndPersistor from "./redux/store";
import authentication from 'react-azure-b2c';


const root = ReactDOM.createRoot(document.getElementById('root'));
const { store, persistor } = returnStoreAndPersistor
authentication.initialize({

  instance: 'https://login.microsoftonline.com/tfp/',
  tenant: 'appeddev.onmicrosoft.com',
  signInPolicy: 'B2C_1_dev_auth',
  clientId: '866dbc18-4ece-4221-98be-606b107f9e1c',
  cacheLocation: 'sessionStorage',
  scopes: ["https://appeddev.onmicrosoft.com/866dbc18-4ece-4221-98be-606b107f9e1c/Organisation.Read"],
  redirectUri: 'http://localhost:3000/dashboard/',
  postLogoutRedirectUri: "http://localhost:3000",

});
authentication.run(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter
          // basename={process.env.PUBLIC_URL}
          >
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider >
    </React.StrictMode >
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
