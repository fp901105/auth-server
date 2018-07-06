export function itemsAreLogIn(state = false, action){
		switch (action.type) {
        case 'ITEMS_ARE_LOG_IN':
            return action.LogedIn;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}