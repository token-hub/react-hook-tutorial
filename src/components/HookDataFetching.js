import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const HookDataFetching = () => {

	// const [posts, setPosts] = useState([]);

	// useEffect( () => {
	// 	Axios.get('https://jsonplaceholder.typicode.com/posts')
	// 	.then(response => {
	// 		setPosts(response.data)
	// 	} )
	// 	.catch(error => {

	// 	} )
	// }, [] )

	const [id, setId] = useState(1);
	const [post, setPost] = useState({});
	const [idFromBtn, setIdFromBtn] = useState(1);

	const clickHandler = () => {
		setIdFromBtn(id);
	}

	useEffect( () => {
		Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
		.then( response => {
			setPost(response.data)
			console.log('rendered')
		})
		.catch( error => console.log(error) )
	}, [idFromBtn])



	return(
		<div>
			<h3>Hook Data Fetching</h3>
			<input type="text" name="post" value={id} onChange={e => setId(e.target.value)}  id=""/>
			<button onClick={clickHandler}>Submit</button>
			<ul>
				<li>{post.title}</li>
			</ul>
		</div>
	)
}

export default HookDataFetching