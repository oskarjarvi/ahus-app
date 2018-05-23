import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Push from 'push.js';

Push.create("Hello!", {
    body: "There´s a new event'!",
    icon: './icon.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});

ReactDOM.render(
 <BrowserRouter>
   <App />
 </BrowserRouter>,
 document.getElementById("root")
);
registerServiceWorker();
