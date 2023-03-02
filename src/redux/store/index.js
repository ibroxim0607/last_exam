import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import rootReducer from "../reducers/rootReducer";

const persistConfig = {
  key: "reducer",
  storage: storage,
  whitelist: ['likeReducer']
}

const presistReducer = persistReducer(persistConfig, rootReducer );
const store = createStore(presistReducer);
const persistor = persistStore(store);

export { store, persistor }