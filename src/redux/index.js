import { combineReducers } from "redux"
import { all } from "redux-saga/effects"
import auth from "../@basic/redux/auth/reducer"
import ui from "../@basic/redux/ui/reducer"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web




const authConfig = {
    key: 'auth',
    storage,
    blacklist: ['error']
};

const uiConfig = {
    key: 'ui',
    storage,
    blacklist: ['loader']
}


export const rootReducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    ui: persistReducer(uiConfig, ui),

})


export default function* rootSaga() {
    yield all([

    ])
}