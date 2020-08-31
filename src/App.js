import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import WordRelayPage from './pages/wordRelay/WordRelayPage';
import MultiplicationPage from './pages/multiplication/MultiplicationPage';
import NumberBaseballPage from './pages/numberBaseball/NumberBaseballPage';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/gugudan" component={MultiplicationPage} />
            <Route path="/wordRelay" component={WordRelayPage} />
            <Route path="/numberBaseball" component={NumberBaseballPage} />
        </BrowserRouter>
    );
};

export default App;
