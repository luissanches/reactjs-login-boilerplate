const initilizeState = {
    remember: false, login: '', pws: ''
}


const userReducer = (state = initilizeState, action) => {
    switch (action.type) {
        case 'AddCurrentUser': {
            state = { ...state };
            state = action.payload;
            
            break;
        }
        case 'RemoveCurrentUser': {
            state = { ...state };
            state = { remember: false, user: '', pws: ''};
            localStorage.removeItem('userremember');
            break;
        }
        default: {
            break;
        }

    }
    return state;
}

export default userReducer