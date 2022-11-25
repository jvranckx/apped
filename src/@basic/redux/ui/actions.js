import { uiActionTypes } from '../actionTypes';

export const startAction = (name, params) => ({
    type: uiActionTypes.START_ACTION,
    payload: {
        action: { name, params }
    }
});

export const stopAction = (name, params) => ({
    type: uiActionTypes.STOP_ACTION,
    payload: {
        action: { name, params }
    }

});

export const setSidebarMinimized = (state) => ({
    type: uiActionTypes.SET_SIDEBAR_MINIMIZED,
    payload: state
});

export const activeItem = (state) => ({
    type: uiActionTypes.SET_ACTIVE_ITEM,
    payload: state
});

export const activeComponent = (state) => ({
    type: uiActionTypes.SET_ACTIVE_COMPONENT,
    payload: state
});