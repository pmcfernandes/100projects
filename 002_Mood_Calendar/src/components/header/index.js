import React from 'react';

import './styles.css';

export default function Header() {
    function getYear() {
        var d = new Date();
        return d.getFullYear();
    }

    return (
        <header>
            <h1>{getYear()} Mood Calendar</h1>
            <p>color each day depending on what your mood was / is</p>            
        </header>
    );
}