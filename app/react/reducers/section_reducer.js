import {
    RECEIVE_DATAS,
    ADD_DATA,
    REMOVE_DATA,
} from '../constants'

// export function section(state = {}, action, symbol) {
//     switch (action.type) {
//         case RECEIVE_DATAS:
//             return Object.assign({}, state, {
//                 action.data,
//             })
//         default:
//             return state
//     }
// }


export function data(state = {}, action) {
    switch (action.type) {
        case ADD_DATA:
            return action.data;
        default:
            return state
    }
}

export function sectionReducer(state = {
  cvs: [],
  personal_informations: [],
  languages: [],
  skills: [],
  educations: [],
  interests: [],
  experiences: [],
  projects: [],
  templates: []
}, action) {
    switch (action.type) {
        case RECEIVE_DATAS:
            state[action.section] = action.data;
            return {...state};

        case ADD_DATA:
            state[action.section] = [
                ...state[action.section],
                data(undefined, action)];
            return {...state};

        case REMOVE_DATA:
            const index = state[action.section].findIndex(item => {
              return item.id == action.id
            })
            state[action.section] = [
              ...state[action.section].slice(0, index),
              ...state[action.section].slice(index + 1)];
            return {...state};

        default:
            return state;
    }
}
