import { FETCH_USERS } from "./types";


export function fetchUsers(){
	return {
		type: FETCH_USERS,
		payload: [
			{name: 'jane'},
			{name: 'jose'},
			{name: 'jim'}
		]
	}
}
