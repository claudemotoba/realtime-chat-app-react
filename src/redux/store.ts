import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/index.reducer";
import Thunk from "redux-thunk";


export default createStore(
    rootReducer,
    // { auth: { user: sessionStorage.getItem("token") } },
    applyMiddleware(Thunk)
);