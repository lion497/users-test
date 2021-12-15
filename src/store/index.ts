import usersSlice from "../slices/usersSlice";
import thunk from "redux-thunk";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducers = combineReducers({
    users: usersSlice,
});
const store = configureStore({
    reducer: reducers,
    middleware: [thunk],
})
export {store};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch