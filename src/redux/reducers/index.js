import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cache from "./cache";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cache"],
};

const rootReducer = combineReducers({
  cache
});
export default persistReducer(persistConfig, rootReducer);
