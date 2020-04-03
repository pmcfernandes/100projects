/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Store from '../../../services/store';
import './styles.css';

export default function Day(props) {
    const [faceState, setFaceState] = useState(0);
    const [date, setDate] = useState(props.date);

    useEffect(() => {
        let data = Store.getState().storage;

        if (date !== 0) {
            for (let i = 0; i < data.length; i++) {
                const d = data[i];

                if (date.toISOString().slice(0, 10) === d.key) {
                    setFaceState(d.value);
                }
            }
        }

    }, [date]);

    function handleClick(e) {
        let faceSelectedState = Store.getState().selectedFace;

        if (faceSelectedState === 0 && faceState === 0) {
            alert('Select face first.');
        } else {
            const action = {
                type: 'updateStore',
                payload: {
                    date: date,
                    faceState: faceState !== 0 ? 0 : faceSelectedState
                }
            }

            if (faceState === 0) {
                setFaceState(faceSelectedState);
            } else {
                setFaceState(0);
            }

            Store.dispatch(action);
        }
    }

    return (
        <td>
            {
                (props.date === 0 ? '' :
                    <div className={"color-" + faceState} onClick={() => handleClick(this)}>
                        <span>{props.date.getDate()}</span>
                    </div>
                )
            }
        </td>
    )
}