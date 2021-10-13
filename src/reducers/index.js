import { combineReducers } from 'redux';
import toDoReducer from './toDoReducer';
import toDoThemeReducer from './themeReducer';

const rootReducer = combineReducers({
  todo: toDoReducer,
  theme: toDoThemeReducer,
});

export default rootReducer;
