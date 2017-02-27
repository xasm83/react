import React from "react";
import {render} from "react-dom";
import TestLabel from "./label";


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from "./redux/application";
import RangeReducer from "./redux/reducers"



let store = createStore(RangeReducer,{rangeValue:"5"})
render(
<Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('reduxContainer')
);



const containerEl = document.getElementById("container");
render(
  <TestLabel name="test name"/>,
  containerEl
);