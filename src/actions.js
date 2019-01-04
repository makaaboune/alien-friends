import {CHANGE_SEARCH_FIELD,
		REQUEST_ALIEN_SUCCESS,
		REQUEST_ALIEN_PENDING,
		REQUEST_ALIEN_FAILED
} from './constants';

export const setSearchField = (text) => {
	//console.log(text);
	return({
		type: CHANGE_SEARCH_FIELD,
		payload: text
	})
}

export const requestAliens = () => (dispatch) => {
	dispatch({type: REQUEST_ALIEN_PENDING})
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {return response.json()})
	.then(data => dispatch({type:REQUEST_ALIEN_SUCCESS, payload: data}))
	.catch(error => dispatch({type: REQUEST_ALIEN_FAILED, payload: error}))
}