import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ModalProvider } from "react-modal-hook";

ReactDOM.render(
    <ModalProvider>
         <App />
    </ModalProvider>,document.getElementById('root'));
registerServiceWorker();
