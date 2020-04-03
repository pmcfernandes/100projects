import React from 'react';

import Header from '../../components/header';
import Faces from '../../components/faces';
import Calendar from '../../components/calendar';

import './styles.css';

export default function Home() {
    function getMonths() {
        var months = [];
        for (let i = 0; i < 12; i++) {
            months.push(i+1)
        }

        return months;
    }

    return (
        <div>
            <Header />

            <section>
                <Faces />
            { 
                getMonths().map((m) => {
                    return (
                        <Calendar key={m} month={m} />
                    );
                })
            }
            </section>
        </div>
    );
}