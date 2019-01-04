import {CHANGE_SEARCH_FIELD,
		REQUEST_ALIEN_SUCCESS,
		REQUEST_ALIEN_PENDING,
		REQUEST_ALIEN_FAILED
} from './constants';

//Init object in redux store
const initStateSearch = {
	searchField: ''
}

const initStateAlien = {
	isPending:false,
	error: '',
	aliens: []

}

//Functions reducers
export const searchAliens = (state=initStateSearch,action={})=> {
		//console.log(action.type);
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchField: action.payload}); 
		default:
			return state;	
	}
}

export const requestAliens = (state=initStateAlien, action={}) => {
	switch(action.type){
		case REQUEST_ALIEN_PENDING:
			return Object.assign({}, state, {isPending:true});
		case REQUEST_ALIEN_SUCCESS:
			return Object.assign({}, state, {aliens:action.payload, isPending: false});
		case REQUEST_ALIEN_FAILED:
			return Object.assign({}, state, {error:action.payload})
		default:
			return state;
	}
}

