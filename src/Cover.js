import React from 'react';
import './App.css';
import Menu from './Menu';
import Header from './Header';

function Cover() {
    return (
        <div className="countainer-cover">
            <div className="background-cover">
                <Menu />
                <Header />
                <div className="serf-img"></div>
            </div>
        </div>
    );
}

export default Cover;