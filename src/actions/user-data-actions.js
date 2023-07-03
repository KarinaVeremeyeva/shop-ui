import * as actionType from './actionTypes';

export const userDataRequested = () => {
    return {
        type: actionType.USER_DATA_REQUESTED,
    };
};

export const userDataLoaded = (userData) => {
    return {
        type: actionType.USER_DATA_LOADED,
        payload: userData
    };
};

export const userDataError = (error) => {
    return {
        type: actionType.USER_DATA_LOADED,
        payload: error
    };
};

export const resetUserData = () => {
    return {
        type: actionType.RESET_USER_DATA,
    };
};

export const fetchUserData = shopService => async dispatch => {
    await dispatch(userDataRequested());
    try {
        const userData = await shopService.getUserData();
        return await dispatch(userDataLoaded(userData));
    }
    catch (error) {
        return await dispatch(userDataError(error));   
    }
};