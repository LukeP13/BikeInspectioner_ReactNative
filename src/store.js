import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import loggerMiddleware from './middleware/logger'


// Persist config
const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['auth']
};

// Wrap persist aPI around root reducer and store
const middleware = applyMiddleware(loggerMiddleware, thunk)
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);