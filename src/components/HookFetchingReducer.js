import React, {useReducer, useEffect} from 'react';
import Axios from 'axios';

const initialState = {
	error: '',
	loading: true,
	post: {},
}

const reducer = (state, action) => {
	switch(action.type) {
		case 'success':
			return {
				loading: false,
				post: action.title,
				error: '',
			}

		case 'error':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong!',
			}

			default:
			return state;
	}
}

const HookFetchingReducer = () => {
	
	const [post, dispatch] = useReducer(reducer, initialState);

	useEffect( () => {

		Axios.get('https://jsonplaceholder.t2ypicode.com/posts/1')
		.then( response => {
			dispatch( {type: 'success', title: response.data } )
		} )
		.catch( error => {
			dispatch( {type: 'error'} )
		})
		
	}, [] );

	return(
		<div>
			
			{ post.loading ? 'Loading' : post.post.title }
			{ post.error ? post.error : null }
		</div>
	)
}

export default HookFetchingReducer