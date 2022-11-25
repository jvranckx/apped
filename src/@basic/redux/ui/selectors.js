export const checkIfLoading = (store, ...actionsToCheck) => {
    return store.ui.loader.actions.some(action => actionsToCheck.includes(action.name));
}

export const getUpdatingItemIds = (store, actionToCheck) => {
    const updatingIds = store.ui.loader.actions.filter(action => action.name === actionToCheck &&
        (Number.isInteger(action.params?.id) || typeof action.params?.id === 'string')
    ).map(action => action.params.id)
    return updatingIds;
};

export const getUpdatingItems = (store) => {

    return store.ui.loader.actions;
};
export const selectSidebarMinimized = (state) => state.ui.sidebar.minimized;
