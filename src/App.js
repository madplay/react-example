import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Multiplication from './pages/Multiplication';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/gugudan" component={Multiplication} />
        </BrowserRouter>
    );
};

export default App;
