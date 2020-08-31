import React from 'react';
import { Link } from 'react-router-dom';

const PageLink = ({ title, link }) => {
    return (
        <li>
            <Link to={link}>{title}</Link>
        </li>
    );
};

const Home = () => {
    return (
        <div>
            <ul>
                <PageLink title={'구구단'} link={'/gugudan'} />
                <PageLink title={'끝말잇기'} link={'/wordRelay'} />
                <PageLink title={'숫자야구'} link={'/numberBaseball'} />
                <PageLink title={'성능체크'} link={'/responseCheck'} />
            </ul>
        </div>
    );
};

export default Home;
