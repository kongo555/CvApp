import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import {reducer as notificationsReducer} from 'reapop';

import { sectionReducer } from './section_reducer';
import { other } from './other';

const rootReducer = combineReducers({
  notifications: notificationsReducer(),
  other,
  sections: sectionReducer,
  form: formReducer,
  routing: routerReducer
})

export default rootReducer;
