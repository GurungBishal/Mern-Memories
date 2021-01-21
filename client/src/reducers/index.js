import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";

export default combineReducers({
  posts,
  auth,
});

//posts:posts the first value is the propert in the store object and the second value posts is the postsreducer which we just name posts. since they both have the same name, using js synatx we can use it only once
