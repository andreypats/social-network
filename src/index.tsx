import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


    root.render(
        /*<React.StrictMode>*/      /*дважды перересовывается*/
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </>
        /*</React.StrictMode>*/
    );


reportWebVitals();
