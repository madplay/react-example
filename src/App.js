import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import WordRelayPage from './pages/WordRelayPage';
import Multiplication from './pages/Multiplication';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/gugudan" component={Multiplication} />
            <Route path="/wordRelay" component={WordRelayPage} />
        </BrowserRouter>
    );
};

export default App;
