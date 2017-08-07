const initilizeState = {
    leftDawerOpen: false
}

const structureUIReducer = (state = initilizeState, action) => {
    switch (action.type) {
        case 'ToggleLeftDawerMenu': {
            state = { ...state };
            state.leftDawerOpen = action.payload;
            break;
        }
        default: {
            break;
        }

    }
    return state;
}

export default structureUIReducer