import {
    IS_FETCHING,
} from '../constants'

export function other(state = {
    isFetching: false,
}, action) {
    switch (action.type) {
        case IS_FETCHING:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
            })

        default:
            return state;
    }
}
