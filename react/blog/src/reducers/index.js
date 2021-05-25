import { combineReducers } from 'redux';
import postsReducer from "./postsReducer";
import  uesrsReducer from "./usersReducer";

export default combineReducers({
	posts: postsReducer,
	users: uesrsReducer
});