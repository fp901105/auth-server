import { combineReducers } from 'redux';
import { items, itemsHaveError, itemsAreLoading, itemsAreLogIn } from './items';

export default combineReducers({
    items,
		itemsAreLogIn
});