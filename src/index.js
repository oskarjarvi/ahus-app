import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Push from 'push.js';

<<<<<<< Updated upstream
Push.create("Hello!", {
    body: "There´s a new event'!",
    icon: './icon.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
=======
Push.create("Hello world!", {
  body: "How's it hangin'?",
  timeout: 4000,
  onClick: function () {
    window.focus();
    this.close();
  }
>>>>>>> Stashed changes
});

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
