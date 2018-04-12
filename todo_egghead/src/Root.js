import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './App';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = ({store}) => (
<Provider store={store}>
    <BrowserRouter>
    	<Route exact path='/:filter?' component={TodoApp} />
    </BrowserRouter>
</Provider>
);

export default Root;