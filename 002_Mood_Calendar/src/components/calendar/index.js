import React from 'react';
import Week from './week';
import DateHelper from '../../helpers/dates'
import './styles.css';

export default function Calendar(props) {
    const year = new Date().getFullYear();
    
    function createCalendar(month) {
        let w = []
        let allDays = DateHelper.getAllDaysOfMonth(year, month);
       
        for (let i = 0; i < allDays.length; i++) {
            const d = allDays[i];
            
            if (d.getDate() === 1 && d.getDay() !== 0) {
                for (let j = 0; j < d.getDay(); j++) {
                    w.push(0);                
                }                
            }

            w.push(d);
        }

        return w;
    }

    function getTotalWeeks(month) {
        var ww = []
        var allDays = createCalendar(month);

        for (let i = 0; i < (allDays.length / DateHelper.getWeekDays().length); i++) {
            ww.push(i);     
        }

        return ww;
    }


    return (
        <div className="calendar">
            <p className="month"><strong>{DateHelper.getMonth(props.month)}</strong></p>

            <table>
                <thead>
                    <tr>
                    {
                        DateHelper.getWeekDays().map(d => {
                            return (
                                <th className="week" key={d}>{d}</th>
                            );
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    { 
                        getTotalWeeks(props.month).map(week => {
                            return (
                                <Week key={week} week={week} calendar={createCalendar(props.month)}></Week>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}