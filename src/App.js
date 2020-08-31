import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'pages/Home';
import WordRelayPage from 'pages/wordRelay/WordRelayPage';
import MultiplicationPage from 'pages/multiplication/MultiplicationPage';
import NumberBaseballPage from 'pages/numberBaseball/NumberBaseballPage';
import ResponseCheckPage from 'pages/responseCheck/ResponseCheckPage';
import RockPaperScissorsPage from 'pages/rockPaperScissors/RockPaperScissorsPage';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/gugudan" component={MultiplicationPage} />
            <Route path="/wordRelay" component={WordRelayPage} />
            <Route path="/numberBaseball" component={NumberBaseballPage} />
            <Route path="/responseCheck" component={ResponseCheckPage} />
            <Route path="/rockPaperScissors" component={RockPaperScissorsPage} />
        </BrowserRouter>
    );
};

export default App;
