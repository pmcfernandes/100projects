import { combineReducers, createStore } from 'redux';

const allReducers = combineReducers({
    selectedFace: faceSelectorReducer,
    storage: storageReducer
});

function faceSelectorReducer(state = 0, { type, payload }) {
    switch (type) {
        case 'changeState':
            return payload.newState;
        default:
            return state;
    }
}

function storageReducer(state = [], { type, payload }) {
    let d = localStorage.getItem('calendar') || '[]';

    if (type === 'updateStore') {
        return updateStorage(JSON.parse(d), payload.date, payload.faceState);
    } else {
        return JSON.parse(d);
    }
}

function updateStorage(state, dateToCompare, faceState) {
    for (let i = 0; i < state.length; i++) {
        const d = state[i];

        if (d.key === dateToCompare.toISOString().slice(0, 10)) {
            state.splice(i, 1);
            break;
        }
    }

    state.push({
        key: dateToCompare.toISOString().slice(0, 10),
        value: faceState
    });

    localStorage.setItem('calendar', JSON.stringify(state));
    return state;
}

const store = createStore(allReducers, {
    selectedFace: 0,
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;