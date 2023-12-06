import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/Store';
import Spinner from './views/spinner/Spinner';
import './_mockApis';
import './utils/i18n';
import { FrappeProvider } from "frappe-react-sdk";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <FrappeProvider>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Suspense>
    </Provider>,
  </FrappeProvider>,
)
