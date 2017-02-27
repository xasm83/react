const RangeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_RANGE_VALUE':
            return Object.assign({}, state, {rangeValue: action.rangeValue})
        default:
            return state
    }
}

export default RangeReducer