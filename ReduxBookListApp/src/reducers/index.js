import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

//Whatever is passed to the combineReducers ends up on the global application state
const rootReducer = combineReducers({
  books : BooksReducer,
  activeBook : ActiveBook
});

export default rootReducer;
