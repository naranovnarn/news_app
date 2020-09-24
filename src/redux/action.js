export function LOG_IN(state, payload) {
    const nextState = {...state, isOpenPopUp: true};
    return nextState;
}

export function LOG_OUT(state, payload) {
    const nextState = {...state, isOpenPopUp: false, user: { login: 'guest'}, authorized: false};
    return nextState;
}

export function LOG_IN_SUCCESS(state, payload) {
    const { user } = payload;
    const nextState = {...state, isOpenPopUp: false, user, authorized: true};
    return nextState;
}

export function STOP_LOG_IN(state, payload) {
    const nextState = {...state, isOpenPopUp: false};
    return nextState;
}

export function CREATE_NEWS(state, payload) {
    const news = payload;
    const newsList = state.newsList;
    newsList.push(news);
    const nextState = { ...state, newsList: [...newsList]};
    return nextState;
}