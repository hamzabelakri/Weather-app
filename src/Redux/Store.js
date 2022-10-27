 import Reducer from "./Reducer"
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(
    Reducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  export default store;  
  