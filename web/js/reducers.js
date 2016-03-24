rootReducer = function(state, action) {
    switch (action.type) {
        case 'ADD_BACON':
            console.log('ADDING BACON');
            break;
        default:
            console.log('wuuut');
            break;
    }

    return state;
};
