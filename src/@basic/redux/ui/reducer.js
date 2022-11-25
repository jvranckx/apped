import { uiActionTypes } from '../actionTypes';
import isEqual from 'lodash/isEqual';

const initialState = {
    loader: {
        actions: []
    },
    sidebar: {
        minimized: false,
        openItem: ['dashboard'],
        openComponent: null,
    }
};

export default function ui(state = initialState, { type, payload }) {
    const { loader } = state;
    const { actions } = loader;
    switch (type) {
        case uiActionTypes.START_ACTION:
            return {
                ...state,
                loader: {
                    ...loader,
                    actions: [...actions, payload.action]
                }
            };
        case uiActionTypes.STOP_ACTION:
            return {
                ...state,
                loader: {
                    ...loader,
                    actions: actions.filter(action => {
                        if (action.name !== payload.action.name) {
                            return true;
                        } else if (!isEqual(action.params, payload.action.params)) {
                            return true
                        } else {
                            return false
                        }
                    })
                }
            };
        case uiActionTypes.SET_SIDEBAR_MINIMIZED:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,

                    minimized: payload
                }
            };
        case uiActionTypes.SET_ACTIVE_ITEM:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    openItem: payload.openItem
                }
            };
        case uiActionTypes.SET_ACTIVE_COMPONENT:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    openComponent: payload.openComponent
                }
            };
        default:
            return state;
    }
};

