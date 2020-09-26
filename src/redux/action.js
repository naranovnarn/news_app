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
    if (user) {
        localStorage.setItem('authUser', JSON.stringify(user));
        const nextState = {...state, isOpenPopUp: false, user, authorized: true};
        return nextState;
    } else {
        const nextState = {...state, isOpenPopUp: false, authorized: false};
        return nextState;
    }
}

export function STOP_LOG_IN(state, payload) {
    const nextState = {...state, isOpenPopUp: false};
    return nextState;
}

export function CREATE_NEWS(state, payload) {
    const news = payload;
    news.id = +(new Date());
    const newsList = state.newsList;
    newsList.push(news);
    const nextState = { ...state, newsList: [...newsList]};
    localStorage.setItem('newsList', JSON.stringify(newsList));
    return nextState;
}

export function GET_DATA_LOCAL(state, payload) {
    const nextState = { ...state, newsList: payload};
    return nextState;
}

export function DELETE_ITEM(state, payload) {
    const { id } = payload;
    const newsList =[... state.newsList];
    const indexItem = newsList.map(item => item.id).indexOf(id);
    if (indexItem !== -1) {
        newsList.splice(indexItem, 1);
        const nextState = { ...state, newsList};
        localStorage.setItem('newsList', JSON.stringify(newsList));
        return nextState;
    }
}

export function APPROVE_ITEM(state, payload) {
    const { id } = payload;
    let newsList = [...state.newsList];
    const item = newsList.find(item => item.id === id);
    item.isApproved = true;
    const nextState = { ...state, newsList};
    localStorage.setItem('newsList', JSON.stringify(newsList));
    return nextState;
}

export function FILTER_NEWS(state, payload) {
    const { filterNewsList, text } = payload;
    const nextState = { ...state, filterNewsList, term: text}
    return nextState;
}