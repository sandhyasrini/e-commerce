import React from "react";
import ReactDOM from "react-dom";
import App from '../src/routes'
import store from '../src/store/store'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root'))