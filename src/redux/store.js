import sagas, { rootReducer } from "./index";
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        immutableCheck: false,
        SerializableStateInvariantMiddleware: false,
        serializableCheck: false,
    }), sagaMiddleware],
});

sagaMiddleware.run(sagas)

let persistor = persistStore(store);


export default { store, persistor };