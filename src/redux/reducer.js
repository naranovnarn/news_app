import * as types from './types';
import { LOG_IN, LOG_IN_SUCCESS, STOP_LOG_IN, LOG_OUT, CREATE_NEWS, GET_DATA_LOCAL, DELETE_ITEM, APPROVE_ITEM, FILTER_NEWS } from './action';

const initState = {
    isOpenPopUp: false,
    user: { login: 'guest'},
    authorized: false,
    newsList: [],
    filterNewsList: [],
    term: ''
};

const reducer = (state = initState, action) => {

    const { type, payload } = action;
    switch(type) {
        case types.LOG_IN: return LOG_IN(state, payload);
        case types.STOP_LOG_IN: return STOP_LOG_IN(state, payload);
        case types.LOG_IN_SUCCESS: return LOG_IN_SUCCESS(state, payload);
        case types.LOG_OUT: return LOG_OUT(state, payload);
        case types.CREATE_NEWS: return CREATE_NEWS(state, payload);
        case types.GET_DATA_LOCAL: return GET_DATA_LOCAL(state, payload);
        case types.DELETE_ITEM: return DELETE_ITEM(state, payload);
        case types.APPROVE_ITEM: return APPROVE_ITEM(state, payload);
        case types.FILTER_NEWS: return FILTER_NEWS(state, payload);
        default: return state;
    }
}

export default reducer;