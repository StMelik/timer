import { combineReducers } from 'redux';

import { appReducer } from './app';
import { circlesReducer } from './circles';
import { exercisesReducer } from './exercises';

export const rootReducer = combineReducers({
  app: appReducer,
  circles: circlesReducer,
  exercises: exercisesReducer
});
