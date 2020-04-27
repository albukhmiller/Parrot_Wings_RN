import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import rootReducer from '../reducers/CombineReducer'

const loggerMiddleware = createLogger()

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store =
    createStore(
        persistedReducer,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );

export default store;