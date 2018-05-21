import { combineReducers } from 'redux';
import BookListReducer from './reducer_booklist'

const rootReducer = combineReducers({
 books: BookListReducer
});

export default rootReducer;
