import { combineReducers } from 'redux';
import BookListReducer from './reducer_booklist';
import ActiveBook from './reducer_currentBook';

const rootReducer = combineReducers({
 books: BookListReducer,
 activeBook: ActiveBook
});

export default rootReducer;
