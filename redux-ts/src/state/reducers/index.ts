import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// give back types from our reducers in redux store
export type RootState = ReturnType<typeof reducers>;
