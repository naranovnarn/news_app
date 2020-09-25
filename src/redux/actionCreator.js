import * as types from './types';

export function log_in() {
    return {
        type: types.LOG_IN
    };
}

export function log_in_success(user) {
    return {
        type: types.LOG_IN_SUCCESS,
        payload: { user }
    };
}

export function stop_log_in() {
    return {
        type: types.STOP_LOG_IN
    };
}

export function log_out() {
    return {
        type: types.LOG_OUT
    };
}

export function create_news(news) {
    return {
        type: types.CREATE_NEWS,
        payload: news
    };
}

export function get_data_local(data) {
    return {
        type: types.GET_DATA_LOCAL,
        payload: data
    };
}

export function deleteItem(id) {
    return {
        type: types.DELETE_ITEM,
        payload: { id }
    };
}

export function approveItem(id) {
    return {
        type: types.APPROVE_ITEM,
        payload: { id }
    };
}

export function filter_news(filterNewsList, text) {
    return {
        type: types.FILTER_NEWS,
        payload: { filterNewsList, text }
    };
}