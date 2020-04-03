import React from 'react';
import Store from '../../services/store';

import './styles.css';
import '../../assets/css/fontello.css';

export default function Faces() {

    function handleFaceClick(state) {
        const action = {
            type: 'changeState',
            payload: {
                newState: state
            }
        };

        Store.dispatch(action);
    }

    return (
        <div className="facesSelector">
            <p>Select mood:</p>
            <div>
                <i className="icon-emo-happy color-gray" onClick={() => handleFaceClick(1)}></i>
                <i className="icon-emo-wink color-green" onClick={() => handleFaceClick(2)}></i>
                <i className="icon-emo-wink2 color-blue" onClick={() => handleFaceClick(3)}></i>
                <i className="icon-emo-unhappy color-yellow" onClick={() => handleFaceClick(4)}></i>
                <i className="icon-emo-sleep color-red" onClick={() => handleFaceClick(5)}></i>
            </div>
            <p>then click on the circles below</p>
        </div>
    );
}