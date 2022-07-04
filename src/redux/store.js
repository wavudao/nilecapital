import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { articlesReducer } from "./reducers";

export const store = createStore(
 articlesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);