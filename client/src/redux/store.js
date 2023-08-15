import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // * conexion al browser

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleWare))
); // * conexion del reducer con el servidor (api/db)

export default store;
