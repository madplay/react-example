import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import WordRelayPage from './pages/WordRelayPage';
import Multiplication from './pages/Multiplication';
import NumberBaseballPage from './pages/NumberBaseballPage';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/gugudan" component={Multiplication} />
            <Route path="/wordRelay" component={WordRelayPage} />
            <Route path="/numberBaseball" component={NumberBaseballPage} />
        </BrowserRouter>
    );
};

export default App;
