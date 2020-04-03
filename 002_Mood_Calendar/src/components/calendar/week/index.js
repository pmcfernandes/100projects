import React from 'react';
import Day from '../day';
import DateHelper from '../../../helpers/dates';


export default function Week(props) {
    let daysInWeek = DateHelper.getWeekDays().length;

    return (
        <tr>
            {
                (props.calendar || []).slice(props.week * daysInWeek, (props.week * daysInWeek) + daysInWeek)
                    .map((d, index) => {
                        return (
                            <Day key={index} date={d} />
                        );
                    })
            }
        </tr>
    )
}